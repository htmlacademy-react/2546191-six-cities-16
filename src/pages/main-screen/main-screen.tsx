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
import SortingListBlock from '../../components/sorting-list-block/sorting-list-block';
import { SortOption } from '../../shared/constants';

type MainScreenProps = {
  offers:OfferPreview[];
  cities:City[];
}

function MainScreen({offers,cities}:MainScreenProps): JSX.Element{
  const [selectedPoint, setSelectedPoint] = useState<OfferPreview|null> (null);
  const currentCity = useAppSelector((state) => state.offers.currentCity);

  const offersByCity: OfferPreview[] = getOffersByCity(offers,currentCity) || [];
  const countOfOffers = offersByCity.length;
  const isEmpty:boolean = offersByCity.length === 0;
  const [activeSort, setActiveSort] = useState(SortOption.Popular);

  let sortedOffers = offersByCity;

  switch (activeSort) {
    case SortOption.PriceHighToLow:
      sortedOffers = [...offersByCity].sort((a, b) => b.price - a.price);
      break;
    case SortOption.PriceLowToHigh:
      sortedOffers = [...offersByCity].sort((a, b) => a.price - b.price);
      break;
    case SortOption.TopRatedFirst:
      sortedOffers = [...offersByCity].sort((a, b) => b.rating - a.rating);
      break;
  }
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
              <b className="places__found">{countOfOffers} places to stay in {currentCity}</b>
              <SortingListBlock setter={setActiveSort} current={activeSort}/>
              {
                <OfferListBlock offers={sortedOffers} extraClassName='cities__places-list tabs__conten'>
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
