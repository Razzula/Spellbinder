import { createRoot } from 'react-dom/client';

import App, { Port } from './App';

console.log('[Spellbinder] Injecting React App...');

// setup port listener to communicate with Popup
const browserAPI: any = (globalThis as any).browser ?? (globalThis as any).chrome;
const port: Port = browserAPI.runtime.connect({ name: 'spellbinder-content' });
if (port) {
    console.log(`[Spellbinder] Injection connected to port ${port}`);
}
else {
    console.error('[Spellbinder] Injection failed to connect to port!');
}

port.onMessage.addListener((msg: any) => {
    // msg is whatever popup sent as payload
    window.dispatchEvent(new CustomEvent('spellbinder:message', { detail: msg }));
});

// inject the React app into the page
const container = document.createElement('div');
container.id = 'spellbinder-deck-root';
container.style.position = 'fixed';
container.style.bottom = '0';
container.style.left = '0';
container.style.width = '100%';
container.style.zIndex = '9999';
document.body.appendChild(container);

const root = createRoot(container);
root.render(<App port={port} />);

console.log('[Spellbinder] React App mounted successfully!');
