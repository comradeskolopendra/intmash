import { Box, ConnectedOutsideIcon, DisconnectedOutsideIcon, Text } from "@/shared/ui";
import clsx from "clsx";

import { getStateAmper, getStateIsDeviceConnected } from "@/entities/ws-state/selectors";
import { useAppSelector } from "@/shared/hooks/use-app-selector";
import { FC, memo } from "react";
import styles from "./outside-block.module.scss";

interface OutsideBlockProps {
    isNullData: boolean;
}

const OutsideBlock: FC<OutsideBlockProps> = ({isNullData}) => {
    const isDeviceConnected = useAppSelector(getStateIsDeviceConnected);
    const amper = useAppSelector(getStateAmper);

    return (
        <section className={styles.outsideWrapper}>
            {isDeviceConnected 
                ? <ConnectedOutsideIcon className={clsx({
                    [styles.invisibleArrow]: isDeviceConnected === null
                })}/> 
                : <DisconnectedOutsideIcon className={clsx({
                    [styles.invisibleArrow]: isDeviceConnected === null
                })}/>
            }
            <Text className={styles.text}>
                <Box variant={
                    isNullData ? "secondary" : isDeviceConnected ? "danger" : "success"
                }>
                    {amper === null ? "..." : `${amper} A`}
                </Box> Ток ({isDeviceConnected ? "разряд" : "заряд"})
            </Text>
        </section>
    )
};

export default memo(OutsideBlock);