import clsx from 'clsx';
import { useAppDispatch } from '../../store/hook/useAppDispatch';
import { setCurrentCity } from '../../store/offers/offers-slice';


type CityBlockProps = {
  name:string;
  isEqual:boolean;
}

function CitiesBlock ({name,isEqual}:CityBlockProps) :JSX.Element{
  const dispatch = useAppDispatch();

  function onCityClickHandler(evt: React.MouseEvent<HTMLElement>, cityName: string): void {
    evt.preventDefault();
    dispatch(setCurrentCity(cityName));
  }
  return(
    <li className="locations__item">
      <a
        className={clsx('locations__item-link tabs__item',isEqual && 'tabs__item--active')}
        href="#"
        onClick={(evt) => onCityClickHandler(evt,name)}
      >
        <span>{name}</span>
      </a>
    </li>
  );
}

export default CitiesBlock;

