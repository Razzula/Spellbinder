import { Ability } from "../../../../../types";

const bodyOfTheAstralSelf: Ability = {
    type: 'ability',
    name: 'Body of the Astral Self',
    castingTime: {
        type: 'Response',
    },
    school: 'Way of the Astral #Self Monk',
    description: {
        body: [
            'When you have both your astral arms and visage summoned, you can cause the body of your astral #self to appear.',
            '**Deflect Energy** When you take acid, cold, fire, force, lightning, or thunder damage, you can use your reaction to deflect it. When you do so, the damage you take is reduced by 1d10 + your Wisdom modifier (minimum reduction of 1).',
            '**Empowered Arms** Once on each of your turns when you hit a target with the Arms of the Astral Self, you can deal extra damage to the target equal to your Martial Arts die.',
        ],
    },
    source: '???, pg. ???',
};

export default bodyOfTheAstralSelf;
