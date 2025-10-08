import { Ability } from "../../../types";

const mageSlayer: Ability = {
    type: 'ability',
    name: 'Mage Slayer',
    castingTime: {
        type: 'Response',
    },
    school: 'Origin Feat',
    description: {
            body:[
            '**Concentration Breaker**. When you damage a creature that is concentrating, it has Disadvantage on the saving throw it makes to maintain Concentration.',
            '**Guarded Mind**. If you fail an Intelligence, a Wisdom, or a Charisma saving throw, you can cause yourself to succeed instead. Once you use this benefit, you cannott use it again until you finish a Short or Long Rest.',
        ],
    },
    source: 'Free Rules (2024), pg. 200',
};

export default mageSlayer;
