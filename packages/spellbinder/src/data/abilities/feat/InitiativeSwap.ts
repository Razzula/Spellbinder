import { Ability } from "../../../types";

const initiativeSwap: Ability = {
    type: 'ability',
    name: 'Initiative Swap',
    castingTime: {
        type: 'Response',
    },
    school: 'Origin Feat (Alert)',
    description: {
            body:[
            'Immediately **after** you roll **Initiative**, you can **swap** your Initiative with one **willing ally** in the same combat.',
            'You cannot make this swap if you or the ally has the Incapacitated condition.',
        ],
    },
    source: 'Free Rules (2024), pg. 200',
};

export default initiativeSwap;
