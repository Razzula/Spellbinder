export type Ability = {
    type: 'spell' | 'ability';
    name: string;
    castingTime: {
        type: 'Action' | 'Bonus Action' | 'Reaction' | 'Feat' | 'Free';
        time?: string;
    };
    school: string;
    description: string[];
    meta?: {
        range?: string;
        area?: string;
        save?: string;
        dc?: string;
        attack?: string;
        damage?: {
            type: string;
            amount: string;
        };
        duration?: string;
        effect?: string;
    };
    level?: number;
    components?: {
        verbal?: boolean;
        somatic?: boolean;
        material?: string;
        ritual?: boolean;
        concentration?: boolean;
    };
    higherLevel?: string;
    source: string;
};
