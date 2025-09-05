import { Ability } from "../../../../types";

const stonecunning: Ability = {
    type: 'ability',
    name: 'Stonecunning',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Dwarf',
    description: {
        flavour: '*One with the Stone of old, you can listen to its call.*',
            body:[
            'As a Bonus #Action, you gain **Tremorsense** with a range of 60 ft. for 10 minutes.',
            'You must be on a stone surface or touching a stone surface to use this Tremorsense. The stone can be natural or worked.',
            'You can use this Bonus #Action a number of times equal to your Proficiency #Bonus, and you regain all expended uses when you finish a Long Rest.',
        ],
    },
    source: 'Free Rules (2024), pg. 188',
};

export default stonecunning;
