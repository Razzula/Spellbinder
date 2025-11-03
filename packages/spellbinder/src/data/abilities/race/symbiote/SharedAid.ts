import { Ability } from "../../../../types";

const sharedAid: Ability = {
    type: 'ability',
    name: 'Mutualistic Aid',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Symbiote',
    description: {
        body:[
            'Both the Host and Symbiote may take the **Help #Action** as a Bonus #Action, but **only** to assist their partner.'
        ],
    },
    source: 'Homebrew Symbiote',
};

export default sharedAid;
