import React from 'react';

import { keywordMap } from './data/markdown';
import Icon from './assets/icons/icons';

export function parseMarkdown(text: string): React.ReactNode {
    return text
        .split(/(\*\*[^*]+\*\*|\*[^*]+\*|__[^_]+__|~~[^~]+~~|`[^`]+`|{[^}]+}|\[[^\]]+\]|\([^()]+\))/g)
        .map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{parseKeywords(part.slice(2, -2))}</strong>;
            if (part.startsWith('*') && part.endsWith('*')) return <em key={i}>{parseKeywords(part.slice(1, -1))}</em>;
            if (part.startsWith('__') && part.endsWith('__')) return <u key={i}>{parseKeywords(part.slice(2, -2))}</u>;
            if (part.startsWith('(') && part.endsWith(')')) return <span key={i}>({parseKeywords(part.slice(1, -1))})</span>;
            return <span key={i}>{parseKeywords(part)}</span>;
        });
}

export function parseKeywords(text: string): React.ReactNode {
    const words = text.split(' ');
    const chunks = [];
    let chunk = '';

    words.forEach((trueWord, i) => {
        const word = trueWord.toLowerCase().replace(/[^a-z0-9]/g, '');
        trueWord = trueWord.replace(/\^/g, '*');

        let keyword = keywordMap[word.toLowerCase()];
        if (!keyword) {
            const match = word.match(/d(4|6|8|10|12|20)/);
            if (match) keyword = keywordMap[match[0]];
        }

        if (trueWord[0] === '#') {
            //a special marker to avoid parsing the word as a keyword
            chunk += trueWord.slice(1) + ' ';
        }
        else if (keyword) {
            // parse the keyword
            if (chunk) {
                chunks.push(
                    <span>{chunk}</span>
                );
                chunk = '';
            }
            chunks.push(
                <span key={i} style={{ color: keyword.colour ?? 'inherit' }}>
                    {trueWord}{keyword.icon ?
                        <Icon
                            name={keyword.icon}
                            className='icon'
                            style={{
                                width: '1.1em',
                                height: '1.1em',
                                fill: keyword.colour ?? 'inherit',
                            }}
                        />
                        : ' ' // if no icon, add a space
                    }
                </span>
            );
        }
        else {
            chunk += trueWord + ' ';
        }
    });
    if (chunk) {
        if (chunk.endsWith(' ')) {
            chunk = chunk.slice(0, chunk.length-1);
        }
        chunks.push(
            <span>{chunk}</span>
        );
    }

    return chunks;
}
