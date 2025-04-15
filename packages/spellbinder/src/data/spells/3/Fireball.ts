import { Ability } from "../../../types";

const fireball: Ability = {
    type: 'spell',
    name: 'Fireball',
    castingTime: {
        type: 'Action',
    },
    school: 'Fire (Evocation)',
    description: {
        flavour: '*A bright streak flashes from you to a point you choose within range and then blossoms with a low roar into a fiery explosion.*',
        body:[
            'Each creature in a **20ft-radius Sphere**, centered on that point, must make a **Dexterity saving throw**. A creature takes **half damage** on a **successful save**.',
            'Flammable objects in the area that aren\'t being worn or carried start burning.',
        ],
    },
    meta: {
        range: '150 ft.',
        area: '20 ft. radius sphere',
        save: 'Dexterity',
        damage: {
            amount: '8d6*',
            type: 'Fire',
        },
    },
    level: 3,
    components: {
        verbal: true,
        somatic: true,
        material: 'a tiny ball of bat guano and sulfur',
    },
    higherLevel: 'the damage increases by 1d6 for each spell slot level above 3.',
    source: 'Free Rules (2024), pg. 274',
};

export default fireball;
