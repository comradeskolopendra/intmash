import clsx from "clsx";
import { FC, ReactNode } from "react";
import styles from "./text.module.scss";

interface TextProps {
    size?: "m" | "l" | "s";
    children: ReactNode;
    className?: string;
}

const Text: FC<TextProps> = ({size = "m", children, className = ""}) => {

    return (
        <p className={clsx(styles.text, className, {
            [styles.large]: size === "l",
            [styles.small]: size === "s"
        })}>
            {children}
        </p>
    )
};

export default Text;