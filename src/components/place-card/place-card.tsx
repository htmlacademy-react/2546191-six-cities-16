import { Link } from 'react-router-dom';
import { AppRouter } from '../../shared/constants';
import { OfferPreview } from '../../types/offerPreview';
import PremiumBlock from '../premium-block/premium-block';
import OfferBookMarkBlock from '../offer-bookmark-block/offer-bookmark-block';
import { useState } from 'react';
import { upFirstSign } from '../../utils/utils';
import OfferRatingBlock from '../offer-rating-block/offer-rating-block';


type PlaceCardProps = Omit<OfferPreview, 'location'|'city'>;


function PlaceCard({isPremium,previewImage,price,isFavorite,rating,title,type,id}:PlaceCardProps): JSX.Element {
  const [activeOfferId,setActiveOfferId] = useState('');

  const handleMouseOver = () => {
    setActiveOfferId(id);
    id = activeOfferId;
  };

  return(
    <article className="cities__card place-card">
      { isPremium && <PremiumBlock className='place-card__mark' />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to = {`${AppRouter.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <OfferBookMarkBlock buttonClassName='place-card__bookmark-button' svgClassName='place-card__bookmark-icon' isFavorite={isFavorite} width={18} height={19} />
        </div>
        <OfferRatingBlock rating={rating} className='place-card'/>
        <h2 className="place-card__name" onMouseOver={handleMouseOver}>
          <Link to = {`${AppRouter.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{upFirstSign(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
