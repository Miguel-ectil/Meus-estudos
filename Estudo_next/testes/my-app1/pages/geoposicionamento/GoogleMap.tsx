import { useEffect, useRef, useState } from 'react';


const GoogleMap = ({ latitude, longitude }) => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
  
    useEffect(() => {
      if (mapRef.current && !map && window.google) { // <-- adicione uma verificação para garantir que o google esteja definido
        const newMap = new window.google.maps.Map(mapRef.current, {
          center: { lat: latitude, lng: longitude },
          zoom: 15,
        });
        setMap(newMap);
      }
    }, [latitude, longitude, map]);
  
    useEffect(() => {
      if (map && !marker && window.google) { // <-- adicione uma verificação para garantir que o google esteja definido
        const newMarker = new window.google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map,
        });
        setMarker(newMarker);
      }
    }, [latitude, longitude, map, marker]);
  
    return (
      <div style={{ height: '400px' }} ref={mapRef}>
        Carregando mapa...
      </div>
    );
  };
  
  export default GoogleMap;
  
