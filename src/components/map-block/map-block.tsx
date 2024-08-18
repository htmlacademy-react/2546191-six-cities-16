import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PinActive from './assets/pin-active.svg';
import Pin from './assets/pin.svg';
import { OfferPreview } from '../../types/offerPreview';
import { City } from '../../types/city';
import useMap from './helpers/use-map';
import clsx from 'clsx';

type MapBlockProps = {
    extraClassName?: string;
    city: City;
    points: OfferPreview[];
    selectedPoint: OfferPreview | null;
  };


function MapBlock({extraClassName,city,points,selectedPoint}: MapBlockProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({city, mapRef});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: Pin,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: PinActive,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: (point.id === selectedPoint?.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);


  return <section className={clsx(extraClassName,'map')} ref={mapRef} />;
}

export default MapBlock;
