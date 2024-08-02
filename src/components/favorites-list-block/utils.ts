import { City } from '../../types/city';
import { OfferPreview } from '../../types/offerPreview';

export function getFavoritesOffers(offers: OfferPreview []):OfferPreview [] {
  return offers.filter((item)=>item.isFavorite);
}

function callBack(item:OfferPreview){
  const city:City = item.city;
  return city.name ;
}

export function getOffersGroupByCity(offers: OfferPreview []) :[string,OfferPreview[]] {
  if (offers) {
    return Object.groupBy(offers, callBack) as unknown as [string, OfferPreview[]];
  }
  return ['',[]];
}


