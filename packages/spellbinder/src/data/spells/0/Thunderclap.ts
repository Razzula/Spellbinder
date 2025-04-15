import { Ability } from "../../../types";

const thunderclap: Ability = {
    type: 'spell',
    name: 'Thunderclap',
    castingTime: {
        type: 'Action',
    },
    school: 'Thunder (Evocation)',
    description: {
        body:[
            '**Each** creature in a **5 ft.** Emanation originating from you must succeed on a **Constitution saving throw** or take 1d6* Thunder damage.',
            'The spell\'s thunderous sound can be heard up to 100 feet away.',
        ],
    },
    meta: {
        area: '5 ft. Emanation',
        save: 'Constitution',
        damage: {
            type: 'Thunder',
            amount: '1d6*',
        },
    },
    level: 0,
    components: {
        somatic: true,
    },
    higherLevel: 'the damage increases as you level, to 2d6 (5th), 3d6 (11th), and 4d6 (17th).',
    source: 'Player\'s Handbook (2024), pg. 333',
};

export default thunderclap;
