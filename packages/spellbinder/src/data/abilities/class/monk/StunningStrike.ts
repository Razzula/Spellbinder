import { Ability } from "../../../../types";

const stunningStrike: Ability = {
    type: 'ability',
    name: 'Stunning Strike',
    castingTime: {
        type: 'Rider Effect',
    },
    school: 'Monk',
    description: {
        // flavour: 'Your mastery of your Focus allows you to summon a portion of your astral #self.',
        body: [
            'Once per turn when you hit a creature with a Monk weapon or an Unarmed Strike, you can expend 1 Focus Point to attempt a stunning strike.',
            'The target must make a Constitution saving throw.',
            'On a failed save, the target has the Stunned condition until the start of your next turn.',
            'On a successful save, the target\'s Speed is halved until the start of your next turn, and the next attack roll made against the target before then has Advantage.',
        ],
    },
    meta: {
        save: 'Constitution',
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default stunningStrike;
