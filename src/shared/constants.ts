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

export const SORT_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] satisfies Record<SortOption, string>;

export const enum SortOption {
	Popular,
	PriceLowToHigh,
	PriceHighToLow,
	TopRatedFirst
}


export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';
export const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;


export enum RequestStatus {
    Loading = 'Loading',
    Success = 'Success',
    Failed = 'Failed',
    Idle = 'Idle'

}


