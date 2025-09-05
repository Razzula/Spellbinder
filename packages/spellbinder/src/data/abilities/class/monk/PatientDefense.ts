import { Ability } from "../../../../types";

const patientDefense: Ability = {
    type: 'ability',
    name: 'Patient Defense',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Monk \'s #Focus',
    description: {
        flavour: '',
        body:[
            'You can take the Disengage Action as a Bonus #Action.',
            'Additionally, you can expend 1 Focus to also take the Dodge Action.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default patientDefense;
