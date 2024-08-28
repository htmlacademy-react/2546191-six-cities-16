import { AuthorizationStatus, RequestStatus } from '../../shared/constants';
import { User } from '../../types/user';

export type UserState = {
    info:User|null;
    status: AuthorizationStatus;
    requestStatus:RequestStatus;
}
