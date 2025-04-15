import { Ability } from "../../../types";

const slow: Ability = {
    type: 'ability',
    name: 'Slow (Longbow)',
    castingTime: {
        type: 'Rider Effect',
    },
    school: 'Weapon Mastery',
    description: {
        flavour: '*Your training with weapons allows you to use the mastery property of Longbows.*',
        body:[
            'If you hit a creature with a **Longbow** and **deal damage** to it, you can **reduce its Speed** by **10 feet** until the start of your next turn.',
            'This effect does *not* stack with multiple hits.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. 52',
};

export default slow;
