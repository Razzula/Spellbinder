import { Ability } from "../../../types";

const viciousMockery: Ability = {
    type: 'spell',
    name: 'Vicious Mockery',
    castingTime: {
        type: 'Action',
    },
    school: 'Psychic Enchantment',
    description: {
        flavour: 'You unleash a string of insults laced with subtle enchantments at one creature you can see or hear within range.',
        body:[
            'The target must succeed on a Wisdom saving throw or take 1d6^ Psychic damage and have Disadvantage on the next attack roll it makes before the end of its next turn.',
        ],
    },
    meta: {
        range: '60 ft.',
    },
    level: 0,
    components: {
        verbal: true,
    },
    higherLevel: 'the damage increases as you level, to 2d6 (5th), 3d6 (11th), and 4d6 (17th).',
    source: 'Player\'s Handbook (2024), pg. 337',
};

export default viciousMockery;
