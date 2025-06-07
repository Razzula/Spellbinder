// import { CardFactory, abilities } from 'spellbinder';
import { CardFactory, abilities } from '../../spellbinder/src/index';

import './App.css'

function App() {

    const characters = {
        "Andreas": {
            cards: [
                "Attack",
                "Opportunity Attack",
                "Two-Weapon Fighting",
                // "Attack: Dagger",
                // "Attack: Rapier",
                // "Attack: Unarmed Strike",
                "Nimble Dodge",

                "Bardic Inspiration",

                "Thunderclap",
                "Vicious Mockery",
                "Cure Wounds",
                "Healing Word",
                "Command",
                "Unseen Servant",
            ],
        },
        "Nim Tealeaf": {
            cards: [
                "Attack",
                "Opportunity Attack",
                // "Attack: Crossbow",
                // "Attack: Dagger",
                // "Attack: Spear",
                // "Attack: Unarmed Strike",
                "Initiative Swap",
                "Luck",

                "Bonus Unarmed Strike",
            ],
        },
        "Isla Ironnee": {
            cards: [
                "Attack",
                "Opportunity Attack",
            //     "Attack: Silvered Dagger",
            //     "Attack: Unarmed Strike",
                "Battle Medic",
                "Healing Rerolls",
                "Stonecunning",

                "Hunter's Mark",

                "Animal Friendship",
                "Alarm",

                "Nick (Dagger)",
                "Push (Greatclub)",
            ],
        },
        "Spee Dy": {
            cards: [
                "Attack",
                "Opportunity Attack",
            //     "Attack: Handaxe",
            //     "Attack: Longbow",
            //     "Attack: Longsword",
            //     "Attack: Unarmed Strike",
                "Initiative Swap",

                "Rage",

                "Sap (Longsword)",
                "Slow (Longbow)",
            ],
        },
    };

    return (
        <div className='main'>

            {
                Object.entries(characters).map(([name, character]) => (
                    <div>
                        <div className="break-page"/>
                        {/* <h2>{name}</h2> */}

                        {/* <div className="characterSheet">
                            <div className="section classBlock">
                                <h3>{character.class.name}</h3>
                                <p>Domain: Life<br/>Spellcasting, Channel Divinity...</p>
                                <FancyHR />
                            </div>
                            <div className="section raceBlock">
                                <h3>{character.race.name}</h3>
                                <p>Darkvision, Dwarven Resilience...</p>
                                <FancyHR />
                            </div>
                            <div className="section backgroundBlock">
                                <h3>{character.background.name}</h3>
                                <p>Military Rank, Weapon Proficiency...</p>
                                <FancyHR />
                            </div>
                        </div> */}

                        <div className='deck' key={name}>
                            {
                                character['cards'].map(
                                    name => CardFactory(abilities[name], {
                                        backgroundColour: '#ffffff',
                                        keywordColour: '#9b2818',
                                        blendColour: '#c4c4c4',
                                        borderColour: '#f6f6f6',
                                    }),
                                )
                            }
                        </div>

                    </div>
                ))
            }


        </div>
    );

}

export default App
