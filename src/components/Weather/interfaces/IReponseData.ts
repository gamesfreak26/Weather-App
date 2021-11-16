import { ICity } from './ICity';
import { IList } from './IList';

export interface IResponseData {
    cnt: number;
    cod: string;
    list: IList[];
    city: ICity;
}