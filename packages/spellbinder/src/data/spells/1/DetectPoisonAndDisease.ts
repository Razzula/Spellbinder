import { Ability } from "../../../types";

const detectPoisonAndDisease: Ability = {
    type: 'spell',
    name: 'Detect Poison & Disease',
    castingTime: {
        type: 'Action',
    },
    school: 'Detection (Divination)',
    description: [
        'For the duration, you sense the location of **poisons**, **poisonous or venomous creatures**, and **magical contagions** within **30 feet** of yourself. You sense the kind of poison, creature, or contagion in each case.',
        'The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.',
    ],
    meta: {
        range: 'Self',
        area: '30 ft. radius sphere',
        duration: '10 minutes',
    },
    level: 1,
    components: {
        verbal: true,
        somatic: true,
        material: 'a yew leaf',
        ritual: true,
        concentration: true,
    },
    source: 'Free Rules (2024), pg. 262',
};

export default detectPoisonAndDisease;
