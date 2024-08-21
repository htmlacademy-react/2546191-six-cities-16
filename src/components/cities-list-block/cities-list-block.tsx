import { City } from '../../types/city';

type CityesListProps = {
    cities:City[];
    children:(data:City)=>React.ReactNode;
}

function CityesListBlock ({cities,children}:CityesListProps) :JSX.Element{
  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities && cities.map((i) => children(i))}
      </ul>
    </section>
  );
}

export default CityesListBlock;


