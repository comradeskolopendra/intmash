import { FC, memo } from "react";

interface CleatIconProps {
    className?: string;
}

const CleatIcon: FC<CleatIconProps> = ({className}) => (
    <svg className={className} width="100" height="110" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="46.5" cy="102.5" r="7.5" fill="black"/>
        <circle cx="46.5" cy="7.5" r="7.5" fill="black"/>
    </svg>
);

export default memo(CleatIcon);