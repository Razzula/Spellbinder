import { Ability } from "../../../../../types";

const howlOfTheBarrow: Ability = {
    type: 'ability',
    name: 'Howl of the Barrow',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Wyrdhound',
    description: {
        flavour: '"**Awoooh!**". Let out a long and hollow howl — not of pain, but of memory. It drags from the earth and echoes from places buried. The air grows #cold, something forgotten settles in the foe\'s mind: #resistance slips away.',
        body:[
            '**One** creature of your choice — within **15 ft.**, who can hear you — must succeed a **Wisdom saving throw**, or be **shaken**: suffering disadvantage on their next saving throw.',
            'Else, they are immune to this affect for **1 hour**.'
        ],
    },
    meta: {
        range: '15 ft.',
        dc: '10 + proficiency bonus',
        save: 'Wisdom',
        effect: 'Shake',
    },
    source: 'Homebrew: Saxon the Wyrdhound',
};

export default howlOfTheBarrow;
