console.log('[Spellbinder] Background service starting...');

type AnyMsg = Record<string, any>;

const popupPorts = new Set<browser.runtime.Port>();
const contentPorts = new Set<browser.runtime.Port>();

browser.runtime.onConnect.addListener((port) => {
    // POPUP
    if (port.name === 'spellbinder-popup') {
        console.log('[Spellbinder] Connection request from popup recieved');
        // setup connection
        popupPorts.add(port);
        port.onDisconnect.addListener(() => popupPorts.delete(port));
        port.onMessage.addListener((msg: AnyMsg) => {
            // popup -> background: { type:'toContent', tabID, payload }
            console.log(`[Spellbinder] (from Popup) ${JSON.stringify(msg)}`);
            contentPorts.forEach((p) => p.postMessage(msg.payload));
        });
        return;
    }
    // CONTENT (React Injection)
    if (port.name === 'spellbinder-content') {
        console.log('[Spellbinder] Connection request from content recieved');
        // setup connection
        contentPorts.add(port);
        port.onDisconnect.addListener(() => contentPorts.delete(port));
        port.onMessage.addListener((msg: AnyMsg) => {
            // popup -> background: { type:'toContent', tabID, payload }
            console.log(`[Spellbinder] (from Content) ${JSON.stringify(msg)}`);
            popupPorts.forEach((p) => p.postMessage(msg.payload));
        });
    }
});

console.log('[Spellbinder] Background service running...');
