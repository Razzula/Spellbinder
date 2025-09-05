export type DDBGameLogMessage =
    | DiceRollPendingMessage
    | DiceRollFulfilledMessage
    | CharacterUpdateMessage
    | ResourceUpdateMessage
    | InitiativeUpdateMessage
    | ConditionUpdateMessage
    | ChatMessage
    | UnknownDDBMessage;

export interface BaseDDBMessage {
    id: string;
    dateTime: string;
    gameId: string;
    userId: string;
    source: "web";
    entityId: string;
    entityType: "character" | string;
    eventType: string;
    persist: boolean;
    messageScope: "gameId";
    messageTarget: string;
    data: any;
}

export interface DiceRollPendingMessage extends BaseDDBMessage {
    eventType: "dice/roll/pending";
    data: RollData;
}

export interface DiceRollFulfilledMessage extends BaseDDBMessage {
    eventType: "dice/roll/fulfilled";
    data: RollData;
}

export interface RollData {
    rollId: string;
    action: string;
    setId: string;
    rolls: Roll[];
    context: EntityContext;
}

export interface Roll {
    diceNotation: DiceNotation;
    rollType: string;
    rollKind: string;
    result?: {
        constant: number;
        values: (number | string)[];
        total: number | string;
        text: string;
    };
}

export interface DiceNotation {
    set: {
        count: number;
        dieType: string;
        dice: {
            dieType: string;
            dieValue: number;
        }[];
        operation: number;
    }[];
    constant: number;
}

export interface EntityContext {
    entityId: string;
    entityType: "character" | string;
    name: string;
    avatarUrl?: string;
    messageScope: "gameId";
    messageTarget: string;
}

export interface CharacterUpdateMessage extends BaseDDBMessage {
    eventType: "character/update";
    data: any;
}

export interface ResourceUpdateMessage extends BaseDDBMessage {
    eventType: "resource/update";
    data: any;
}

export interface InitiativeUpdateMessage extends BaseDDBMessage {
    eventType: "initiative/update";
    data: any;
}

export interface ConditionUpdateMessage extends BaseDDBMessage {
    eventType: "conditions/update";
    data: any;
}

export interface ChatMessage extends BaseDDBMessage {
    eventType: "chat/message";
    data: {
        context: EntityContext;
        message: string;
    };
}

export interface UnknownDDBMessage extends BaseDDBMessage {
    eventType: string;
    data: any;
}

export type SpellbinderMeta = {
    entityId: string;
    entityType: string;
    name: string;
    avatarUrl?: string;
    gameId: string;
    userId: string;
};

export type CharacterSheet = {
    id: number;
    userId: number;
    username: string;
    name: string;
    campaign?: {
        id: number;
        name: string;
        link: string;
    };
    notes?: {
        otherNotes?: string;
        allies?: string | null;
        personalPossessions?: string | null;
    };
    actions?: {
        race?: any[];
        class?: any[];
        background?: any;
        feat?: any[];
        item?: any;
    };
    spells?: {
        race?: any[];
        class?: any[];
        background?: any;
    };
    inventory?: any[];
    race?: {
        baseRaceName?: string;
        racialTraits?: any[];
        description?: string;
    };
    features?: any[];
    feats?: any[];
    stats?: { id: number; value: number }[];
    customActions?: any[];
    inspiration?: boolean;
}; 
