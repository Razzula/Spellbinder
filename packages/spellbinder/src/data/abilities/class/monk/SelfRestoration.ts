import { Ability } from "../../../../types";

const selfRestoration: Ability = {
    type: 'ability',
    name: 'Self Restoration',
    castingTime: {
        type: 'Response',
    },
    school: 'Monk',
    description: {
            body:[
            'Through sheer #force of will, you can remove one of the following conditions from yourself at the end of each of your turns: Charmed, Frightened, or Poisoned.',
            'In addition, forgoing food and drink no longer gives you levels of Exhaustion.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default selfRestoration;
