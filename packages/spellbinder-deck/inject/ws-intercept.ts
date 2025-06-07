function injectPageScript(source: string) {
    const script = document.createElement('script');
    script.textContent = source;
    document.documentElement.appendChild(script);
    script.remove();
}

injectPageScript(`(${(() => {
    console.log("[Spellbinder] Injecting WS hook...");

    // Store original
    const OriginalWebSocket = window.WebSocket;

    // Hook send on prototype
    const originalSend = OriginalWebSocket.prototype.send;
    OriginalWebSocket.prototype.send = function (data) {
        try {
            const parsed = structuredClone(JSON.parse(data.toString()));

            // tag the parsed data
            if (parsed?.data?.context?.name) {
                parsed.data.setId = "spellbinder-modified";
                parsed.data.context.name = `${parsed.data.context.name} (using Spellbinder)`;
                console.log("[Spellbinder] Intercepting roll:", parsed);
            }

            if (parsed?.eventType === "dice/roll/fulfilled") {

                // Force the d20 value to 20
                parsed.data.rolls?.forEach((roll) => {
                    roll.diceNotation?.set?.forEach((set) => {
                        set.dice?.forEach((die) => {
                            if (die.dieType === "d20") {
                                die.dieValue = 20;
                                if (roll.result?.values) {
                                    roll.result.values = [20];
                                    roll.result.total = 20 + (roll.diceNotation?.constant || 0);
                                    roll.result.text = `20+${roll.diceNotation?.constant || 0}`;
                                }
                                console.log("[Spellbinder] Modified d20 value to 20");
                            }
                        });
                    });
                });
            }

            // Replace data with modified version
            data = JSON.stringify(parsed);

        } catch (err) {
            console.warn("[Spellbinder] Could not parse WS data:", err);
        }

        console.log("[Spellbinder] Sending (possibly modified):", data);
        return originalSend.call(this, data);
    };

    // Hook incoming messages (optional)
    const originalAddEventListener = OriginalWebSocket.prototype.addEventListener;
    OriginalWebSocket.prototype.addEventListener = function (type, listener, ...rest) {
        if (type === "message") {
            const wrapped = function (event) {
                console.log("[Spellbinder] WS receive:", event.data);
                return listener.call(this, event);
            };
            return originalAddEventListener.call(this, type, wrapped, ...rest);
        }
        return originalAddEventListener.call(this, type, listener, ...rest);
    };

    console.log("[Spellbinder] WebSocket prototype hooked safely.");
})})();`);
