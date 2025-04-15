import { Ability } from "../../../../types";

const rage: Ability = {
    type: 'ability',
    name: 'Rage',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Barbarian',
    description: {
        body:[
            '*With a primal Barbarian Rage, you are imbued with an extraordinary might and resilience.*^ Gain:',
            '- **Resistance** to Bludgeoning, Piercing, Slashing.',
            '- Extra damage^^ with Strength-based attacks.',
            '- **Advantage** on **Strength** checks and saves.',
            '- Cannot cast or concentrate on spells.',
            'Rage lasts until end of next turn; extended by attacking, forcing saves, or expending a Bonus Action (for a maximum of 10 minutes).',
            'Ends instantly if Incapacitated or wearing Heavy armour.',
            'Regain 1 use on Short Rest, all** on Long Rest.',
        ],
    },
    source: 'Free Rules (2024), pg. ???',
    higherLevel: 'cannot be wearing heavy armour; ^^ see the Barbarian Features table',
};

export default rage;
