import { Ability } from "../../../../types";

const draconicCry: Ability = {
    type: 'ability',
    name: 'Draconic Cry',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Kobold',
    description: {
        body:[
            'As a Bonus #Action, you let out a cry at your enemies within 10 feet of you.',
            'Until the start of your next turn, you and your allies have Advantage on attack rolls against any of those enemies who could hear you.',
            'You can use this trait a number of times equal to your Proficiency #Bonus, and you regain all expended uses when you finish a Long Rest.',
        ],
    },
    meta: {
        area: '10 ft. Emanation',
        effect: 'Advantage #attack rolls',
    },
    source: 'Mordenkainen Presents: Monsters of the Multiverse, pg. 25 ',
};

export default draconicCry;
