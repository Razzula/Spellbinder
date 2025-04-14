// dynamically import in-line SVG components
const icons = import.meta.glob('./**/*.svg', { query:'?react', eager: true, import: 'default' });

type IconProps = {
    name: string;
    className?: string;
    style?: React.CSSProperties;
};

console.log(icons); // Log the imported icons

export default function Icon({ name, className = 'icon', style }: IconProps) {
    const SvgIcon = icons[`./${name}.svg`];
    if (!SvgIcon) {
        console.error(`Icon "${name}" not found.`);
        return null;
    }
    // @ts-expect-error SvgIcon is a React component
    return <SvgIcon className={className} style={style} />;
}
