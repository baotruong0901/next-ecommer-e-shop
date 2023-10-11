import { AxiosResponse } from 'axios';

declare module 'axios' {
    export interface AxiosResponse<T = any> {
        success: boolean;
        msg: string;
    }
}