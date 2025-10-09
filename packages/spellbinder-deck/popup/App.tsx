import { useEffect, useState } from 'react';

import './App.css'

export type Port = {
    name: string;
    postMessage: (msg: any) => void;
    onMessage: { addListener(fn: (msg: any) => void): void };
    onDisconnect: { addListener(fn: () => void): void };
    disconnect(): void;
};

function App() {

    const browserAPI: any = (globalThis as any).browser ?? (globalThis as any).chrome;

    const [port, setPort] = useState<Port | null>(null);

    useEffect(() => {
        ensurePort();
    }, [])

    useEffect(() => {
        if (port) {
            port.onMessage.addListener((msg: any) => {
                // msg is whatever popup sent as payload
                window.dispatchEvent(new CustomEvent('spellbinder:message', { detail: msg }));
            });
        }
    }, [port])

    async function ensurePort() {
        if (port) {
            return port;
        }
        // establish port connection
        const newPort: Port = browserAPI.runtime.connect({ name: 'spellbinder-popup' });
        // when closed, nullify port
        newPort.onDisconnect.addListener(() => { setPort(null) });

        // store port, for future calls
        setPort(newPort);

        return newPort;
    }

    async function sendTest() {
        const p = await ensurePort();
        p?.postMessage({
            type: 'spellbinder',
            payload: 'HELLO WORLD!',
        });
    }

    return (
        <>
            <span>
                { port ? 'Port connected' : 'Port is null.' }
            </span>
            <h3>
                Boblin haves many spells. Too many spells to 'member!
                But Boblin like cards. Boblin like cards very lot!
                Except for time when cards kill frends and make S'brina sad... Boblin no like that.
                But Boblin like cards! And now Boblin spells are cards!!!
            </h3>
            <button onClick={sendTest}>Test</button>
        </>
    )
}

export default App
