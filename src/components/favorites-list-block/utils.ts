import { OfferPreview } from '../../types/offerPreview';

export function getFavoritesOffers(offers: OfferPreview[]):OfferPreview[] {
  return offers.filter((item)=>item.isFavorite);
}


export function getOffersGroupByCity(offers: OfferPreview[]) {
  return offers.reduce<{ [key: string]: OfferPreview[]}>((acc, current) => {
    const location = current.city.name;
    if (!(location in acc)) {
      acc[location] = [];
    }
    acc[location].push(current);
    return acc;
  }, {});
}

/*
function callBack(item:OfferPreview){
  const city:City = item.city;
  return city.name ;
}

export function getOffersGroupByCity(offers: OfferPreview[]) :[string,OfferPreview[]] {
  const newOffers:[string,OfferPreview[]] = ['',[]];
  Object.entries(Object.groupBy(offers, callBack)).map(([item,arrayItem])=>(
    newOffers.push(item , arrayItem as OfferPreview[])
  ));
  return newOffers;
}*/
