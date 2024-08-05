import { Fragment } from 'react';
import OfferGallaryBlock from '../../components/offer-gallary-block/offer-gallary-block';
import OfferInsideListBlock from '../../components/offer-inside-list-block/offer-inside-list-block';
import PremiumBlock from '../../components/premium-block/premium-block';
import OfferBookMarkBlock from '../../components/offer-bookmark-block/offer-bookmark-block';
import { useParams } from 'react-router-dom';
import { LISTDETAILOFFERS } from '../../mocks/detail_offer_data';
import { Offer } from '../../types/offer';
import HostBlock from '../../components/host-block/host-block';
import OfferRatingBlock from '../../components/offer-rating-block/offer-rating-block';
import { upFirstSign } from '../../utils/utils';
import OfferReviewBlock from '../../components/offer-review-block/offer-review-block';
import { Review } from '../../types/review';
import { REVIEWS } from '../../mocks/reviews_data';
import { getOfferReviews } from './utils';


function OfferScreen() :JSX.Element{
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
        <section className="offer__map map"/>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;80</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Wood and stone place</a>
                </h2>
                <p className="place-card__type">Room</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;132</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Canal View Prinsengracht</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;180</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: '100%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default OfferScreen;
