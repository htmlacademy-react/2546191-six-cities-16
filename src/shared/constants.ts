export enum CitiesName {
    Paris = 'Paris',
    Cologne = 'Cologne',
    Brussels = 'Brussels',
    Amsterdam = 'Amsterdam',
    Hamburg = 'Hamburg',
    Dusseldorf = 'Dusseldorf'
}

export enum AppRouter {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer',
    OfferId = '/offer/:offerId',
    NotFound = '*'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN'
}

export const RATING = [
  {value:5, title:'perfect'},
  {value:4, title:'good'},
  {value:3, title:'not bad'},
  {value:2, title:'badly'},
  {value:1, title:'terribly'}
];
