import { Ability } from "../../../types";

const nick: Ability = {
    type: 'ability',
    name: 'Nick (Dagger)',
    castingTime: {
        type: 'Rider Effect',
    },
    school: 'Weapon Mastery',
    description: {
        flavour: '*Your training with weapons allows you to use the mastery property of Daggers.*',
            body:[
            'Making an extra attack using the **Light** property is part of the same action as the first attack; instead of using a Bonus #Action.',
            'You may make this attack only once per turn.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. 52',
};

export default nick;
