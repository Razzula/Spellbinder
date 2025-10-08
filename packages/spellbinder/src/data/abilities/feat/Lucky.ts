import { Ability } from "../../../types";

const lucky: Ability = {
    type: 'ability',
    name: 'Lucky',
    castingTime: {
        type: 'Response',
    },
    school: 'Origin Feat',
    description: {
        flavour: 'You have a number of Luck Points equal to your Proficiency #Bonus^ and can spend the points on the benefits below.',
        body:[
            'When you roll a d20 for a D20 Test, you can spend 1 Luck Point to give yourself Advantage on the roll.',
            'When a creature rolls a d20 for an attack roll against you, you can spend 1 Luck Point to impose Disadvantage on that roll.',
        ],
    },
    higherLevel: 'You regain your expended Luck Points when you finish a Long Rest.',
    source: 'Free Rules (2024), pg. 200',
};

export default lucky;
