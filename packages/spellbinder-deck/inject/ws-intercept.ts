import { BaseDDBMessage, SpellbinderMeta } from './DDBTypes';

function injectPageScript(source: string) {
    const script = document.createElement('script');
    script.textContent = source;
    document.documentElement.appendChild(script);
    script.remove();
}

injectPageScript(`(${(() => {
    console.log('[Spellbinder] Injecting WS hook...');

    // WEBSOCKET INTERCEPT
    // store original
    const OriginalWebSocket = window.WebSocket;

    // override WebSocket constructor
    window.WebSocket = function (...args) {
        const ws = new OriginalWebSocket(...args);

        // expose the socket
        window.dispatchEvent(new CustomEvent('spellbinder-ws', { detail: ws }));

        return ws;
    } as any;

    window.WebSocket.prototype = OriginalWebSocket.prototype;
    Object.setPrototypeOf(window.WebSocket, OriginalWebSocket);

    // hook send on prototype
    const originalSend = OriginalWebSocket.prototype.send;
    OriginalWebSocket.prototype.send = function (data) {
        try {
            const parsed: BaseDDBMessage = structuredClone(JSON.parse(data.toString()));

            // sniff data
            if (parsed?.data?.context) {
                // populate global metadata
                const meta: SpellbinderMeta = {
                    entityId: parsed.data.context.entityId,
                    entityType: parsed.data.context.entityType,
                    name: parsed.data.context.name,
                    avatarUrl: parsed.data.context.avatarUrl,
                    gameId: parsed.gameId,
                    userId: parsed.userId
                };
                // console.log('[Spellbinder] Dispatching spellbinder meta...', meta);
                window.dispatchEvent(new CustomEvent('spellbinder-meta', {
                    detail: meta,
                }));
            }

            let modified = false;

            // if (parsed?.eventType === 'dice/roll/fulfilled') {

            //     // force the d20 value to 20
            //     parsed.data.rolls?.forEach((roll) => {
            //         roll.diceNotation?.set?.forEach((set) => {
            //             set.dice?.forEach((die) => {
            //                 if (die.dieType === 'd20') {
            //                     modified = true;
            //                     die.dieValue = 20;
            //                     if (roll.result?.values) {
            //                         roll.result.values = [20];
            //                         roll.result.total = 20 + (roll.diceNotation?.constant || 0);
            //                         roll.result.text = `20+${roll.diceNotation?.constant || 0}`;
            //                     }
            //                     console.log('[Spellbinder] Modified d20 value to 20');
            //                 }
            //             });
            //         });
            //     });
            // }

            if (modified) {
                // tag the parsed data
                if (parsed?.data?.context?.name) {
                    parsed.data.setId = 'spellbinder-modified';
                    parsed.data.context.name = `${parsed.data.context.name} (using Spellbinder)`;
                }

                // replace data with modified version
                data = JSON.stringify(parsed);
            }

        } catch (err) {
            console.warn('[Spellbinder] Could not parse WS data:', err);
        }

        console.log('[Spellbinder] Sending (possibly modified):', data);
        return originalSend.call(this, data);
    };

    // hook incoming messages
    const originalAddEventListener = OriginalWebSocket.prototype.addEventListener;
    OriginalWebSocket.prototype.addEventListener = function (type, listener, ...rest) {
        if (type === 'message') {
            const wrapped = function (event) {
                console.log('[Spellbinder] WS receive:', event.data);
                return listener.call(this, event);
            };
            return originalAddEventListener.call(this, type, wrapped, ...rest);
        }
        return originalAddEventListener.call(this, type, listener, ...rest);
    };

    console.log('[Spellbinder] WebSocket prototype hooked safely.');
})})();`);

injectPageScript(`(${(() => {
    console.log('[Spellbinder] Injecting FETCH hook...');

    // FETCH INTERCEPT
    // store original
    const originalFetch = window.fetch;

    // override
    window.fetch = async function (input, init) {
        if (init?.headers) {
            const headers = init.headers;
            const auth = headers.get?.('Authorization') || headers.Authorization || headers.authorization;
            if (auth?.startsWith('Bearer')) {
                (window as any).__spellbinderAuthToken = auth;
                window.dispatchEvent(new CustomEvent('spellbinder-auth', {
                    detail: auth,
                }));
            }
        }
        return originalFetch(input, init);
    };

    console.log('[Spellbinder] FETCH prototype hooked safely.');
})})();`);
