import { Ability } from "../../../../types";

const luck: Ability = {
    type: 'ability',
    name: 'Luck',
    castingTime: {
        type: 'Response',
    },
    school: 'Halfling',
    description: {
        body:[
            'When you roll a **1** on the d20 of a **#D20 Test**, you can **reroll** the die, and you must use the new roll.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. 193',
};

export default luck;
