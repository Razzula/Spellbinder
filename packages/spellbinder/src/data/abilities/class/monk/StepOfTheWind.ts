import { Ability } from "../../../../types";

const stepOfTheWind: Ability = {
    type: 'ability',
    name: 'Step of the Wind',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Monk \'s #Focus',
    description: {
        flavour: '',
        body:[
            'You can take the Dash Action as a Bonus #Action.',
            'Additionally, you can expend 1 Focus to also take the Disengage Action, and your jump distance is doubled for the turn.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default stepOfTheWind;
