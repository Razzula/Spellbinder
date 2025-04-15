import { Ability } from "../../../types";

const healingWord: Ability = {
    type: 'spell',
    name: 'Healing Word',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Healing (Abjuration)',
    description: {
        body:[
            'A creature of your choice that you can see within range regains Hit Points equal to 2d4* plus your spellcasting ability modifier.',
        ],
    },
    meta: {
        range: '60 ft.',
        effect: '2d4* + spellcasting modifier HP',
    },
    level: 1,
    components: {
        verbal: true,
    },
    higherLevel: 'the healing increases by 2d4 for each spell slot level above 1.',
    source: 'Free Rules (2024), pg. 284',
};

export default healingWord;
