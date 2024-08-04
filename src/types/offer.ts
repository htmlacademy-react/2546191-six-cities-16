import { Host } from './host';
import { OfferPreview } from './offerPreview';


export type Offer = Omit<OfferPreview, 'previewImage'> & {
    description: string;
    bedrooms: number;
    goods: string[];
    host: Host;
    images: string[];
    maxAdults: number;
}
