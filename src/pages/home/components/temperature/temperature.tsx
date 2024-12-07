import { memo, useMemo } from "react";
import styles from "./temperatrue.module.scss";

import { Box, Text } from "@/shared/ui";

import { getStateTemperature } from "@/entities/ws-state/selectors";
import { useAppSelector } from "@/shared/hooks/use-app-selector";

const Temperature = () => {
    const temperature = useAppSelector(getStateTemperature);

    const temperatureVariant = useMemo(() => {

        if (temperature === null) {
            return "secondary";
        }

        if (temperature >= 30) {
            return "danger"
        } else if (temperature < 30 && temperature > 5) {
            return "warning"
        } else if (temperature <= 5 && temperature > 0) {
            return "success"
        } else if (temperature === 0) {
            return "primary"
        } else {
            return "cold"
        }
    }, [temperature])

    return (
        <Text className={styles.text}>
            Температура АКБ: <Box variant={temperatureVariant}>{temperature === null ? "..." : `${temperature} \u2103`}</Box>
        </Text>
    )
};

export default memo(Temperature);