import { Ability } from "../../../../types";

const perfectFocus: Ability = {
    type: 'ability',
    name: 'Perfect Focus',
    castingTime: {
        type: 'Response',
    },
    school: 'Monk',
    description: {
            body:[
            'When rolling **Initiative**, if you don\'t use **Uncanny Metabolism**, you regain expended Focus Points until you have 4 if you have 3 or fewer.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default perfectFocus;
