import React, { useEffect, useRef, createRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { helloWorld, getLocations } from '@/api';

const MapboxExample = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [markerRefs, setMarkerRefs] = React.useState([]);
  const [locations, setLocations] = React.useState([]);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia3dhbnJhYzIiLCJhIjoiY2x4Zzd2aWs3MHpyejJrcG9zdjVuN3Y0ayJ9.NpYBe00KtZ6Q00KmLqgm3A';
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-79.4258, 43.6335],
      zoom: 12.15
    });

    getLocations().then((res) => {
      setLocations(res);
      res.map((loc, i) => {
        const ref = createRef();
        const marker =new mapboxgl.Marker(ref)
        .setLngLat([loc.lng, loc.lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(loc.address))
        .addTo(mapRef.current);
        marker.getElement().addEventListener('click', () => {
          console.log(`Marker ${i + 1} clicked`);
          helloWorld().then((data) => console.log(data));
        });

        setMarkerRefs((markerRefs) => [...markerRefs, ref]);
      });
    });

    return () => mapRef.current.remove();
  }, []);

  return <>
    {
      locations.map((location, i) => {
        if (!location || !markerRefs[i]?.current) return;
        return <div ref={markerRefs[i]} key={i} />
      })
    }
    <div ref={mapContainerRef} style={{ height: '100%' }} />;
  </>
};

export default MapboxExample;