import { Ability } from "../../../../types";

const recklessAttack: Ability = {
    type: 'ability',
    name: 'Reckless Attack',
    castingTime: {
        type: 'Action',
    },
    school: 'Barbarian',
    description: {
        flavour: 'You throw aside all concern for defense to attack with increased ferocity.',
        body:[
            'Make a melee weapon **Attack**, as your first **Attack** this turn.',
            'Until the start of your next turn, you have Advantage on all Strength-based attacks.',
            'However, you also expose yourself, and so all attack rolls made **against** you also have Advantage, for this time.',
        ],
    },
    meta: {
        duration: 'until start of next turn',
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default recklessAttack;
