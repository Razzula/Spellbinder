import { Ability } from "../../../../types";

const interception: Ability = {
    type: 'ability',
    name: 'Interception',
    castingTime: {
        type: 'Reaction',
    },
    school: 'Fighting Style',
    description: {
        body: [
            'When a creature you can see attacks a target other than you, within **5 ft.** of you, you can take a Reaction to interpose your Shield (which you must be holding).',
            'You impose Disadvantage on the triggering attack roll, and any other attack rolls against the target until the start of your next turn, as long as you remian within 5 ft. of the target.',
        ],
    },
    meta: {
        range: '5 ft.',
        duration: 'until start of your next turn',
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default interception;
