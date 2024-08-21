import { OfferPreview } from '../../types/offerPreview';

export function getOffersByCity(offers: OfferPreview[], name: string):OfferPreview[] {
  return offers.filter((item)=>item.city.name === name);
}
