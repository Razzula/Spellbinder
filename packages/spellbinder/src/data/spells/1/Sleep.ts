import { Ability } from "../../../types";

const sleep: Ability = {
    type: 'spell',
    name: 'Sleep',
    castingTime: {
        type: 'Action',
    },
    school: 'Incapacitated Enchantment',
    description: {
        flavour: 'A lullaby as effective as mother\'s warm milk.',
        body:[
            'Each creature of your choice in a **5 ft.** radius **Sphere** centred on a point within range, must suceed on a Wisdom saving throw or have the Incapacitated condition until the end of its next turn, at which point it must repeat the save.',
            'If the target fails the second save, the target becomes Unconscious for the spell\'s duration.',
            'The spell ends early if the target takes damage, or somebody within 5 ft. performs an Action to awake them.',
            'Creature that do not sleep, or have Immunity to Exhaustion, automatically suceed against this spell.',
        ],
    },
    meta: {
        range: '60 ft.',
        area: '5 ft. Sphere',
        duration: 'Concentration, up to 1 minute',
    },
    level: 1,
    components: {
        verbal: true,
        somatic: true,
        material: 'a pinch of sand or rose petals',
        concentration: true,
    },
    higherLevel: 'you can target one additional creature for each spell slot above 1.',
    source: 'Free Rules (2024), pg. ???',
};

export default sleep;
