import { Ability } from "../../../../types";

const uncannyMetabolism: Ability = {
    type: 'ability',
    name: 'Uncanny Metabolism',
    castingTime: {
        type: 'Response',
    },
    school: 'Monk',
    description: {
            body:[
            'When rolling **Initiative**, you can regain all expended Focus.',
            'Additionally, roll your Martial Arts die (1d6^), and regain a number of Hit Points equal to your Monk level plus the rolled number.',
            'You may only use this feature **once** per Long Rest.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. ???',
    higherLevel: '1d8 from Monk level 5; 1d10 from Monk level 11; 1d12 from Monk level 17',
};

export default uncannyMetabolism;
