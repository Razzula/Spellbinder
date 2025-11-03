import { Ability } from "../../../../types";

const meatShield: Ability = {
    type: 'ability',
    name: 'Meat Shield',
    castingTime: {
        type: 'Reaction',
    },
    school: 'Symbiote',
    description: {
        body:[
            'As a **Reaction**, **either player** may choose to **redirect incoming damage** to either themselves or their partner.',
            'If the other partner does not want this, they must resist: contest the Host\'s Wisdom against the Symbiote\'s Charisma. Whoever wins decides where the damage goes *(this does not affect domination)*.'
        ],
    },
    source: 'Homebrew Symbiote',
};

export default meatShield;
