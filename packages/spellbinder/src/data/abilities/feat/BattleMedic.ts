import { Ability } from "../../../types";

const battleMedic: Ability = {
    type: 'ability',
    name: 'Battle Medic',
    castingTime: {
        type: 'Action',
    },
    school: 'Origin Feat',
    description: {
            body:[
            'If you have a **Healer’s Kit**, you can expend **one use** of it and tend to a creature within 5 feet of yourself as a Utilize action.',
            'This creature can expend **one** of its **Hit Point Dice**, and you then roll that die. The creature **regains** a number of Hit Points equal to the roll plus **your** Proficiency Bonus.',
        ],
    },
    source: '???',
};

export default battleMedic;
