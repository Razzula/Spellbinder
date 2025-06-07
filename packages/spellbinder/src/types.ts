export type Ability = {
    type: 'spell' | 'ability' | 'standard';
    name: string;
    castingTime: {
        type: 'Action' | 'Bonus Action' | 'Reaction' | 'Feat' | 'Free' | 'Rider Effect' | 'Response' ;
        time?: string;
    };
    school: string;
    description: {
        flavour?: string;
        body: string[];
    };
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
