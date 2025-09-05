import { Ability } from "../../../../types";

const protection: Ability = {
    type: 'ability',
    name: 'Protection',
    castingTime: {
        type: 'Reaction',
    },
    school: 'Fighting Style',
    description: {
        body: [
            'When a creature you can see makes an attack roll against a target other than you, within **5 ft.** of you, you can take a Reaction to reduce the damage dealt by 1d10 + your Proficienty #Bonus.',
            'You must be holding a Shield, or a Simple or Martial weapon.',
        ],
    },
    meta: {
        range: '5 ft.',
    },
    source: 'Player\'s Handbook (2024), pg. ???',
};

export default protection;
