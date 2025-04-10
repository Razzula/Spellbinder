import './Card.css';
import ScaledName from './components/ScaledName';

type CardProps = {
    type: 'spell' | 'ability';
    name: string;
    level?: number;
    castingTime: string;
    school: string;
    description: string[];
    range?: string;
    area?: string;
    higherLevel?: string;
    components?: ComponentProps;
    attack?: string;
    save?: string;
    dc?: string;
    damage?: {
        type: string;
        amount: string;
    };
    duration?: string;
    effect?: string;
    source?: string;
};

type ComponentProps = {
    verbal?: boolean;
    somatic?: boolean;
    material?: string;
    ritual?: boolean;
    concentration?: boolean;
};

export default function Card({
    type,
    name,
    level,
    castingTime,
    school,
    description,
    range,
    area,
    higherLevel,
    components,
    attack,
    save,
    dc,
    damage,
    duration,
    effect,
    source,
}: CardProps) {

    const fillerWords = ['of', 'the', 'and', 'in', 'on', 'at', '&'];
    const nameWords = name.split(' ').map((word) => {
        const lower = word.toLowerCase();
        const isFiller = fillerWords.includes(lower);
        return { word, isFiller };
    });

    const meta = range || area || save || dc || damage || components?.material || duration || castingTime || effect;

    return (
        <div className='coreblock'
            style={{
                '--accentColour': `var(--${type}-colour)`
            } as React.CSSProperties}
        >

            {/* HEADER */}
            <div className='header'>
                { type === 'spell' &&
                    <div className='level'>
                        { level !==  undefined ? `${level} ` : '?'}
                    </div>
                }
                <ScaledName>
                        {
                            nameWords.map(({ word, isFiller }, i) => (
                                <span key={i}>
                                    {isFiller ? (
                                        <span className='restChars'>{word.toUpperCase()}</span>
                                    ) : (
                                        <>
                                            <span className='firstChar'>{word[0].toUpperCase()}</span>
                                            <span className='restChars'>{word.slice(1).toUpperCase()}</span>
                                        </>
                                    )}{' '}
                                </span>
                            ))
                        }
                </ScaledName>
                { components &&
                    <div className='components'>
                        <div>
                            {components.verbal && <span className='verbal'>V</span>}
                            {components.somatic && <span className='somatic'>S</span>}
                            {components.material && <span className='material'>M</span>}
                        </div>
                        <div>
                            {components.ritual && <span className='ritualIcon'>R</span>}
                            {components.concentration && <span className='concentrationIcon'>C</span>}
                        </div>
                    </div>
                }
            </div>

            {source && (
                <div className='sourceLabel'>
                    {source.split('').join('\n')}
                </div>
            )}

            <div className='hr' />

            <div className='row'>
                <div className='meta major'>
                    {castingTime}
                </div>
                <div className='meta minor'>
                    {school}
                </div>
            </div>

            {/* BODY */}
            <div className='description'>{
                description.map((line, i) => (
                    <div key={i} className='descriptionLine'>
                        {line}
                    </div>
                ))
            }</div>

            { meta &&
                <>
                    <div className='hr' />

                    <div className='metablock'>
                        {/* metadata */}
                        { (range || area) &&
                            <div>
                                <strong>
                                    {range && <span className='metaLabel'>Range</span>}
                                    {range && area && <span className='metaLabel'>, </span>}
                                    {area && <span className='metaLabel'>Area</span>}
                                    :
                                </strong>
                                {' '}
                                <span>
                                    {range && <span className='metaLabel'>{range}</span>}
                                    {range && area && <span className='metaLabel'> (</span>}
                                    {area && <span className='metaLabel'>{area}</span>}
                                    {range && area && <span className='metaLabel'>)</span>}
                                </span>
                            </div>
                        }
                        { duration &&
                            <div>
                                <strong>Duration:</strong> {duration} { components?.concentration && '(Concentration)'}
                            </div>
                        }
                        { save &&
                            <div>
                                <strong>Save:</strong> {save}
                            </div>
                        }
                        { dc &&
                            <div>
                                <strong>DC:</strong> {dc}
                            </div>
                        }
                        { attack &&
                            <div>
                                <strong>Attack:</strong> {attack}
                            </div>
                        }
                        { damage &&
                            <div>
                                <strong>Damage:</strong> {damage.amount} { damage.type && `(${damage.type})`}
                            </div>
                        }
                        { effect &&
                            <div>
                                <strong>Effect:</strong> {effect}
                            </div>
                        }
                        { components?.material &&
                            <div>
                                <strong>Material:</strong> <span className='minor'> {components.material}</span>
                            </div>
                        }
                    </div>
                </>
            }

            <div className='hr' />

            {/* FOOTER */}
            { higherLevel &&
                // upcasting information
                <div className='submetablock'>* {higherLevel}</div>
            }

        </div>
    );
}
