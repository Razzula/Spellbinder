import { useEffect, useState } from 'react';

import { Card, CardFactory, abilities } from 'spellbinder'
import { CharacterSheet, characterToMeta, ChatMessage, DDBGameLogMessage, DiceRollFulfilledMessage, DiceRollPendingMessage, SpellbinderMeta } from './DDBTypes';
import { emulateDieRoll, fetchCharacter, mockChatMessage, updateDDBNotes } from './DDBUtils';

function App() {

    // data sniffed from ws-intercept.ts
    const [spellbinderWS, setSpellbinderWS] = useState<WebSocket | null>(null);
    const [spellbinderMeta, setSpellbinderMeta] = useState<SpellbinderMeta | null>(null);
    const [authToken, setAuthToken] = useState<string | null>(null);

    // data fetched from DDB
    const [characterID, setCharacterID] = useState<number | null>(null);
    const [characterSheet, setCharacterSheet] = useState<CharacterSheet | null>(null); // JSON structure of the character sheet (provided by DDB)

    // Spellbinder data
    const [spellbinderData, setSpellbinderData] = useState<any>(null); // custom JSON structure stored in character notes, for persistence
    
    useEffect(() => {
        const match = window.location.pathname.match(/\/characters\/(\d+)/);
        setCharacterID(match ? Number(match[1]) : null);
    }, []);

    useEffect(() => {
        // listen for the spellbinder-ws event to get the WebSocket instance
        const handler = (e: CustomEvent) => {
            if (spellbinderWS !== e.detail) {
                console.log('[Spellbinder] Received spellbinder WS:', e.detail);
                setSpellbinderWS(e.detail);
            }
        };
        window.addEventListener('spellbinder-ws', handler as EventListener);
        return () => window.removeEventListener('spellbinder-ws', handler as EventListener);
    }, []);

    useEffect(() => {
        // listen for the spellbinder-meta event to get the metadata
        const handler = (e: CustomEvent) => {
            if (spellbinderMeta !== e.detail) {
                console.log('[Spellbinder] Received spellbinder meta:', e.detail);
                // setSpellbinderMeta(e.detail);
            }
        };
        window.addEventListener('spellbinder-meta', handler as EventListener);
        return () => window.removeEventListener('spellbinder-meta', handler as EventListener);
    }, []);

    useEffect(() => {
        // listen for the spellbinder-auth event to get the auth token
        const handler = (e: CustomEvent) => {
            if (e.detail !== authToken) {
                console.log('[Spellbinder] Received DDB auth token:', e.detail);
                setAuthToken(e.detail);
            }
        };
        window.addEventListener('spellbinder-auth', handler as EventListener);
        return () => window.removeEventListener('spellbinder-auth', handler as EventListener);
    }, []);

    useEffect(() => {
        // fetch the character sheet from DDB
        if (authToken && characterID) {
            loadCharacter();
        }
    }, [authToken, characterID]);

    useEffect(() => {
        // load embedded Spellbinder data from sheet's notes
        if (characterSheet?.notes?.otherNotes) {
            const otherNotes = characterSheet.notes.otherNotes;
            try {
                const parsedNotes = JSON.parse(otherNotes);
                console.log('[Spellbinder] Parsed notes:', parsedNotes);
                setSpellbinderData(parsedNotes);
            }
            catch (err) {
                console.warn('[Spellbinder] Error parsing notes:', err);
            }
        }
    }, [characterSheet]);

    useEffect(() => {
        // embedd Spellbinder data into character notes
        if (!spellbinderData) return;
        if (authToken && characterID) {
            updateDDBNotes(JSON.stringify(spellbinderData), characterID, authToken);
        }
    }, [spellbinderData]);

    function loadCharacter() {
        /**
         * Fetch the character sheet from DDB using the auth token and character ID.
         */
        if (authToken && characterID) {
            fetchCharacter(characterID, authToken)
                .then(character => {
                    console.log('[Spellbinder] Fetched character:', character.message);
                    console.log('[Spellbinder] Character data:', character.data);
                    setCharacterSheet(character.data);
                    setSpellbinderMeta(characterToMeta(character.data));
                })
                .catch(err => console.error('[Spellbinder] Error fetching character:', err));
        }
    }

    function handleButtonClick() {
        /**
         * Handle the button click to emulate a die roll.
         */
        if (!spellbinderWS || !spellbinderMeta) {
            console.error('[Spellbinder] No WebSocket or metadata available');
            return;
        }
        emulateDieRoll(
            spellbinderWS, spellbinderMeta,
            'Test Roll', 1, 'd20', 'spellbinder-mock', 0,
        );
    }

    console.log(`[Spellbinder] ${JSON.stringify(abilities['Fireball'], null, 2)}`);
    const test = CardFactory(abilities['Fireball']);
    console.log('[Spellbinder] Test card:', test);

    const test2 = <Card
        type='ability'
        name='Test'
        castingTime={{
            type: 'Action',
        }}
        school=''
        description={{
            body:[
                '',
            ],
        }}
        source=''
    />;
    console.log('[Spellbinder] Test2 card:', test2);

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
                Test
                {test}
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
