import { useEffect, useRef, useState } from 'react';

function ScaledName({ children }: { children: React.ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const resize = () => {
            if (!wrapperRef.current || !innerRef.current) return;
            const parentWidth = wrapperRef.current.offsetWidth;
            const childWidth = innerRef.current.scrollWidth;
            setScale(Math.min(1, parentWidth / childWidth));
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(wrapperRef.current!);
        return () => ro.disconnect();
    }, []);

    return (
        <div className="nameWrapper" ref={wrapperRef}>
            <div
                className="name"
                ref={innerRef}
                style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}
            >
                {children}
            </div>
        </div>
    );
}

export default ScaledName;
