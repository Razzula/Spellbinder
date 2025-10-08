import { Ability } from "../../../../types";

const stepOfTheWindHeightened: Ability = {
    type: 'ability',
    name: 'Heightened Step of the Wind',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Monk \'s #Focus',
    description: {
        flavour: '',
        body:[
            'You can take the Dash Action as a Bonus #Action.',
            'Additionally, you can expend 1 Focus to also take the Disengage Action, and your jump distance is doubled for the turn.',
            'When spending the Focus, you can choose a willing creature within 5 feet of yourself that is Large or smaller. You move the creature with you until the end of your turn. The creature\'s movement does not provoke Opportunity Attacks.',
        ],
    },
    meta: {
        range: '5 ft.',
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default stepOfTheWindHeightened;
