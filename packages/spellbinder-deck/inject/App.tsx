import { CardFactory, abilities } from 'spellbinder'

// import './App.css'

function App() {

    return (
        <div className='main' style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>

            {CardFactory(abilities['Breath Weapon'])}
            {CardFactory(abilities['Fireball'])}
            {CardFactory(abilities['Detect Poison & Disease'])}

        </div>
    );

}

export default App
