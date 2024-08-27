import ErrorNotFound from '../pages/errornotfound-screen/errornotfound-screen';
import FavoritesScreen from '../pages/favorite-screen/favorites_screen';
import LoginScreen from '../pages/login-screen/login-screen';
import MainScreen from '../pages/main-screen/main-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import {Route, Routes} from 'react-router-dom';
import {AppRouter, AuthorizationStatus, RequestStatus} from '../shared/constants';
import PrivateRoute from '../components/private-route/private-route';
import { OfferPreview } from '../types/offerPreview';
import { City } from '../types/city';
import Layout from '../components/layout-block/layout-block';
import { getNearOfferList } from '../utils/utils';
import { useAppSelector } from '../store/hook/useAppSelector';
import { useAppDispatch } from '../store/hook/useAppDispatch';
import { useEffect } from 'react';
import { fetchOffersAction } from '../store/offers/offers-thunk';
import LoadingBlock from '../components/loading-block/loading-block';
import { checkAuth } from '../store/user/user-thunk';
import { getToken } from '../shared/token';


type AppScreanProps = {
  cities : City[];
}

function App({cities}:AppScreanProps) : JSX.Element{
  const dispatch = useAppDispatch();
  const token = getToken();
  useEffect(()=>{
    dispatch(fetchOffersAction());
    if (token){
      dispatch(checkAuth());
    }
  },[token]);

  const isLoading:RequestStatus = useAppSelector<RequestStatus>((state) => state.offers.requestStatus);
  const offers: OfferPreview[] = useAppSelector<OfferPreview[]>((state) => state.offers.offers);
  const nearOffers:OfferPreview[] = getNearOfferList(offers);

  if (isLoading === RequestStatus.Loading) {
    return (
      <LoadingBlock />
    );
  }

  return (
    <Routes>
      <Route path={AppRouter.Main} element={<Layout />}>
        <Route index element ={<MainScreen offers={offers} cities={cities} />}/>
        <Route path={AppRouter.Login} element ={<LoginScreen/> }/>
        <Route path={AppRouter.Favorites} element ={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesScreen offers={offers}/></PrivateRoute>}/>
        <Route path={AppRouter.Offer} element ={<OfferScreen city={cities[0]} nearOffers={nearOffers} />}/>
        <Route path={AppRouter.OfferId} element ={<OfferScreen city={cities[0]} nearOffers={nearOffers} />}/>
        <Route path={AppRouter.NotFound} element ={<ErrorNotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
