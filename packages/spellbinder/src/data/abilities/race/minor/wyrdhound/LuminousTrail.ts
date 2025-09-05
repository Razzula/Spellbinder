import { Ability } from "../../../../../types";

const luminousTrail: Ability = {
    type: 'ability',
    name: 'Luminous Trail',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Wyrdhound',
    description: {
        flavour: '*Pitter. Patter. Pitter. Patter.* As the hound scrambles through a dark cave, glowing footprints hold the memory of its steps.',
        body:[
            'You can leave faint golden pawprints wherever you move.',
            'These persist for **1 minute**, and glow softly, proving dim light for **5 ft.**',
            'You can toggle this effect as a Bonus #Action.',
        ],
    },
    meta: {
        range: '5 ft.',
        duration: '1 minute',
    },
    source: 'Homebrew: Saxon the Wyrdhound',
};

export default luminousTrail;
