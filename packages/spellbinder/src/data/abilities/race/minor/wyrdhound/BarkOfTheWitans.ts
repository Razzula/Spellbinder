import { Ability } from "../../../../../types";

const barkOfTheWitans: Ability = {
    type: 'ability',
    name: 'Bark of the Witans',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Wyrdhound',
    description: {
        flavour: '"**Woof!**". Let out a thunderous bark — not loud, but final. The sound carries weight older than memory, like a verdict passed in some distant hall. The foe falters: their strike misjudged, their certainty undone.',
        body:[
            '**One** creature of your choice — within **15 ft.**, who can hear you — must succeed a **Wisdom saving throw**, or be **startled**: suffering disadvantage on their next attack.',
            'Else, they are immune to this affect for **1 hour**.'
        ],
    },
    meta: {
        range: '15 ft.',
        dc: '10 + proficiency bonus',
        save: 'Wisdom',
        effect: 'Startle',
    },
    source: 'Homebrew: Saxon the Wyrdhound',
};

export default barkOfTheWitans;
