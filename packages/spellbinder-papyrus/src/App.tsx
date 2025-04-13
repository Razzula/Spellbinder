import { Card } from 'spellbinder'

// import './App.css'

function App() {

    return (
        <div className='main' style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <Card
                type='ability'
                name='Breath Weapon'
                castingTime='Action'
                school='Fire (Gold Dragonborn)'
                description={[
                    '*You can use your action to exhale destructuve energy.*',
                    'It deals damage in a **15ft. cone**. When you use your breath weapon, all creatures in the area must make a **Dexterity saving throw**. A creature takes **half damage** on a **successful save**.',
                    'After using your breath weapon, you cannot use it again until you complete a short or long rest.',
                ]}
                meta={{
                    area: '15 ft. cone',
                    save: 'Dexterity',
                    dc: '8 + Constitution modifier + proficiency bonus',
                    damage: {
                        amount: '2d6*',
                        type: 'Fire',
                    },
                }}
                higherLevel='the damage increases to 3d6 (6th), 4d6 (11th), and 5d6 (16th).'
                source='Player’s Handbook (2024), pg. 236'
            />

            <Card
                type='spell'
                name='Fireball'
                castingTime='Action'
                school='Fire (Evocation)'
                description={[
                    '*A bright streak flashes from you to a point you choose within range and then blossoms with a low roar into a fiery explosion.*',
                    'Each creature in a **20ft-radius Sphere** centered on that point must make a **Dexterity saving throw**. A creature takes **half damage** on a **successful save**.',
                    'Flammable objects in the area that aren’t being worn or carried start burning.',
                ]}
                meta={{
                    range: '150 ft.',
                    area: '20 ft. radius sphere',
                    save: 'Dexterity',
                    damage: {
                        amount: '8d6*',
                        type: 'Fire',
                    },
                }}
                level={3}
                components={{
                    verbal: true,
                    somatic: true,
                    material: 'a tiny ball of bat guano and sulfur',
                }}
                higherLevel='the damage increases by 1d6 for each spell slot level above 3.'
                source='Free Rules (2024), pg. 274'
            />

            <Card
                type='spell'
                name='Detect Poison & Disease'
                castingTime='Action'
                school='Detection (Divination)'
                description={[
                    'For the duration, you sense the location of **poisons**, **poisonous or venomous creatures**, and **magical contagions** within **30 feet** of yourself. You sense the kind of poison, creature, or contagion in each case.',
                    'The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.',
                ]}
                meta={{
                    range: 'Self',
                    area: '30 ft. radius sphere',
                    duration: '10 minutes',
                }}
                level={1}
                components={{
                    verbal: true,
                    somatic: true,
                    material: 'a yew leaf',
                    ritual: true,
                    concentration: true,
                }}
                source='Free Rules (2024), pg. 262'
            />
        </div>
    );

}

export default App
