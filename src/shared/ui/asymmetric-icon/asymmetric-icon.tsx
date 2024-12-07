import { FC, memo } from "react";

interface AsymmetricIconProps {
    className?: string;
}

const AsymmetricIcon: FC<AsymmetricIconProps> = ({className}) => (
    <svg className={className} width="29" height="120" viewBox="0 0 29 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="14.5" x2="14.5" y2="120" stroke="black"/>
        <circle cx="14.5" cy="60.5" r="14" fill="white" stroke="black"/>
    </svg>
);

export default memo(AsymmetricIcon);