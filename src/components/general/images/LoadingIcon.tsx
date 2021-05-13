type Props = {
    width: number;
    height: number;
    cls?: string;
};

export default function LoadingIcon({ width, height, cls }: Props) {
    return (
<svg 
    className={cls} 
    width={width} 
    height={height} 
    viewBox="0 0 100 100" 
    preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" fill="none" stroke="#2662ea" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </circle>
    </svg>

    );
}


