export interface IDesign {
    label: string
    value: string
    price: number
}

export interface IWheels {
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
    key: any
    name: string
    colors: any
    wheels: IWheels[]
    types: Types[]
    interiorColors: IDesign[]
    interiorLayouts?: IDesign[]
}

export interface ISettings {
    label: string
    type: string
    prop: string 
    options: Types[]
    disclaimer_1?: string
    disclaimer_2?: string
}