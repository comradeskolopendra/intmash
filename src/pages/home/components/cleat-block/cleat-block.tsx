import { getStateCrashDescription, getStateCrashStatus, getStateIsDeviceConnected } from "@/entities/ws-state/selectors";
import { useAppSelector } from "@/shared/hooks/use-app-selector";
import { CleatIcon } from "@/shared/ui";
import clsx from "clsx";
import { FC, memo } from "react";
import styles from "./cleat-block.module.scss";

import { Box, Text } from "@/shared/ui";

interface CleatBlockProps {
    isNullData: boolean;
}

const CleatBlock: FC<CleatBlockProps> = ({isNullData}) => {
    const isDeviceConnected = useAppSelector(getStateIsDeviceConnected);
    const isCrash = useAppSelector(getStateCrashStatus);
    const crashDescription = useAppSelector(getStateCrashDescription);

    return (
        <section className={styles.cleatWrapper}>
            <div>
                <CleatIcon />
                <span className={clsx(styles.cleatLine, {
                    [styles.cleatActive]: isDeviceConnected,
                    [styles.invisible]: isNullData
                })}/>
            </div>
            {isCrash && 
                <Text className={clsx(styles.text)}><Box variant="danger">Авария</Box> {crashDescription}</Text>
            }
        </section>
    )
}

export default memo(CleatBlock);