import { Ability } from "../../../../../types";

const armsOfTheAstralSelf: Ability = {
    type: 'ability',
    name: 'Arms of the Astral Self',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Way of the Astral #Self Monk',
    description: {
        flavour: 'Your mastery of your Focus allows you to summon a portion of your astral #self.',
        body: [
            'As a Bonus #Action, you can spend 1 Focus point to summon the arms of your astral #self. Each creature of your choice within 10 feet and sight of you must succeed on a Dexterity saving throw or take force damage equal of two rolls of your Martial Arts die.',
            'For 10 minutes, or until you are incapacitated or die:',
            'You can use Wisdom to make Strength checks and saving throws, and unarmed strike attacka and damage rolls.',
            'You can use the spectral arms to make unarmed strikes with force damage, reaching 5 feet greater than normal.',
        ],
    },
    meta: {
        range: '10 ft.',
        duration: '10 minutes',
        save: 'Dexterity',
    },
    source: '???, pg. ???',
};

export default armsOfTheAstralSelf;
