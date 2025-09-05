import { Ability } from "../../../types";

const dissonantWhispers: Ability = {
    type: 'spell',
    name: 'Dissonant Whispers',
    castingTime: {
        type: 'Action',
    },
    school: 'Psychic Enchantment',
    description: {
        body:[
            'One creature of your choice, that you can see within range, hears a discordant melody within its mind.',
            'The target makes a Wisdom saving throw. On a failed save, it takes 3d6^ Psychic damage and must immediately use its Reaction, if availble, to move as far away from you as it can, along the safest route.',
            'On a successful save, the target takes half as much dmaage only.',
        ],
    },
    meta: {
        range: '60 ft.',
        effect: '3d6^ Psychic damage; flee',
    },
    level: 1,
    components: {
        verbal: true,
    },
    higherLevel: 'damage increases by 1d6 per spell slot level above 1.',
    source: 'Free Rules (2024), pg. ???',
};

export default dissonantWhispers;
