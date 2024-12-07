export const calcVoltage = (elements: number, voltage: number): string => {
    return (voltage / elements).toFixed(2);
};