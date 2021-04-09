import { IModel, IWheels } from "./model.interface";

export interface IConfig {
    model: IModel | string
    car_type: string
    color: string
    wheels: IWheels | string
    interior_color: string
    interior_layout: string
}

export interface Items {
    alt: string
    url: string
    scale: boolean
}