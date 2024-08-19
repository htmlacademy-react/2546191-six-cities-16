import { Link } from 'react-router-dom';
import { AppRouter } from '../../shared/constants';
import { OfferPreview } from '../../types/offerPreview';
import { upFirstSign } from '../../utils/utils';
import OfferBookMarkBlock from '../offer-bookmark-block/offer-bookmark-block';
import PremiumBlock from '../premium-block/premium-block';
import { getFavoritesOffers, getOffersGroupByCity } from './utils';
import OfferRatingBlock from '../offer-rating-block/offer-rating-block';


type FavoritesListBlockProps = {
  offers : OfferPreview[];
}


function FavoritesListBlock ({offers}:FavoritesListBlockProps) :JSX.Element{
  const favoritesOffers: OfferPreview[] = getFavoritesOffers(offers);
  const favoritesOffersByCity = getOffersGroupByCity(favoritesOffers);


  const isEmpty:boolean = favoritesOffers.length === 0;
  return(
    <div className="page__favorites-container container">
      {
        isEmpty ? (
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        ) : (
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoritesOffersByCity).map(([city,favoritesByCity])=>(
                <li className="favorites__locations-items" key ={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to={AppRouter.Main}>
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {(favoritesByCity instanceof Array) && favoritesByCity.map((offer)=>(
                      <article className="favorites__card place-card" key={offer.id}>
                        {offer.isPremium && <PremiumBlock className='place-card__mark' />}
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <a href="#">
                            <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image" />
                          </a>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">&euro;{offer.price}</b>
                              <span className="place-card__price-text">&#47;&nbsp;night</span>
                            </div>
                            <OfferBookMarkBlock buttonClassName='place-card__bookmark-button' svgClassName='place-card__bookmark-icon' isFavorite={offer.isFavorite} width={18} height={19} />
                          </div>
                          {<OfferRatingBlock rating={offer.rating} className='place-card' />}
                          <h2 className="place-card__name">
                            <a href="#">{offer.title}</a>
                          </h2>
                          <p className="place-card__type">{upFirstSign(offer.type)}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )
      }
    </div>
  );
}

export default FavoritesListBlock;
