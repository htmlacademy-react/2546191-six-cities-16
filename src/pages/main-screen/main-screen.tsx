import CityBlock from '../../components/city-block/city-block';
import { OfferPreview } from '../../types/offerPreview';
import { City } from '../../types/city';
import { Fragment, useState } from 'react';
import OfferListBlock from '../../components/offers-list-block/offers-list-block';
import MapBlock from '../../components/map-block/map-block';

type MainScreenProps = {
  countOfOffers: number;
  offers:OfferPreview[];
  cities:City[];
}


function MainScreen({countOfOffers,offers,cities}:MainScreenProps): JSX.Element{
  const [selectedPoint, setSelectedPoint] = useState<OfferPreview|null> (null);
  return (
    <Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities && cities.map((i) =><CityBlock name={i.name} key={i.name}/>)}
          </ul>
        </section>
      </div>
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
            {<OfferListBlock offers={offers} onCardHover={setSelectedPoint}/>}
          </section>
          <div className="cities__right-section">
            <MapBlock city = {cities[0]} points={offers} selectedPoint={selectedPoint} extraClassName='cities__map'/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MainScreen;
