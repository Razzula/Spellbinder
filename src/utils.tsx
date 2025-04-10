import React from 'react';

export function parseMarkdown(text: string): React.ReactNode {
    return text
        .split(/(\*\*[^*]+\*\*|\*[^*]+\*|__[^_]+__)/g)
        .map((part, i) => {
            if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
            if (part.startsWith('*')) return <em key={i}>{part.slice(1, -1)}</em>;
            if (part.startsWith('__')) return <u key={i}>{part.slice(2, -2)}</u>;
            return <span key={i}>{part}</span>;
        });
}
