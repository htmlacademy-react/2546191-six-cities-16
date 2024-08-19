import { Host } from './host';
import { OfferPreview } from './offerPreview';


export type Offer = OfferPreview& {
    description: string;
    bedrooms: number;
    goods: string[];
    host: Host;
    images: string[];
    maxAdults: number;
}
