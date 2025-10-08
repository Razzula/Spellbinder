import { Ability } from "../../../../types";

const flurryOfBlowsHeightened: Ability = {
    type: 'ability',
    name: 'Heightened Flurry of Blows',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Monk \'s Heightened #Focus',
    description: {
        flavour: '',
        body:[
            'You can expend 1 Focus to make **three** Unarmed Strikes.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default flurryOfBlowsHeightened;
