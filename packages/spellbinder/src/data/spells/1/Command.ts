import { Ability } from "../../../types";

const command: Ability = {
    type: 'spell',
    name: 'Command',
    castingTime: {
        type: 'Action',
    },
    school: 'Prone Enchantment',
    description: {
        body:[
            'Speak a one-word command to a^ creature you can see within range. The target must succeed on a **Wisdom saving throw** or follow the command on its next turn.',
            '**Approach**: move towards you along the shortest, most direct route; ending its turn if it moves within 5 ft. of you.',
            '**Drop**: drop whatever it\'s holding and then ends its turn.',
            '**Flee**: spend its turn moving away from you by the fastest available means.',
            '**Grovel**: target has the Prone condition and then ends its turn.',
            '**Halt**: on its turn, the target neither moves nor take any Actions or Bonus #Actions.',
        ],
    },
    meta: {
        range: '60 ft.',
        save: 'Wisdom',
        effect: 'Prone',
    },
    level: 1,
    components: {
        verbal: true,
    },
    higherLevel: 'you can affect one additional creature for each spell slot level above 1.',
    source: 'Free Rules (2024), pg. 251',
};

export default command;
