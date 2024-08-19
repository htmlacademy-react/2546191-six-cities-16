import { OfferPreview } from '../../types/offerPreview';
import PlaceCard from '../place-card/place-card';

type OfferListBlockProps = {
    offers : OfferPreview[];
    onCardHover:(offer:OfferPreview|null) => void;
}


function OfferListBlock ({offers, onCardHover}:OfferListBlockProps) :JSX.Element{
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers && offers.map((el) =><PlaceCard offer={el} onCardHover={onCardHover} key={el.id}/>)}
    </div>
  );
}

export default OfferListBlock;
