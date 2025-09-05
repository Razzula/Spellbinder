import { Ability } from "../../types";

const opportunityAttack: Ability = {
    type: 'ability',
    name: 'Opportunity Attack',
    castingTime: {
        type: 'Reaction',
    },
    school: '',
    description: {
        body:[
            'When a creature that you can see **leaves your reach** using its action, its Bonus #Action, its Reaction, or one of its speeds, you may take a **Reaction** to make **one melee attack** with a weapon or an Unarmed Strike against the provoking creature. The attack occurs right before the creature leaves your reach.',
            'Provoking an Opportunity Attack can be avoided by taking the Disengage action, using a Teleport, or when moved without using movement, an Action, Bonus #Action, or Reaction.',
        ],
    },
    meta: {
        attack: 'melee weapon attack',
    },
    source: 'Player\'s Handbook (2024), pg. 51',
};

export default opportunityAttack;
