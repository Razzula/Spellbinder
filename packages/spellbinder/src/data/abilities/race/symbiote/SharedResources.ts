import { Ability } from "../../../../types";

const sharedResources: Ability = {
    type: 'ability',
    name: 'Symbiotic Economy',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Symbiote',
    description: {
        body:[
            'Once per round, either the Host or Symbiote can freely give their Bonus Action to the other player.'
        ],
    },
    source: 'Homebrew Symbiote',
};

export default sharedResources;
