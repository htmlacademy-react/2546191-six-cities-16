import { CitiesName } from '../shared/constants';
import { City } from '../types/city';

export const CITIES:City[] = [{
  name: CitiesName.Paris,
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
},
{
  name: CitiesName.Dusseldorf,
  location: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  }
},
{
  name: CitiesName.Cologne,
  location: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13
  }
},
{
  name: CitiesName.Brussels,
  location: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13
  }
},
{
  name: CitiesName.Amsterdam,
  location: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  }
},
{
  name: CitiesName.Hamburg,
  location: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13
  }
}
];
