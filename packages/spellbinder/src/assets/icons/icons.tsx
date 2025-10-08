// dynamically import in-line SVG components
const icons = import.meta.glob('./**/*.svg', {
  query: '?react',
  eager: true,
  import: 'default',
});

type IconProps = {
    name: string;
    className?: string;
    style?: React.CSSProperties;
};

export default function Icon({ name, className = 'icon', style }: IconProps) {
    const key = `./${name}.svg`;
    const SvgIcon = icons[key];
    if (!SvgIcon) {
        console.error(`Icon "${name}" not found.`);
        return null;
    }
    // @ts-expect-error SvgIcon is a React component
    return <SvgIcon className={className} data-sb="icon" style={style} />;
}
