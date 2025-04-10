import ScaledName from './components/ScaledName';
import { parseMarkdown } from './utils';

import './Card.css';

type CardProps = {
    type: 'spell' | 'ability';
    name: string;
    level?: number;
    castingTime: string;
    school: string;
    description: string[];
    meta?: MetaProps;
    higherLevel?: string;
    components?: ComponentProps;
    source?: string;
};

type MetaProps = {
    range?: string;
    area?: string;
    save?: string;
    dc?: string;
    attack?: string;
    damage?: {
        type: string;
        amount: string;
    };
    duration?: string;
    effect?: string;
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
    meta,
    higherLevel,
    components,
    source,
}: CardProps) {

    const fillerWords = ['of', 'the', 'and', 'in', 'on', 'at', '&'];
    const nameWords = name.split(' ').map((word) => {
        const lower = word.toLowerCase();
        const isFiller = fillerWords.includes(lower);
        return { word, isFiller };
    });

    return (
        <div className='coreblock'
            style={{
                '--accentColour': `var(--${type}-colour)`
            } as React.CSSProperties}
        >

            {/* HEADER */}
            <div className='header'>
                {type === 'spell' &&
                    <div className='level'>
                        {level !== undefined ? `${level} ` : '?'}
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
                {components &&
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
            <div className='description'>
                {
                    description.map((line, i) => (
                        <div key={i} className='descriptionLine'>
                            {parseMarkdown(line)}
                        </div>
                    ))
                }
            </div>

            {meta &&
                <>
                    <div className='hr' />

                    <div className='metablock'>
                        {/* metadata */}
                        {(meta?.range || meta?.area) &&
                            <div>
                                <strong>
                                    {meta?.range && <span className='metaLabel'>Range</span>}
                                    {meta?.range && meta?.area && <span className='metaLabel'>, </span>}
                                    {meta?.area && <span className='metaLabel'>Area</span>}
                                    :
                                </strong>
                                {' '}
                                <span>
                                    {meta?.range && <span className='metaLabel'>{meta?.range}</span>}
                                    {meta?.range && meta?.area && <span className='metaLabel'> (</span>}
                                    {meta?.area && <span className='metaLabel'>{meta?.area}</span>}
                                    {meta?.range && meta?.area && <span className='metaLabel'>)</span>}
                                </span>
                            </div>
                        }
                        {meta?.duration &&
                            <div>
                                <strong>Duration:</strong> {meta?.duration} {components?.concentration && '(Concentration)'}
                            </div>
                        }
                        {meta?.save &&
                            <div>
                                <strong>Save:</strong> {meta?.save}
                            </div>
                        }
                        {meta?.dc &&
                            <div>
                                <strong>DC:</strong> {meta?.dc}
                            </div>
                        }
                        {meta?.attack &&
                            <div>
                                <strong>Attack:</strong> {meta?.attack}
                            </div>
                        }
                        {meta?.damage &&
                            <div>
                                <strong>Damage:</strong> {meta?.damage.amount} {meta?.damage.type && `(${meta?.damage.type})`}
                            </div>
                        }
                        {meta?.effect &&
                            <div>
                                <strong>Effect:</strong> {meta?.effect}
                            </div>
                        }
                        {components?.material &&
                            <div>
                                <strong>Material:</strong> <span className='minor'> {components.material}</span>
                            </div>
                        }
                    </div>
                </>
            }

            <div className='hr' />

            {/* FOOTER */}
            {higherLevel &&
                // upcasting information
                <div className='submetablock'>* {higherLevel}</div>
            }

        </div>
    );
}
