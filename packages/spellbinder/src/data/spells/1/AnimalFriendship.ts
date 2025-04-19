import { Ability } from "../../../types";

const animalFriendship: Ability = {
    type: 'spell',
    name: 'Animal Friendship',
    castingTime: {
        type: 'Action',
    },
    school: 'Charmed (Enchantment)',
    description: {
        body:[
            'Target a^ Beast that you can see within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration.',
            'If you or one of your allies deals damage to the target, the spells ends.',
        ],
    },
    meta: {
        range: '30 ft.',
        duration: '24 hours',
        save: 'Wisdom',
    },
    level: 1,
    components: {
        verbal: true,
        somatic: true,
        material: 'a morsel of food',
    },
    higherLevel: 'you can target one additional Beast for each spell slot level above 1.',
    source: 'Free Rules (2024), pg. 239',
};

export default animalFriendship;
