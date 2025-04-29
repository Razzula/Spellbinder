import { Ability } from "../../../types";

const huntersMark: Ability = {
    type: 'spell',
    name: 'Hunter\'s Mark',
    castingTime: {
        type: 'Bonus Action',
    },
    school: ' Force Divination',
    description: {
        flavour: 'You magically mark one creature you can see within range as your quarry.',
        body:[
            'Until the spell ends, you deal an extra 1d6 Force damage to the target whenever you hit it with an attack roll. You also have Advantage on any Wisdom (Perception or Survival) check you make to find it.',
            'If the target drops to 0 Hit Points before this spell ends, you can take a Bonus Action to move the mark to a new creature you can see within range.',
        ],
    },
    meta: {
        range: '90 ft.',
        duration: 'Concentration, up to 1* hour',
    },
    level: 1,
    components: {
        verbal: true,
        concentration: true,
    },
    higherLevel: 'Concentration lasts longer with upcasting: up to 8 hours (3-4th), up to 24 hours (5th+).',
    source: 'Free Rules (2024), pg. 287',
};

export default huntersMark;
