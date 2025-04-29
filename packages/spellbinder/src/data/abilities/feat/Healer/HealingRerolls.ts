import { Ability } from "../../../../types";

const healingRerolls: Ability = {
    type: 'ability',
    name: 'Healing Rerolls',
    castingTime: {
        type: 'Response',
    },
    school: 'Origin Feat (Healer)',
    description: {
        body: [
            'When you roll a **1** on a die to **determine** the number of **HP restored** by a **spell** or by **Battle Medic**, you can **reroll** the die, and you must use the new roll.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. 201',
};

export default healingRerolls;
