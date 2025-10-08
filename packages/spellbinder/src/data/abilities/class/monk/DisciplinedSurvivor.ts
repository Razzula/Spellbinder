import { Ability } from "../../../../types";

const disciplinedSurvivor: Ability = {
    type: 'ability',
    name: 'Disciplined Survivor',
    castingTime: {
        type: 'Response',
    },
    school: 'Monk',
    description: {
        flavour: 'Your physical and mental discipline grant you proficiency in all saving throws.',
        body: [
            'Whenever you make a saving throw and fail, you can expend 1 Focus Point to reroll it, and you must use the new roll.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default disciplinedSurvivor;
