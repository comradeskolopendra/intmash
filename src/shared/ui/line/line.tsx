import { FC } from "react";

interface LineProps {
    className?: string;
}

const Line: FC<LineProps> = ({className}) => (
    <svg className={className} width="1" height="120" viewBox="0 0 1 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.5" x2="0.5" y2="120" stroke="black"/>
    </svg>
);

export default Line;