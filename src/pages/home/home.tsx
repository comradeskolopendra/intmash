import { getStateGroups, getStateIsDeviceConnected, getStateWarningDescription, getStateWarningStatus } from "@/entities/ws-state/selectors";
import { useAppSelector } from "@/shared/hooks/use-app-selector";
import { Box, Text } from "@/shared/ui";
import clsx from "clsx";
import styles from "./home.module.scss";

import { useMemo } from "react";
import { Device } from "./components";

const Home = () => {
    const warningStatus = useAppSelector(getStateWarningStatus);
    const warningDescription = useAppSelector(getStateWarningDescription);
    const groups = useAppSelector(getStateGroups)
    const isDeviceConnected = useAppSelector(getStateIsDeviceConnected);

    const isNullData = useMemo(() => isDeviceConnected === null, [isDeviceConnected === null])

    return (
        <main className={styles.home}>
            <Text className={clsx(styles.defaultStatus, {
                [styles.nullData]: warningStatus === null
            })}>
                {warningStatus && <Box variant="warning">Предупреждение</Box>} {warningStatus === null ? "Нет данных" : warningDescription}
            </Text>

            <Device isNullData={isNullData}/>
            
            <Text className={styles.text}>
                <Box variant={
                    isNullData ? "secondary" : "primary"
                }>
                    {isNullData ? "..." : `${groups.reduce((acc, current) => current.voltage + acc, 0)} V`}
                </Box> Общее напряжение
            </Text>
        </main>
    )
};

export default Home;