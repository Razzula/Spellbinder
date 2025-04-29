import { Ability } from "../../../types";

const cureWounds: Ability = {
    type: 'spell',
    name: 'Cure Wounds',
    castingTime: {
        type: 'Action',
    },
    school: 'Healing Abjuration',
    description: {
        body:[
            'A creature you touch regains a number of Hit Points equal to 2d8 plus your spellcasting ability modifier.',
        ],
    },
    meta: {
        range: 'Touch',
        effect: '2d8* + spellcasting modifier HP',
    },
    level: 1,
    components: {
        verbal: true,
        somatic: true,
    },
    higherLevel: 'the healing increases by 2d8 for each spell slot level above 1.',
    source: 'Free Rules (2024), pg. 259',
};

export default cureWounds;
