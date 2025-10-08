import { Ability } from "../../../../../types";

const awakenedAstralSelf: Ability = {
    type: 'ability',
    name: 'Awakened Astral Self',
    castingTime: {
        type: 'Bonus Action',
    },
    school: 'Way of the Astral #Self Monk',
    description: {
        flavour: 'Your connection to your astral self is complete, allowing you to unleash its full potential.',
        body: [
            'As a Bonus #Action, you can spend 5 Focus points to summon the arms, visage, and body of your astral #self and awaken it for 10 minutes.',
            '**Armour of the Spirit** You gain a +2 bonus to Armor Class.',
            '**Astral Barrage** Whenever you use the **Extra Attack** feature to attack twice, you can instead attack three times if all the attacks are made with your astral arms.',
        ],
    },
    meta: {
        duration: '10 minutes',
    },
    source: '???, pg. ???',
};

export default awakenedAstralSelf;
