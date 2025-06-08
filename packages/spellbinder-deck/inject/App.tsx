import { useEffect, useState } from 'react';

import { CardFactory, abilities } from 'spellbinder'
import { ChatMessage, DDBGameLogMessage, DiceRollFulfilledMessage, DiceRollPendingMessage, SpellbinderMeta } from './DDBTypes';
import { emulateDieRoll, mockChatMessage, updateDDBNotes } from './DDBUtils';

function App() {

    const [spellbinderWS, setSpellbinderWS] = useState<WebSocket | null>(null);
    const [spellbinderMeta, setSpellbinderMeta] = useState<SpellbinderMeta | null>(null);
    const [authToken, setAuthToken] = useState<string | null>(null);

    useEffect(() => {
        // listen for the spellbinder-ws event to get the WebSocket instance
        const handler = (e: CustomEvent) => {
            setSpellbinderWS(e.detail);
        };
        window.addEventListener('spellbinder-ws', handler as EventListener);
        return () => window.removeEventListener('spellbinder-ws', handler as EventListener);
    }, []);

    useEffect(() => {
        // listen for the spellbinder-meta event to get the metadata
        const handler = (e: CustomEvent) => {
            console.log('[Spellbinder] Received spellbinder meta:', e.detail);
            setSpellbinderMeta(e.detail);
        };
        window.addEventListener('spellbinder-meta', handler as EventListener);
        return () => window.removeEventListener('spellbinder-meta', handler as EventListener);
    }, []);

    useEffect(() => {
        // listen for the spellbinder-auth event to get the auth token
        const handler = (e: CustomEvent) => {
            console.log('[Spellbinder] Received DDB auth token:', e.detail);
            setAuthToken(e.detail);
        };
        window.addEventListener('spellbinder-auth', handler as EventListener);
        return () => window.removeEventListener('spellbinder-auth', handler as EventListener);
    }, []);

    useEffect(() => {
        if (authToken && spellbinderMeta?.entityId) {
            const entityId: number = Number(spellbinderMeta.entityId) || 0;
            updateDDBNotes('test from Spellbinder', entityId, authToken);
        }
    }, [authToken, spellbinderMeta]);

    function handleButtonClick() {
        if (!spellbinderWS || !spellbinderMeta) {
            console.error('[Spellbinder] No WebSocket or metadata available');
            return;
        }
        emulateDieRoll(
            spellbinderWS, spellbinderMeta,
            'Test Roll', 1, 'd20', 'spellbinder-mock', 0,
        );
    }

    return (
        <div
            id='spellbinderApp'
            style={{
                position: 'fixed',
                inset: 0,
                display: 'flex',
                justifyContent: 'space-between',
                pointerEvents: 'none',
                zIndex: 9999,
                padding: '1rem',
            }}
        >
            <div
                className='leftPanel'
                style={{ pointerEvents: 'auto', maxWidth: '20%', minWidth: '250px' }}
            >
                {/* {CardFactory(abilities['Breath Weapon'])} */}
            </div>

            <div
                className='rightPanel'
                style={{
                    pointerEvents: 'auto',
                    maxWidth: '20%',
                    minWidth: '250px',
                    position: 'relative',
                }}
            >
                {/* {CardFactory(abilities['Fireball'])} */}
                <button
                    className='floatingButton'
                    style={{
                        position: 'absolute',
                        bottom: '1rem',
                        right: '1rem',
                        zIndex: 10000,
                    }}
                    onClick={handleButtonClick}
                    disabled={!spellbinderWS || !spellbinderMeta}
                >
                    Magic Button!
                </button>
            </div>
        </div>
    );
}

export default App;
