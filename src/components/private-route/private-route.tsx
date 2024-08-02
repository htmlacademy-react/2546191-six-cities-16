import { Navigate } from 'react-router-dom';
import { AppRouter, AuthorizationStatus } from '../../shared/constants';

type PrivateRoute = {
    authorizationStatus: AuthorizationStatus;
    children: JSX.Element;
  }


function PrivateRoute({authorizationStatus,children}:PrivateRoute) :JSX.Element{
  const isLoginUser = true;
  //[todo] добавить useLocation();

  if (isLoginUser && authorizationStatus === AuthorizationStatus.NoAuth) {
    return <Navigate to = {AppRouter.Main}/>;
  }

  if (!isLoginUser && authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to = {AppRouter.Login}/>;
  }

  return children;
}

export default PrivateRoute;
