import { RequestStatus } from '../../shared/constants';
import { City } from '../../types/city';
import { OfferPreview } from '../../types/offerPreview';

export type OfferState = {
    currentCity:City;
    offers:OfferPreview[];
    requestStatus:RequestStatus;
}
