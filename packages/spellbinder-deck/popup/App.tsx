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

    const [spellbinderData, setSpellbinderData] = useState<any>(null); // custom JSON structure stored in character notes, for persistence

    useEffect(() => {
        ensurePort();
    }, []);

    useEffect(() => {
        if (port) {
            // popup --> injection
            const forwardToInjected = (msg: any) => {
                window.dispatchEvent(new CustomEvent('spellbinder:message', { detail: msg }));
            };
            port.onMessage.addListener(forwardToInjected);

            // injection --> popup
            const handleIncoming = (msg: any) => {
                console.log('[Spellbinder] Received message from injection:', msg);
                if (msg) {
                    const payload = msg?.payload;
                    if (payload) {
                        if (msg.type === 'spellbinder:spellbinderData') {
                            setSpellbinderData(payload);
                        }
                    }

                }
            };
            port.onMessage.addListener(handleIncoming);

            // cleanup listener
            return () => {
                // @ts-ignore
                port.onMessage.removeListener?.(forwardToInjected);
                // @ts-ignore
                port.onMessage.removeListener?.(handleIncoming);
            };
        }
    }, [port]);

    async function ensurePort() {
        // PORT AS SINGLETON
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

    console.log('Test from popup');

    return (
        <>
            <h3>
                Boblin haves many spells. Too many spells to 'member!
                But Boblin like cards. Boblin like cards very lot!
                Except for time when cards kill frends and make S'brina sad... Boblin no like that.
                But Boblin like cards! And now Boblin spells are cards!!!
            </h3>
            <span>
                { port ? 'Port connected: ' : 'Port is null.' }
                <button onClick={sendTest} disabled={port === null}>Test</button>
            </span>
            { /*spellbinderData &&*/
                spellbinderData
            }
        </>
    )
}

export default App
