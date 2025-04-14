import { Ability } from "../../../types";

const unseenServant: Ability = {
    type: 'spell',
    name: 'Unseen Servant',
    castingTime: {
        type: 'Action',
    },
    school: 'Control (Conjuration)',
    description: [
        'Create an **Invisible**, **mindless**, **shapeless**, Medium **#force** that performs **simple** tasks at your command. Springing into existence in an unoccupied space on the ground, your servant has **10 AC**, **1 HP**, and **2 Strength**.',
        'Once per turn, as a **Bonus Action**, you can mentally **command** the servant to move up to 15 ft. and interact with an object. It cannot attack. The servant performs the task to the best of its ability until it completes the task, then waits for your next command.',
        'The spell ends if the servant\'s task is out of your range, if it drops to 0 HP, or if you dismiss it as a Bonus Action.',
    ],
    meta: {
        range: '60 ft.',
        duration: '1 hour',
    },
    level: 1,
    components: {
        verbal: true,
        somatic: true,
        material: 'a bit of string and wood',
        ritual: true,
    },
    source: 'Free Rules (2024), pg. 336',
};

export default unseenServant;
