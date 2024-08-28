import clsx from 'clsx';
import { useAppDispatch } from '../../store/hook/useAppDispatch';
import { setCurrentCity } from '../../store/offers/offers-slice';
import { City } from '../../types/city';


type CityBlockProps = {
  city:City;
  isEqual:boolean;
}

function CitiesBlock ({city,isEqual}:CityBlockProps) :JSX.Element{
  const dispatch = useAppDispatch();

  function onCityClickHandler(evt: React.MouseEvent<HTMLElement>, selectedCity: City): void {
    evt.preventDefault();
    dispatch(setCurrentCity(selectedCity));
  }
  return(
    <li className="locations__item">
      <a
        className={clsx('locations__item-link tabs__item',isEqual && 'tabs__item--active')}
        href="#"
        onClick={(evt) => onCityClickHandler(evt,city)}
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}

export default CitiesBlock;

