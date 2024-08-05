import FavoritesListBlock from '../../components/favorites-list-block/favorites-list-block';
import { OfferPreview } from '../../types/offerPreview';

type FavoritesScreenProps={
  offers: OfferPreview[];
}

function FavoritesScreen({offers}:FavoritesScreenProps) :JSX.Element{
  return (
    <FavoritesListBlock offers={offers}/>
  );
}

export default FavoritesScreen;
