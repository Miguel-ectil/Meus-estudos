import { useEffect, useRef, useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const Geolocation = ({ google }) => {
  const [location, setLocation] = useState(null);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <button onClick={handleGetLocation}>Obter Localização</button>
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <Map
            google={google}
            style={{ width: "400px", height: "400px" }}
            // zoom={8}
            initialCenter={{
              lat: location.latitude,
              lng: location.longitude
            }}
          />
        </div>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY'
})(Geolocation);
