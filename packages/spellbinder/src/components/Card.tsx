import ScaledName from './ScaledName';
import { parseMarkdown } from '../utils';

import FancyHR from './FancyHR';

import './Card.css';
import { Ability } from '../types';
import Icon from '../assets/icons/icons';
import ScaledBody from './ScaledBody';

type CardProps = Ability & {
    keywordColour?: string;
    backgroundColour?: string;
    blendColour?: string;
    borderColour?: string;
};

export function CardFactory(ability: CardProps, style: any): JSX.Element {
    return (
        <Card
            type={ability.type}
            name={ability.name}
            castingTime={ability.castingTime}
            school={ability.school}
            description={ability.description}
            meta={ability.meta}
            level={ability.level}
            components={ability.components}
            higherLevel={ability.higherLevel}
            source={ability.source}

            {...style}
        />
    );
}

export function Card({
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

    keywordColour = '#9b2818',
    backgroundColour = '#fdf1dc',
    blendColour = '#d2ba88',
    borderColour = '#a5792a',
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
                '--backgroundColour': backgroundColour,
                '--keywordColour': keywordColour,
                '--accentColour': `var(--${type}-colour)`,
                '--blendColour': blendColour,
                '--borderColour': borderColour,
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
                                        <span className={ word[0] !== '(' ? 'firstChar' : 'restChars' }>{word[0].toUpperCase()}</span>
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
                            <span className='verbal'>{ components.verbal ? 'V' : ' ' }</span>
                            <span className='somatic'>{ components.somatic ? 'S' : ' ' }</span>
                            <span className='material'>{ components.material ? 'M' : ' ' }</span>
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

            <FancyHR />

            <div className='row'>
                <div className='row'>
                    <div className='meta major'>
                        <Icon
                            name={`razzula/action/${castingTime.type.toLowerCase()}`}
                            style={{
                                display: 'inline-block',
                                height: '1em',
                                width: '1em',
                                verticalAlign: '-0.125em',
                            }}
                        />
                        {castingTime.type}
                    </div>
                    <div className='meta' style={{
                        marginLeft: '0.2em',
                    }}>
                        { castingTime.time && <span className='minor'> ({castingTime.time})</span>}
                        { !castingTime.time && (['Action', 'Bonus Action', 'Reaction'].includes(castingTime.type)) &&
                            <span> (<Icon name='intrinsical/action/instantaneous' />)</span>
                        }
                    </div>
                </div>
                <div className='meta minor'>
                    {parseMarkdown(school)}
                </div>
            </div>

            {/* BODY */}
            <ScaledBody>
                <div className='description'>
                    { description.flavour &&
                        <div className='descriptionLine flavour'>
                            {parseMarkdown(description.flavour)}
                        </div>
                    }
                    {
                        description.body.map((line, i) => (
                            <div key={i} className='descriptionLine'>
                                {parseMarkdown(line)}
                            </div>
                        ))
                    }
                </div>
            </ScaledBody>

            {meta &&
                <>
                    <FancyHR />

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
                                    {meta?.range && <span className='metaLabel'>{parseMarkdown(meta?.range)}</span>}
                                    {meta?.range && meta?.area && <span className='metaLabel'> (</span>}
                                    {meta?.area && <span className='metaLabel'>{parseMarkdown(meta?.area)}</span>}
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
                                <strong>Attack:</strong> {parseMarkdown(meta?.attack)}
                            </div>
                        }
                        {meta?.damage &&
                            <div>
                                <strong>Damage:</strong> {parseMarkdown(meta?.damage.amount)} {meta.damage.type && <span>({parseMarkdown(meta.damage.type)})</span>}
                            </div>
                        }
                        {meta?.effect &&
                            <div>
                                <strong>Effect:</strong> {parseMarkdown(meta?.effect)}
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

            <FancyHR />

            {/* FOOTER */}
            {higherLevel &&
                // upcasting information
                <div className='submetablock'>* {parseMarkdown(higherLevel)}</div>
            }

        </div>
    );
}

export default Card;
