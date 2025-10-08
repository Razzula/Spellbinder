import { Ability } from "../../../../types";

const slowFall: Ability = {
    type: 'ability',
    name: 'Slow Fall',
    castingTime: {
        type: 'Reaction',
    },
    school: 'Monk',
    description: {
        // flavour: 'Your mastery of your Focus allows you to summon a portion of your astral #self.',
        body: [
            'You can take a Reaction when you fall to reduce any damage you take from the fall by an amount equal to five times your Monk level.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default slowFall;
