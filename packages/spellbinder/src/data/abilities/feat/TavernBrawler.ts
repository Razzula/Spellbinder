import { Ability } from "../../../types";

const tavernBrawler: Ability = {
    type: 'ability',
    name: 'Tavern Brawler',
    castingTime: {
        type: 'Response',
    },
    school: 'Origin Feat',
    description: {
            body:[
            '**Damage Rerolls**. Whenever you roll a damage die for your Unarmed Strike, you can reroll the die if it rolls a 1. You must use the new roll.',
            '**Push**. When you hit a creature with an Unarmed Strike as part of the Attack action on your turn, you can deal damage to the target and also push it 5 feet away from you. You can use this benefit only once per turn.',
        ],
    },
    source: 'Free Rules (2024), pg. 200',
};

export default tavernBrawler;
