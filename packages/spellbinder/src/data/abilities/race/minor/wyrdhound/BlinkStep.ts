import { Ability } from "../../../../../types";

const blinkStep: Ability = {
    type: 'ability',
    name: 'Blinkstep',
    castingTime: {
        type: 'Action',
    },
    school: 'Wyrdhound',
    description: {
        flavour: 'The air shimmers above golden fur. One moment, a mighty hound stands there. The next, it is nowhere to be seen.',
        body:[
            'You can teleport up to **40 ft.** into an unoccupied space.',
            'This Action ends your turn, and you disappear until the start of your next turn, whre you will be in your new space, chosen by the DM.',
        ],
    },
    meta: {
        range: '40 ft.',
    },
    source: 'Homebrew: Saxon the Wyrdhound',
};

export default blinkStep;
