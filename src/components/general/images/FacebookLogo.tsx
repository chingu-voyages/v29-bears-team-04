type Props = {
    width: number;
    height: number;
    cls?: string;
};
export default function FacebookLogo({ width, height, cls }: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 333333 333333"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            width={width}
            height={height}
            className={cls}
        >
            <path
                d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm18069 106436h30115V70296h-30115c-23244 0-42158 18913-42158 42158v18070h-24095v36143h24089v96371h36142v-96371h30115l6022-36142h-36137v-18070c0-3266 2757-6022 6022-6022v4z"
            />
        </svg>
    );
}
