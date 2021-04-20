type Props = {
    width: number;
    height: number;
};

export default function UnsplashLogo({ width, height }: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 841 841"
        >
            <g fill="#000000">
                <path
                    id="Rectangle_2_copy_2"
                    data-name="Rectangle 2 copy 2"
                    d="M788,1046.87h848l-2,263.31H786ZM788,827h294v221H788V827Zm554,0h294v221H1342V827ZM1082.45,478.371h267.1V714.764h-267.1V478.371Z"
                    transform="translate(-785.5 -477.875)"
                />
            </g>
        </svg>
    );
}
