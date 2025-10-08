import { Ability } from "../../../../types";

const empoweredStrikes: Ability = {
    type: 'ability',
    name: 'Empowered Strikes',
    castingTime: {
        type: 'Rider Effect',
    },
    school: 'Monk',
    description: {
        // flavour: 'Your mastery of your Focus allows you to summon a portion of your astral #self.',
        body: [
            'Whenever you deal damage with your Unarmed Strike, it can deal your choice of Force damage or its normal damage type.',
        ],
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default empoweredStrikes;
