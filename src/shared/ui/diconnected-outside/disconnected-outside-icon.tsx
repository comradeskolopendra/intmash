import clsx from "clsx";
import { FC, memo } from "react";

import styles from "./disconnected-outside-icon.module.scss";

interface DisconnectedOutsideIconProps {
    className?: string;
}

const DisconnectedOutsideIcon: FC<DisconnectedOutsideIconProps> = ({className}) => (
    <svg className={clsx(styles.outside, className)} width="100" height="56" viewBox="0 0 100 56" fill="#008000" xmlns="http://www.w3.org/2000/svg">
        <line y1="55.5" x2="100" y2="55.5" stroke="black"/>
        <path d="M48.5 -0.00553894L42.7265 9.99446H54.2735L48.5 -0.00553894ZM49.5 56.0045L49.5 8.99446H47.5L47.5 56.0045H49.5Z"/>
    </svg>
);

export default memo(DisconnectedOutsideIcon);