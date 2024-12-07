import { FC, memo, useCallback } from "react";

import { getStateCrashStatus, getStateGroups } from "@/entities/ws-state/selectors";
import { useAppSelector } from "@/shared/hooks/use-app-selector";
import { Button, GalvanicIcon, Group, Line } from "@/shared/ui";
import AsymmBlock from "../asymm-block/asymm-block";
import CleatBlock from "../cleat-block/cleat-block";
import OutsideBlock from "../outside-block/outside-block";
import Temperature from "../temperature/temperature";
import styles from "./device.module.scss";

interface DeviceProps {
    isNullData: boolean;
}

const Device: FC<DeviceProps> = ({isNullData}) => {
    const groups = useAppSelector(getStateGroups);
    const isCrash = useAppSelector(getStateCrashStatus);

    const handleOnClick = useCallback(() => {
        console.log("Здесь отправлять ивент сокету на реализацию каких-либо действий. Например, сброс защит")
    }, [])

    return (
        <section className={styles.device}>
            <Temperature/>

            <section className={styles.scheme}>
                <Group group={groups[0]}>
                    <GalvanicIcon className={styles.galvanic}/>
                </Group>

                <AsymmBlock/>

                <Group group={groups[1]}>
                    <GalvanicIcon className={styles.galvanic}/>
                </Group>

                <Line className={styles.line}/>
                
                <CleatBlock isNullData={isNullData}/>

                <OutsideBlock isNullData={isNullData}/>
                {isCrash && <Button onClick={handleOnClick} className={styles.button}>Сброс защит</Button>}
            </section>
        </section>
    )
};

export default memo(Device);