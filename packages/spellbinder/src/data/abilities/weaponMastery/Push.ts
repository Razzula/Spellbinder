import { Ability } from "../../../types";

const push: Ability = {
    type: 'ability',
    name: 'Push (Greatclub)',
    castingTime: {
        type: 'Rider Effect',
    },
    school: 'Weapon Mastery',
    description: {
        flavour: '*Your training with weapons allows you to use the mastery property of Greatclubs.*',
            body:[
            'If you **hit** a creature with a **Greatclub**, you can **push** the creature up to **10 feet** straight away from yourself, if it is Large or smaller.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. 52',
};

export default push;
