import { Ability } from "../../../../../types";

const magicalAwareness: Ability = {
    type: 'ability',
    name: 'Magical Awareness',
    castingTime: {
        type: 'Response',
    },
    school: 'Wyrdhound',
    description: {
        flavour: 'The hound\'s nose shimmers with a faint golden light, as if reacting to something nearby.',
        body:[
            'You can detect the presence of active magic within **30 ft.**',
            'You do not know the exact spell or effect, but can detect its School.',
        ],
    },
    meta: {
        range: '30 ft.',
    },
    source: 'Homebrew: Saxon the Wyrdhound',
};

export default magicalAwareness;
