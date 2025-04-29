import { CardFactory } from '../src/components/Card'

import { abilities } from '../src/data/loader'

import '../src/core.css'
import './app.css'

function App() {

    return (
        <div className='main'>

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
