import { IMainProps } from './IMainProps';
import { IClouds } from './ICloudProps';
import { IWeatherProps } from './IWeatherProps';
import { IWindProps } from './IWindProps';

export interface IListProps {
    clouds: IClouds[];
    dt: number;
    dt_txt: string;
    main: IMainProps;
    pop: 0;
    visibility: number;
    weather: IWeatherProps[];
    wind: IWindProps;
}