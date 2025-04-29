import { Ability } from "../../../../types";

const bardicInspiration: Ability = {
    type: 'ability',
    name: 'Bardic Inspiration',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Bard',
    description: {
        flavour: '*You can supernaturally inspire others through words, music, or dance.*',
        body:[
            'As a **Bonus Action**, you can inspire **another creature** within **60 ft.** of yourself who can see or hear you. That creature gains one of your Bardic Inspiration dice (d6*). A creature can have only one of these at a time.',
            '**Once** within the next hour when the creature fails a D20 Test, the creature can roll your die and **add** the number rolled to Test, expending the die.',
            'You can confer a Bardic Inspiration die a number of times equal to your **Charisma modifier** (minimum of once), and you regain all expended uses when you finish a **Long Rest**.',
        ],
    },
    meta: {
        range: '60 ft.',
    },
    higherLevel: 'your Bardic Inspiration die changes as your Bard level increases: becomming a d8 (5th), a d10 (10th), and a d12 (15th).',
    source: 'Player\'s Handbook (2024), pg. 59'
};

export default bardicInspiration;
