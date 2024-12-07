import clsx from "clsx";
import { FC, memo } from "react";

import styles from "./connected-outside-icon.module.scss";

interface ConnectedOutsideIconProps {
    className?: string;
}

const ConnectedOutsideIcon: FC<ConnectedOutsideIconProps> = ({className}) => (
    <svg className={clsx(styles.outside, className)} width="100" height="56" viewBox="0 0 100 56" fill="#FF0000" xmlns="http://www.w3.org/2000/svg">
        <line y1="55.5055" x2="100" y2="55.5055" stroke="black"/>
        <path d="M48.5 56.01L54.2735 46.01H42.7265L48.5 56.01ZM47.5 0V47.01H49.5V0L47.5 0Z"/>
    </svg>
);

export default memo(ConnectedOutsideIcon);