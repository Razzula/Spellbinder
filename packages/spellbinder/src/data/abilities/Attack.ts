import { Ability } from "../../types";

const attack: Ability = {
    type: 'standard',
    name: 'Attack',
    castingTime: {
        type: 'Action',
    },
    school: '',
    description: {
        flavour: 'Attack with a weapon or an Unarmed Strike.',
        body:[
            'Taking the **Attack** action, you can make one attack roll with an equipped weapon or an Unarmed Strike.',
            'You can either equip or unequip one weapon when you make an attack as part of this action. Either before or after the attack.',
        ],
    },
    meta: {
        attack: 'weapon attack',
    },
    source: 'Free Rules (2024), pg. ???',
};

export default attack;
