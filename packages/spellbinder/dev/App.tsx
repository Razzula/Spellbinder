import { CardFactory } from '../src/components/Card'

import { abilities } from '../src/data/loader'

import '../src/core.css'

function App() {

    return (
        <div className='main' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', padding: '0.2rem' }}>

            {
                Object.keys(abilities).map((key) => {
                    const ability = abilities[key];
                    return (
                        <div key={key}>
                            {CardFactory(ability)}
                        </div>
                    );
                })
            }

        </div>
    );

}

export default App
