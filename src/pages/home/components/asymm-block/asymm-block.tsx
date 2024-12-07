import { getStateAsymmetria } from "@/entities/ws-state/selectors";
import { useAppSelector } from "@/shared/hooks/use-app-selector";
import { AsymmetricIcon, Box, Text } from "@/shared/ui";
import { FC, memo } from "react";

import { useMemo } from "react";

import styles from "./asymm-block.module.scss";

const AsymmBlock: FC = () => {
    const asymmetria = useAppSelector(getStateAsymmetria);

    const asymmVariant = useMemo(() => {
        const asymmetriaInteger = parseInt(asymmetria);

        if (asymmetria === null) {
            return "secondary";
        }

        if (asymmetriaInteger >= 10) {
            return "danger"
        } else if (asymmetriaInteger < 10 && asymmetriaInteger > 2) {
            return "primary"
        } else {
            return "success"
        }
    }, [asymmetria])

    return (
        <section className={styles.asymmWrapper}>
            <AsymmetricIcon className={styles.asymmetric} />
            <Text>
                <Box variant={asymmVariant}>{asymmetria === null ? "..." : asymmetria }</Box> Асимметрия
            </Text>
        </section>
    )
};

export default memo(AsymmBlock);