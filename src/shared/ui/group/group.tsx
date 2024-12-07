import { calcVoltage } from "@/shared/helpers";
import { FC, ReactNode } from "react";
import { Box } from "..";
import Text from "../text/text";
import styles from "./group.module.scss";

interface GroupProps {
    group: {
        elements: number
        voltage: number
    };
    children: ReactNode;
}

const Group: FC<GroupProps> = ({group, children}) => {
    return (
        <section className={styles.group}>
            <span className={styles.amount}>x{group.elements || "?"}</span>

            {children}

            <section className={styles.info}>
                <Text>
                    <Box variant={group.voltage ? "primary" : "secondary"}>{group.voltage !== null ? `${group.voltage} V` : "..."}</Box> Напряжение
                </Text>
                
                <Text>
                    <Box variant={group.voltage ? "primary" : "secondary"}>{group.voltage !== null ? `${calcVoltage(group.elements, group.voltage)} V` : "..."}</Box> Сред. напр. на элементе
                </Text>
            </section>
        </section>
    )
};

export default Group;