import { OfferPreview } from '../../types/offerPreview';
import { City } from '../../types/city';
import { Fragment, useState } from 'react';
import OfferListBlock from '../../components/offers-list-block/offers-list-block';
import MapBlock from '../../components/map-block/map-block';
import PlaceCard from '../../components/place-card/place-card';
import { useAppSelector } from '../../store/hook/useAppSelector';
import { getOffersByCity } from './utils';
import MainEmptyBlock from '../../components/main-empty-block/main-empty-block';
import CitiesBlock from '../../components/city-block/city-block';
import CityesListBlock from '../../components/cities-list-block/cities-list-block';

type MainScreenProps = {
  countOfOffers: number;
  offers:OfferPreview[];
  cities:City[];
}

function MainScreen({countOfOffers,offers,cities}:MainScreenProps): JSX.Element{
  const [selectedPoint, setSelectedPoint] = useState<OfferPreview|null> (null);
  const currentCity = useAppSelector((state) => state.OFFERS_SLICE_NAME.offers.currentCity);
  const offersByCity: OfferPreview[] = getOffersByCity(offers,currentCity);
  const isEmpty:boolean = offersByCity.length === 0;
  return (
    <Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <CityesListBlock cities={cities}>
        {(city)=>(<CitiesBlock name={city.name} isEqual={city.name === currentCity} key={city.name}/>)}
      </CityesListBlock>
      {isEmpty ? (
        <MainEmptyBlock/>
      ) : (
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{countOfOffers} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                            Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              {
                <OfferListBlock offers={offersByCity} extraClassName='cities__places-list tabs__conten'>
                  {(placeCard)=>(<PlaceCard offer={placeCard} key={placeCard.id} onCardHover={setSelectedPoint} />)}
                </OfferListBlock>
              }
            </section>
            <div className="cities__right-section">
              <MapBlock city = {cities[0]} points={offers} selectedPoint={selectedPoint} extraClassName='cities__map'/>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default MainScreen;
