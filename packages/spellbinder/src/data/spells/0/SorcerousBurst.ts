import { Ability } from "../../../types";

const sorcerousBurst: Ability = {
    type: 'spell',
    name: 'Sorcerous Burst',
    castingTime: {
        type: 'Action',
    },
    school: 'Elemental Evocation',
    description: {
        body:[
            'You cast sorcerous energy at **one** creature or object within range.',
            'Make a **ranged spell attack** against the target. On a hit, the target takes **1d8^ damage** of a type **you choose**: Acid, Cold, Fire, Lightning, Poison, Psychic, or Thunder.',
            'If you roll an **8** on a die for this spell, you can roll another d8, and add it to the damage. When you cast this spell, the maximum number of these extra d8s you can add to the spell\'s damage equals your spellcasting ability modifier.',
        ],
    },
    meta: {
        range: '120 ft.',
        damage: {
            type: 'element of player choice',
            amount: '1d8* ',
        },
    },
    level: 0,
    components: {
        verbal: true,
        somatic: true,
    },
    higherLevel: 'the damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8)',
    source: 'Player\'s Handbook, pg. 318',
};

export default sorcerousBurst;
