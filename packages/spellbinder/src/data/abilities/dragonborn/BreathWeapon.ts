import { Ability } from "../../../types";

const breathWeapon: Ability = {
    type: 'ability',
    name: 'Breath Weapon',
    castingTime: {
        type: 'Action',
    },
    school: 'Fire (Gold Dragonborn)',
    description: [
        '*You can use your action to exhale destructive energy.*',
        'It deals damage in a **15ft. cone**. When you use your breath weapon, all creatures in the area must make a **Dexterity saving throw**. A creature takes **half damage** on a **successful save**.',
        'After using your breath weapon, you cannot use it again until you complete a short or long rest.',
    ],
    meta: {
        area: '15 ft. cone',
        save: 'Dexterity',
        dc: '8 + Constitution modifier + proficiency bonus',
        damage: {
            amount: '2d6*',
            type: 'Fire',
        },
    },
    higherLevel: 'the damage increases to 3d6 (6th), 4d6 (11th), and 5d6 (16th).',
    source: 'Player’s Handbook (2024), pg. 236',
};

export default breathWeapon;
