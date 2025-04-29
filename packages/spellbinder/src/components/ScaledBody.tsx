import { useEffect, useRef, useState } from 'react';

function ScaledBody({ children }: { children: React.ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const resize = () => {
            if (!wrapperRef.current || !innerRef.current) return;
            const parentHeight = wrapperRef.current.offsetHeight;
            const childHeight = innerRef.current.scrollHeight;
            setScale(Math.min(1, parentHeight / childHeight));
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(wrapperRef.current!);
        return () => ro.disconnect();
    }, []);

    return (
        <div className="description" ref={wrapperRef}>
            <div
                ref={innerRef}
                style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
            >
                {children}
            </div>
        </div>
    );
}

export default ScaledBody;
