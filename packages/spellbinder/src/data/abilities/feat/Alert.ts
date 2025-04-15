import { Ability } from "../../../types";

const alert: Ability = {
    type: 'ability',
    name: 'Alert',
    castingTime: {
        type: 'Rider Effect',
    },
    school: 'Origin Feat',
    description: {
            body:[
            'Immediately **after** you roll **Initiative**, you can **swap** your Initiative with one **willing ally** in the same combat.',
            'You cannott make this swap if you or the ally has the Incapacitated condition.',
        ],
    },
    source: 'Free Rules (2024), pg. 200',
};

export default alert;
