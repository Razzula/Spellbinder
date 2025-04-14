import { CardFactory } from '../src/components/Card'

import { abilities } from '../src/data/loader'

import '../src/core.css'

function App() {

    return (
        <div className='main' style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>

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
