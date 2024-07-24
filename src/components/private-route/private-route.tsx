import { Navigate } from 'react-router-dom';
import { AppRouter, AuthorizationStatus } from '../../shared/constants';

type PrivateRoute = {
    authorizationStatus: AuthorizationStatus;
    children: JSX.Element;
  }


function PrivateRoute({authorizationStatus,children}:PrivateRoute) :JSX.Element{
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to = {AppRouter.Login}/>
  );
}

export default PrivateRoute;
