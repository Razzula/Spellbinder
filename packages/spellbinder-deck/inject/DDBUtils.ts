import { ChatMessage, DiceRollFulfilledMessage, DiceRollPendingMessage, SpellbinderMeta } from "./DDBTypes";


export function emulateDieRoll(
    spellbinderWS: WebSocket, spellbinderMeta: SpellbinderMeta,
    action: string, count: number, dieType: string, rollType: string, constant: number = 0,
) {
    // INFORM DDB OF PENDING ROLL
    if (!spellbinderWS || !spellbinderMeta) {
        console.error('[Spellbinder] No WebSocket or metadata available');
        return;
    }
    const rollID = crypto.randomUUID();

    const pending: DiceRollPendingMessage = {
        id: crypto.randomUUID(),
        dateTime: Date.now().toString(),
        gameId: spellbinderMeta.gameId,
        userId: spellbinderMeta.userId,
        source: 'web',
        data: {
            context: {
                entityId: spellbinderMeta.entityId,
                entityType: spellbinderMeta.entityType,
                name: `${spellbinderMeta.name} (using Spellbinder)`,
                avatarUrl: spellbinderMeta.avatarUrl,
                messageScope: 'gameId',
                messageTarget: spellbinderMeta.gameId
            },
            rollId: rollID,
            action,
            rolls: [
                {
                    diceNotation: {
                        set: [
                            {
                                count,
                                dieType,
                                dice: [{ dieType, dieValue: 0 }],
                                operation: 0
                            }
                        ],
                        constant,
                    },
                    rollType,
                    rollKind: ''
                }
            ],
            setId: 'spellbinder-mock'
        },
        entityId: spellbinderMeta.entityId,
        entityType: 'character',
        eventType: 'dice/roll/pending',
        persist: false,
        messageScope: 'gameId',
        messageTarget: spellbinderMeta.gameId
    };
    spellbinderWS.send(
        JSON.stringify(pending)
    );

    // ROLL
    const rollResult = Math.floor(Math.random() * 21);

    // INFORM DDB OF ROLL RESULT
    const fulfilled: DiceRollFulfilledMessage = {
        ...pending,
        id: crypto.randomUUID(),
        dateTime: Date.now().toString(),
        eventType: 'dice/roll/fulfilled',
        persist: true,
        data: {
            ...pending.data,
            rolls: [
                {
                    ...pending.data.rolls[0],
                    result: {
                        constant,
                        values: [rollResult],
                        total: rollResult + constant,
                        text: `${rollResult}${constant ? ` + ${constant}` : ''} = ${rollResult + constant}`
                    }
                }
            ]
        }
    };
    spellbinderWS.send(
        JSON.stringify(fulfilled)
    );

    alert(`Rolled a ${dieType}: ${fulfilled.data.rolls[0].result?.text}`);
}

export function mockChatMessage(
    spellbinderWS: WebSocket, spellbinderMeta: SpellbinderMeta,
) {
    if (spellbinderWS && spellbinderMeta) {
        const payload: ChatMessage = {
            id: crypto.randomUUID(),
            dateTime: Date.now().toString(),
            gameId: spellbinderMeta.gameId,
            userId: spellbinderMeta.userId,
            source: 'web',
            data: {
                context: {
                    entityId: spellbinderMeta.entityId,
                    entityType: spellbinderMeta.entityType,
                    name: spellbinderMeta.name,
                    avatarUrl: spellbinderMeta.avatarUrl,
                    messageScope: 'gameId',
                    messageTarget: spellbinderMeta.gameId
                },
                message: 'Test!'
            },
            entityId: spellbinderMeta.entityId,
            entityType: 'character',
            eventType: 'chat/message',
            persist: true,
            messageScope: 'gameId',
            messageTarget: spellbinderMeta.gameId,
        }
        spellbinderWS.send(
            JSON.stringify(payload)
        );
    }
}

export async function fetchCharacter(characterID: number, authToken: string) {
    console.log(`[Spellbinder] Fetching character with ID: ${characterID}`);
    const res = await fetch(
        `https://character-service.dndbeyond.com/character/v5/character/${characterID}?includeCustomItems=true`,
        {
            method: 'GET',
            headers: {
                'Authorization': `${authToken}`,
            },
            credentials: 'include',
        }
    );

    return res.json();
}

export async function updateDDBNotes(notes: string, characterID: number, authToken: string): Promise<Response> {
    const res = await fetch('https://character-service.dndbeyond.com/character/v5/description/notes', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${authToken}`,
        },
        credentials: 'include',
        body: JSON.stringify({
            characterId: characterID,
            otherNotes: notes,
        }),
    });

    return res;
}
