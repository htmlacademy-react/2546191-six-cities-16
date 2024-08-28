import { AuthorizationStatus } from '../shared/constants';
import { useAppSelector } from '../store/hook/useAppSelector';


export const useAuth = () => {
  const status = useAppSelector((state) => state.user.status);
  return status === AuthorizationStatus.Auth;
};
