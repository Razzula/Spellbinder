import { Ability } from "../../../types";

const sap: Ability = {
    type: 'ability',
    name: 'Sap (Longsword)',
    castingTime: {
        type: 'Rider Effect',
    },
    school: 'Weapon Mastery',
    description: {
        flavour: '*Your training with weapons allows you to use the mastery property of Longswords.*',
            body:[
            'If you **hit** a creature with a **Longsword**, that creature has **Disadvantage** on its next attack roll before the start of your next turn.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. 52',
};

export default sap;
