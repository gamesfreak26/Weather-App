import { ICityProps } from './ICityProps';
import { IListProps } from './IListProps';

export interface IResponseDataProps {
    cnt: number;
    cod: string;
    list: IListProps[];
    city: ICityProps;
}