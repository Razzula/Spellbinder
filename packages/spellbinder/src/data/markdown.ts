export const keywordMap: Record<string, { colour?: string; icon?: string }> = {
    // damages
    'acid': { colour: 'green', icon: 'intrinsical/damage/acid' },
    'cold': { colour: 'cyan', icon: 'intrinsical/damage/cold' },
    'fire': { colour: 'red', icon: 'intrinsical/damage/fire' },
    'force': { colour: 'purple', icon: 'intrinsical/damage/force' },
    'lightning': { colour: 'yellow', icon: 'intrinsical/damage/lightning' },
    'necrotic': { colour: 'black', icon: 'intrinsical/damage/necrotic' },
    'poison': { colour: 'darkgreen', icon: 'intrinsical/damage/poison' },
    'psychic': { colour: 'magenta', icon: 'intrinsical/damage/psychic' },
    'radiant': { colour: 'gold', icon: 'intrinsical/damage/radiant' },
    'thunder': { colour: 'blue', icon: 'intrinsical/damage/thunder' },

    'bludgeoning': { colour: 'grey', icon: 'intrinsical/damage/bludgeoning' },
    'slashing': { colour: 'silver', icon: 'intrinsical/damage/slashing' },
    'piercing': { colour: 'darkgrey', icon: 'intrinsical/damage/piercing' },

    // conditions
    'blinded': { colour: 'red', icon: 'intrinsical/condition/blinded' },
    'charmed': { colour: 'red', icon: 'intrinsical/condition/charmed' },
    'deafened': { colour: 'red', icon: 'intrinsical/condition/deafened' },
    'exhaustion': { colour: 'red', icon: 'intrinsical/condition/exhaustion' },
    'frightened': { colour: 'red', icon: 'intrinsical/condition/frightened' },
    'grappled': { colour: 'red', icon: 'intrinsical/condition/grappled' },
    'incapacitated': { colour: 'red', icon: 'intrinsical/condition/incapacitated' },
    'invisible': { colour: 'lightblue', icon: 'intrinsical/condition/invisible' },
    'paralyzed': { colour: 'red', icon: 'intrinsical/condition/paralyzed' },
    'petrified': { colour: 'red', icon: 'intrinsical/condition/petrified' },
    'poisoned': { colour: 'red', icon: 'intrinsical/condition/poisoned' },
    'prone': { colour: 'red', icon: 'intrinsical/condition/prone' },
    'restrained': { colour: 'red', icon: 'intrinsical/condition/restrained' },
    'stunned': { colour: 'red', icon: 'intrinsical/condition/stunned' },
    'unconscious': { colour: 'red', icon: 'intrinsical/condition/unconscious' },

    'immunity': { colour: 'green', icon: 'intrinsical/condition/immunity' },
    'resistance': { colour: 'green', icon: 'intrinsical/condition/resistance' },
    'vulnerability': { colour: 'red', icon: 'intrinsical/condition/vulnerability' },

    // area of effect https://www.dndbeyond.com/sources/dnd/phb-2024/rules-glossary#AreaofEffect
    'circle': { colour: '#58180d', icon: 'intrinsical/target/circle' },
    'cone': { colour: '#58180d', icon: 'intrinsical/target/cone' },
    'cube': { colour: '#58180d', icon: 'intrinsical/target/cube' },
    'cylinder': { colour: '#58180d', icon: 'intrinsical/target/cylinder' },
    'emanation': { colour: '#58180d', icon: 'intrinsical/target/emanation' },
    'line': { colour: '#58180d', icon: 'intrinsical/target/line' },
    'self': { colour: '#58180d', icon: 'intrinsical/target/self' },
    'sphere': { colour: '#58180d', icon: 'intrinsical/target/sphere' },
    'square': { colour: '#58180d', icon: 'intrinsical/target/square' },
    'touch': { colour: '#58180d', icon: 'intrinsical/target/touch' },
    'wall': { colour: '#58180d', icon: 'intrinsical/target/wall' },

    // hazards https://www.dndbeyond.com/sources/dnd/phb-2024/rules-glossary#Hazard
    'burning': { colour: 'red', icon: 'razzula/hazard/burning' },
    'dehydration': { colour: 'blue', icon: 'razzula/hazard/dehydration' },
    'falling': { colour: 'grey', icon: 'razzula/hazard/falling' },
    'malnutrition': { colour: 'orange', icon: 'razzula/hazard/malnutrition' },
    'suffocating': { colour: 'lightblue', icon: 'razzula/hazard/suffocating' },

    // dice
    'd4': { colour: '#58180d', icon: 'intrinsical/dice/d4' },
    'd6': { colour: '#58180d', icon: 'intrinsical/dice/d6' },
    'd8': { colour: '#58180d', icon: 'intrinsical/dice/d8' },
    'd10': { colour: '#58180d', icon: 'intrinsical/dice/d10' },
    'd12': { colour: '#58180d', icon: 'intrinsical/dice/d12' },
    'd20': { colour: '#58180d', icon: 'intrinsical/dice/d20' },
    'advantage': { colour: 'green', icon: 'intrinsical/dice/advantage' },
    'disadvantage': { colour: 'red', icon: 'intrinsical/dice/disadvantage' },
    'emphasis': { colour: '#ff00ff', icon: 'razzula/dice/emphasis' },

    // schools of magic
    'abjuration': { colour: '#58180d', icon: 'intrinsical/spell/abjuration' },
    'conjuration': { colour: '#58180d', icon: 'intrinsical/spell/conjuration' },
    'divination': { colour: '#58180d', icon: 'intrinsical/spell/divination' },
    'enchantment': { colour: '#58180d', icon: 'intrinsical/spell/enchantment' },
    'evocation': { colour: '#58180d', icon: 'intrinsical/spell/evocation' },
    'illusion': { colour: '#58180d', icon: 'intrinsical/spell/illusion' },
    'necromancy': { colour: '#58180d', icon: 'intrinsical/spell/necro' },
    'transmutation': { colour: '#58180d', icon: 'intrinsical/spell/transmutation' },

    // classes
    'artificer': { colour: '#58180d', icon: 'intrinsical/class/artificer' },
    'barbarian': { colour: '#58180d', icon: 'intrinsical/class/barbarian' },
    'bard': { colour: '#58180d', icon: 'intrinsical/class/bard' },
    'cleric': { colour: '#58180d', icon: 'intrinsical/class/cleric' },
    'druid': { colour: '#58180d', icon: 'intrinsical/class/druid' },
    'fighter': { colour: '#58180d', icon: 'intrinsical/class/fighter' },
    'monk': { colour: '#58180d', icon: 'intrinsical/class/monk' },
    'paladin': { colour: '#58180d', icon: 'intrinsical/class/paladin' },
    'ranger': { colour: '#58180d', icon: 'intrinsical/class/ranger' },
    'rogue': { colour: '#58180d', icon: 'intrinsical/class/rogue' },
    'sorcerer': { colour: '#58180d', icon: 'intrinsical/class/sorcerer' },
    'warlock': { colour: '#58180d', icon: 'intrinsical/class/warlock' },
    'wizard': { colour: '#58180d', icon: 'intrinsical/class/wizard' },

    // misc.
    'proficiency': { colour: 'green', icon: 'intrinsical/misc/proficiency' },
    'proficient': { colour: 'green', icon: 'intrinsical/misc/proficient' },
    'expertise': { colour: 'green', icon: 'intrinsical/misc/expertise' },

    'successful': { colour: 'green' },
    'failed': { colour: 'red' },
};
