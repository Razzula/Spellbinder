import { Ability } from "../../../../types";

const deflectEnergy: Ability = {
    type: 'ability',
    name: 'Deflect Energy',
    castingTime: {
        type: 'Reaction',
    },
    school: 'Monk',
    description: {
        // flavour: 'Your practice of martial arts gives you mastery over the speed and precision of your unarmed combat style.',
        body: [
            'When an attack roll hits you, you can take a Reaction to reduce the attack\'s total damage against you by 1d10 plus your Dexterity modifier and Monk level.',
            'If reduced to 0, you can expend 1 Focus Point to redirect it; choosing a creature you can see within 5 feet of yourself (if melee) or 60 feet and not behind Total Cover (if ranged). They must succeed on a Dexterity saving throw or take damage equal to two rolls of your Martial Arts die plus your Dexterity modifier. The damage is the same type dealt by the attack.',
        ],
    },
    meta: {
        range: '5 ft. / 60 ft.',
        save: 'Dexterity',
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default deflectEnergy;
