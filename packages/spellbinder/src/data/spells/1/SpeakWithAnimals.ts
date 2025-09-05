import { Ability } from "../../../types";

const speakWithAnimals: Ability = {
    type: 'spell',
    name: 'Speak with Animals',
    castingTime: {
        type: 'Action',
    },
    school: 'Communication Divination',
    description: {
        body:[
            'For the duration, you can comprehend and verbally communicate with Beasts, and you can use any of the Influence action skill options with them.',
            'Most Beasts have little to say about topics that don\'t pertain to their survival or companionship, but at minimum, a Beast can give you information about nearby locations and monsters: including whatever it has percieved within the past day.',
        ],
    },
    meta: {
        range: 'self',
        duration: '10 minutes',
    },
    level: 1,
    components: {
        verbal: true,
        somatic: true,
        ritual: true,
    },
    source: 'Free Rules (2024), pg. ???',
};

export default speakWithAnimals;
