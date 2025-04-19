import { CardFactory, abilities } from 'spellbinder'

function App() {
    return (
        <div
            id='spellbinderApp'
            style={{
                position: 'fixed',
                inset: 0,
                display: 'flex',
                justifyContent: 'space-between',
                pointerEvents: 'none',
                zIndex: 9999,
                padding: '1rem',
            }}
        >
            <div
                className='leftPanel'
                style={{ pointerEvents: 'auto', maxWidth: '20%', minWidth: '250px' }}
            >
                {CardFactory(abilities['Breath Weapon'])}
            </div>

            <div
                className='rightPanel'
                style={{
                    pointerEvents: 'auto',
                    maxWidth: '20%',
                    minWidth: '250px',
                    position: 'relative',
                }}
            >
                {CardFactory(abilities['Fireball'])}
                <button
                    className='floatingButton'
                    style={{
                        position: 'absolute',
                        bottom: '1rem',
                        right: '1rem',
                        zIndex: 10000,
                    }}
                >
                    Show Spells
                </button>
            </div>
        </div>
    );
}

export default App;
