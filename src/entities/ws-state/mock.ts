export interface IInitialState {
    // Информация подключения к сокету - на фронте.
    wsConnected: boolean;
    wsError: string;
    wsMessage: {
        // Предупреждения и информация - с вебсокета.
        warning: {
            status: boolean| null,
            description: string | null;
        };
        // Ошибка и описание - с вебсокета
        crash: {
            status: boolean | null;
            description: string | null;
        };
        // Данные с датчиков - с вебсокета
        temperature: number | null;
        amper: number | null;
        // Данные по асимметрии предполагаю, что тоже будут приходить с вебсокета при изменении на приборах.
        asymmetria: string | null;
        // смотрим в миддлваре на ключ с экшена, и если авария - делаем диспатч setDisconnectDevice, а по дефолту - сокет. 50/50
        isDeviceConnected: boolean | null,
        // Группы устройств и информация о них - с вебсокета
        groups: {
            elements: number | null;
            voltage: number | null;
        }[];
    };
}

// Тестовые значения, указанные в мнемосхеме в пдф
// 1. Дефолтное состояние, прибор подключен
export const defaultInitialState: IInitialState = {
    wsConnected: true,
    wsError: "",
    wsMessage: {
        warning: {
            status: true,
            description: "Датчик температуры не исправен",
        },
        crash: {
            status: false,
            description: ""
        },
        temperature: -15,
        amper: -50,
        asymmetria: "8%",
        isDeviceConnected: true,
        groups: [
            {
                elements: 9,
                voltage: 115,
            },
            {
                elements: 8,
                voltage: 105
            }
        ]
    },
}

// 2. Устройство отключено
export const disconnectedInitialState: IInitialState = {
    wsConnected: true,
    wsError: "",
    wsMessage: {
        warning: {
            status: false,
            description: "Предупреждений нет",
        },
        crash: {
            status: false,
            description: ""
        },
        temperature: 15,
        amper: 50,
        asymmetria: "2%",
        isDeviceConnected: false,
        groups: [
            {
                elements: 9,
                voltage: 115,
            },
            {
                elements: 8,
                voltage: 105
            }
        ]
    },
}

// 3. Авария
export const crashInitialState: IInitialState = {
    wsConnected: true,
    wsError: "",
    wsMessage: {
        warning: {
            status: false,
            description: "Предупреждений нет",
        },
        crash: {
            status: true,
            description: "Недопустимая разность напряжений между группами"
        },
        temperature: 30,
        amper: 50,
        asymmetria: "12%",
        isDeviceConnected: false,
        groups: [
            {
                elements: 9,
                voltage: 115,
            },
            {
                elements: 8,
                voltage: 105
            }
        ]
    }
}

// 4. Нет данных
export const nullDataInitialState: IInitialState = {
    wsConnected: true,
    wsError: "",
    wsMessage: {
        warning: {
            status: null,
            description: "",
        },
        crash: {
            status: null,
            description: ""
        },
        temperature: null,
        amper: null,
        asymmetria: null,
        isDeviceConnected: null,
        groups: [
            {
                elements: null,
                voltage: null,
            },
            {
                elements: null,
                voltage: null
            }
        ]
    }
}