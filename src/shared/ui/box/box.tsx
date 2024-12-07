import clsx from "clsx";
import { FC, ReactNode } from "react";
import styles from "./box.module.scss";

interface BoxProps {
    children: ReactNode;
    variant?: "danger" | "warning" | "primary" | "secondary" | "cold" | "success"
}

const Box: FC<BoxProps> = ({children, variant = "primary"}) => {
    return <span className={clsx(styles.box, {
        [styles.primary]: variant === "primary",
        [styles.danger]: variant === "danger",
        [styles.warning]: variant === "warning",
        [styles.secondary]: variant === "secondary",
        [styles.cold]: variant === "cold",
        [styles.success]: variant === "success"
    })}>{children}</span>
};

export default Box;