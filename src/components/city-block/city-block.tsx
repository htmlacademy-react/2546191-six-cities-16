import { City } from '../../types/city';


type CityBlockProps = Omit<City, 'location'>;

function CitiesBlock ({name}:CityBlockProps) :JSX.Element{
  return(
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{name}</span>
      </a>
    </li>
  );
}

export default CitiesBlock;
