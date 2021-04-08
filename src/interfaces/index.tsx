export interface IDesign {
    label: string
    value: string
    price: number
}

interface Wheels {
    src: string
    label: string
    value: string
    price: number
}

interface Types {
    label: string,
    value: string,
    specs: {
        range: number,
        top_speed: number,
        acceleration_time: number,
    },
    price: number
    benefits?: string[]
}

export interface IModel {
    key: string
    name: string
    colors: any
    wheels: Wheels[]
    types: Types[]
    interiorColors: IDesign[]
    interiorLayouts?: IDesign[]
}

export interface ISettings {
    label: string
    type: string
    prop: string | number
    options: [{
        value: string
        price: number
    }]
    disclaimer_1?: string
    disclaimer_2?: string
}