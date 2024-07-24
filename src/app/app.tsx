import ErrorNotFound from '../pages/errornotfound-screen/errornotfound-screen';
import FavoritesScreen from '../pages/favorite-screen/favorites_screen';
import LoginScreen from '../pages/login-screen/login-screen';
import MainScreen from '../pages/main-screen/main-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import {Route, Routes} from 'react-router-dom';
import {AppRouter, AuthorizationStatus } from '../shared/constants';
import PrivateRoute from '../components/private-route/private-route';
import { OFFERS } from '../mocks/offers_data';
import { CITIES } from '../mocks/city_data';


type AppScreanProps = {
  countOffers : number;
}

function App({countOffers}:AppScreanProps) : JSX.Element{
  return (
    <Routes>
      <Route path={AppRouter.Main} element ={<MainScreen countOfOffers = {countOffers} offers={OFFERS} cities={CITIES} />}/>
      <Route path={AppRouter.Login} element ={<LoginScreen/> }/>
      <Route path={AppRouter.Favorites} element ={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesScreen/></PrivateRoute>}/>
      <Route path={AppRouter.Offer} element ={<OfferScreen/>}>
        <Route path=':id' />
      </Route>
      <Route path={AppRouter.NotFound} element ={<ErrorNotFound/>}/>
    </Routes>
  );
}

export default App;
