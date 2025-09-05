import { Ability } from "../../../types";

const tashasHideousLaughter: Ability = {
    type: 'spell',
    name: 'Tasha\'s Hideous Laughter',
    castingTime: {
        type: 'Action',
    },
    school: 'Incapacitated Enchantment',
    description: {
        body:[
            'One^ creature of your choice that you can see within range makes a Wisdom saving throw.',
            'On a failed saved, it has the Prone and Incapacitated conditions for the duration. During that time, it laughs uncontrollably if it is capable of laughter, and it cannot end the Prone condition on itself.',
            'At the end of each of its turns, and each time it takes damage, it makes another Wisdom saving throw. If triggered by damage, the target has Advantage.',
            'On a successful save, the spell ends.',
        ],
    },
    meta: {
        range: '30 ft.',
        duration: 'Concentration, up to 1 minute',
        effect: '',
    },
    level: 1,
    components: {
        verbal: true,
        somatic: true,
        material: 'a tart and a feather',
        concentration: true,
    },
    higherLevel: 'you can target one additional creature for each spell slot above 1.',
    source: 'Free Rules (2024), pg. ???',
};

export default tashasHideousLaughter;
