import { Fragment, useState } from 'react';
import OfferGallaryBlock from '../../components/offer-gallary-block/offer-gallary-block';
import OfferInsideListBlock from '../../components/offer-inside-list-block/offer-inside-list-block';
import PremiumBlock from '../../components/premium-block/premium-block';
import OfferBookMarkBlock from '../../components/offer-bookmark-block/offer-bookmark-block';
import { useParams } from 'react-router-dom';
import { LISTDETAILOFFERS } from '../../mocks/detail_offer_data';
import { Offer } from '../../types/offer';
import HostBlock from '../../components/host-block/host-block';
import OfferRatingBlock from '../../components/offer-rating-block/offer-rating-block';
import OfferReviewBlock from '../../components/offer-review-block/offer-review-block';
import { Review } from '../../types/review';
import { REVIEWS } from '../../mocks/reviews_data';
import { getOfferReviews } from './utils';
import OfferListBlock from '../../components/offers-list-block/offers-list-block';
import PlaceCard from '../../components/place-card/place-card';
import { OfferPreview } from '../../types/offerPreview';
import MapBlock from '../../components/map-block/map-block';
import { City } from '../../types/city';
import { upFirstSign } from '../../utils/utils';

type OfferScreenProps = {
  city: City;
  nearOffers:OfferPreview[];
}

function OfferScreen({city, nearOffers}:OfferScreenProps) :JSX.Element{
  const [selectedPoint, setSelectedPoint] = useState<OfferPreview|null> (null);
  const params = useParams();
  let offerId: string;

  if (Object.keys(params).length === 0) {
    offerId = '';
  } else {
    offerId = params.offerId as string;
  }

  const offer = LISTDETAILOFFERS.find((item)=> item.id === offerId) as Offer;
  const currentOffer = {...offer, ...LISTDETAILOFFERS} as Offer;
  const reviews:Review[] = getOfferReviews(REVIEWS,offerId);
  return (
    <Fragment>
      <section className="offer">
        {currentOffer.images && <OfferGallaryBlock images={currentOffer.images} />}
        <div className="offer__container container">
          <div className="offer__wrapper">
            { currentOffer.isPremium && <PremiumBlock className='offer__mark'/>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {currentOffer.title}
              </h1>
              <OfferBookMarkBlock buttonClassName='offer__bookmark-button' svgClassName='offer__bookmark-icon' isFavorite= {currentOffer.isFavorite} width={31} height={33}/>
            </div>
            {<OfferRatingBlock rating = {currentOffer.rating} className='offer' />}
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {upFirstSign(currentOffer.type)}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {currentOffer.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                {currentOffer.maxAdults}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{currentOffer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            {currentOffer.goods && <OfferInsideListBlock goods={currentOffer.goods}/>}
            {<HostBlock host={currentOffer.host} description={currentOffer.description} />}
            <OfferReviewBlock reviews={reviews} />
          </div>
        </div>
        <div className="offer__container container">
          <MapBlock city = {city} points={nearOffers} selectedPoint={selectedPoint} extraClassName='offer__map'/>
        </div>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          {
            <OfferListBlock offers={nearOffers} extraClassName='near-places__list'>
              {(placeCard)=>(<PlaceCard offer={placeCard} key={placeCard.id} onCardHover={setSelectedPoint}/>)}
            </OfferListBlock>
          }
        </section>
      </div>
    </Fragment>
  );
}

export default OfferScreen;
