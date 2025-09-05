import { Ability } from "../../../../types";

const flurryOfBlows: Ability = {
    type: 'ability',
    name: 'Flurry of Blows',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Monk \'s #Focus',
    description: {
        flavour: '',
        body:[
            'You can expend 1 Focus to make **two** Unarmed Strikes.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default flurryOfBlows;
