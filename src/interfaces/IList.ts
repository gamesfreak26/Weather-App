import { IMain } from './IMain';
import { IClouds } from './ICloud';
import { IWeather } from './IWeather';
import { IWind } from './IWind';

export interface IList {
    clouds: IClouds[];
    dt: number;
    dt_txt: string;
    main: IMain;
    pop: 0;
    visibility: number;
    weather: IWeather[];
    wind: IWind;
}