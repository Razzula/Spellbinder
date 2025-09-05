import { Ability } from "../../../../../types";

const flickerStep: Ability = {
    type: 'ability',
    name: 'Flickerstep',
    castingTime: {
        type: 'Reaction',
    },
    school: 'Wyrdhound',
    description: {
        flavour: 'A blades glances the flowing fur of the hound. For a moment it seems to pierce into the flesh beneath, but within a moment, a golden ripple dances across the fur, and suddenly the hound is no longer where it was.',
        body:[
            'When targeted by an attack, you can use your Reaction to **teleport** up to **20 ft.** — to an unoccupied space, within sight.',
            'Upon teleporting, you may nullify any damage, by rolling a flat D20 of value **11** or higher.'
        ],
    },
    meta: {
        range: '20 ft.',
        dc: '10',
    },
    source: 'Homebrew: Saxon the Wyrdhound',
};

export default flickerStep;
