import { Ability } from "../../../../types";

const patientDefenseHeightened: Ability = {
    type: 'ability',
    name: 'Heightened Patient Defense',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Monk \'s #Focus',
    description: {
        flavour: '',
        body:[
            'You can take the Disengage Action as a Bonus #Action.',
            'Additionally, you can expend 1 Focus to also take the Dodge Action.',
            'When spending the Focus, you gain a number of Temporary Hit Points equal to two rolls of your Martial Arts die.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default patientDefenseHeightened;
