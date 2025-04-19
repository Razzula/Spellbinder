import { Ability } from "../../../types";

const alarm: Ability = {
    type: 'spell',
    name: 'Alarm',
    castingTime: {
        type: 'Action',
        time: '1 minute',
    },
    school: 'Detection (Abjuration)',
    description: {
        flavour: 'You set an alarm against intrusion.',
        body:[
            'Choose a door, a window, or an area within range that is no larger than a 20-foot Cube. Until the spell ends, an alarm alerts you whenever a creature touches or enters the warded area.',
            'When you cast the spell, you can designate creatures that won’t set off the alarm.',
            'You choose if the alarm is:',
            '**Audible**. The alarm produces the sound of a handbell for 10 seconds, within 60 ft of the warded area.',
            '**Mental**. You are alerted by a mental ping if you are within 1 mile of the warded area. This ping will awaken you, if asleep.',
        ],
    },
    meta: {
        range: '30 ft.',
        area: '20 ft. cube',
        duration: '8 hours',
    },
    level: 1,
    components: {
        verbal: true,
        somatic: true,
        material: 'a bell and silver wire',
        ritual: true,
    },
    source: 'Free Rules (2024), pg. 239',
};

export default alarm;
