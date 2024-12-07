import { FC, memo } from "react";

interface GalvanicIconProps {
    className?: string;
}

const GalvanicIcon: FC<GalvanicIconProps> = ({className}) => (
    <svg className={className} width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5 24L21.5 39.0178" stroke="black"/>
        <line x1="9" y1="24.5" x2="34" y2="24.5" stroke="black"/>
        <line y1="12.5" x2="44" y2="12.5" stroke="black"/>
        <line x1="21.5" y1="12" x2="21.5" stroke="black"/>
    </svg>
);

export default memo(GalvanicIcon);
