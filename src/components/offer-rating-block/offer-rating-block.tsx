import { getRatingWidth } from '../../utils/utils';

type OfferRatingBlockProps = {
  rating: number;
}

function OfferRatingBlock ({rating}:OfferRatingBlockProps) :JSX.Element{
  return(
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{width:getRatingWidth(rating)}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">{rating}</span>
    </div>
  );
}

export default OfferRatingBlock;
