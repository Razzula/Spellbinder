import { Ability } from "../../../types";

const prestidigitation: Ability = {
    type: 'spell',
    name: 'Prestidigitation',
    castingTime: {
        type: 'Action',
    },
    school: 'Utility Transmutation',
    description: {
        body:[
            'Cast a* magical trick:',
            '**Sensory Effect**: create an instantaneous, harmless sensory effect.',
            '**#Fire Play**: instantaneously light or snuff out a candle, a torch, or a small campfire',
            '**Clean or Soil**: instantaneously clean or soil an object no larger than 1 cubic ft.',
            '**Minor Sensation**: chill, warm, or flavor up to 1 cubic ft. of nonliving material for 1 hour.',
            '**Magic Mark**: make a colour, small mark, or a symbol appear on an object or surface for 1 hour.',
            '**Minor Creation**: create a nonmagical trinket or illusory image in your hand, until the end of your next turn.',
        ],
    },
    meta: {
        range: '10 ft.',
        duration: '1 hour',
    },
    level: 0,
    components: {
        verbal: true,
        somatic: true,
    },
    higherLevel: 'by casting multiple times, you can have up to three non-instantaneous effects active at once.',
    source: 'Free Rules (2024), pg. 307',
};

export default prestidigitation;
