import { Ability } from "../../../../types";

const nimbleDodge: Ability = {
    type: 'ability',
    name: 'Nimble Dodge',
    castingTime: {
        type: 'Reaction',
    },
    school: 'Mousefolk',
    description: {
        body:[
            'When a creature makes an **opportunity attack against you**, you can use your **Reaction** to impose **Disadvantage** on the attack roll.',
        ],
    },
    source: 'Homebrew (github.com/Razzula)',
};

export default nimbleDodge;
