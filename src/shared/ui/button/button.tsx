import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, memo } from "react";

import styles from "./button.module.scss";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({className, onClick, children, ...rest}) => {
    return <button className={clsx(styles.button, className)} onClick={onClick} {...rest}>{children}</button>
};

export default memo(Button);