import { Ability } from "../../../../../types";

const visageOfTheAstralSelf: Ability = {
    type: 'ability',
    name: 'Visage of the Astral Self',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Way of the Astral #Self Monk',
    description: {
        flavour: 'You can summon the visage of your astral #self.',
        body: [
            'As a Bonus #Action, or when activating Arms of the Astral Self, you can spend 1 Focus point to summon this visage for 10 minutes. It vanishes early if you are incapacitated or die.',
            '**Astral Sight**  You can see normally in nonmagical and magical darkness, up to 120 feet.',
            '**Wisdom of the Spirit** You have advantage on Wisdom (Insight) and Charisma (Intimidation) checks.',
            '**Word of the Spirit** You can direct your exclusively words to a creature of your choice that you can see within 60 feet of you. Alternatively, you can amplify your voice so that all creatures within 600 feet can hear you.',
        ],
    },
    meta: {
        duration: '10 minutes',
    },
    source: '???, pg. ???',
};

export default visageOfTheAstralSelf;
