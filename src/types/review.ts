import { Host } from './host';

export type Review = {
    id: string;
    comment: string;
    date: string ;
    rating: number;
    user: Host;
    }
