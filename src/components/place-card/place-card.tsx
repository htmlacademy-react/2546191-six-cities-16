import { Link } from 'react-router-dom';
import { AppRouter } from '../../shared/constants';
import PremiumBlock from '../premium-block/premium-block';
import OfferBookMarkBlock from '../offer-bookmark-block/offer-bookmark-block';
import { upFirstSign } from '../../utils/utils';
import OfferRatingBlock from '../offer-rating-block/offer-rating-block';
import { OfferPreview } from '../../types/offerPreview';


type PlaceCardProps = {
  offer:OfferPreview;
  onCardHover:(offer:OfferPreview|null) => void;
};


function PlaceCard({offer,onCardHover}:PlaceCardProps): JSX.Element {

  const handleListItemHover = () => {
    if (onCardHover) {
      onCardHover(offer);
    }
  };

  const handleListItemBlur = ()=> {
    if (onCardHover) {
      onCardHover(null);
    }
  };

  return(
    <article className="cities__card place-card"
      onMouseOver={handleListItemHover}
      onMouseLeave={handleListItemBlur}
    >
      { offer.isPremium && <PremiumBlock className='place-card__mark' />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to = {`${AppRouter.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <OfferBookMarkBlock buttonClassName='place-card__bookmark-button' svgClassName='place-card__bookmark-icon' isFavorite={offer.isFavorite} width={18} height={19} />
        </div>
        <OfferRatingBlock rating={offer.rating} className='place-card'/>
        <h2 className="place-card__name">
          <Link to = {`${AppRouter.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{upFirstSign(offer.type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
