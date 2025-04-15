import { Ability } from "../../../../types";

const bonusUnarmedStrike: Ability = {
    type: 'ability',
    name: 'Bonus Unarmed Strike',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Monk (Martial Arts)',
    description: {
        flavour: 'Your practice of martial arts gives you mastery over the speed and precision of you unarmed combat style.',
        body:[
            'You can make an Unarmed Strike as a Bonus Action.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default bonusUnarmedStrike;
