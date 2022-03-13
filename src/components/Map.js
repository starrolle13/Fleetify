import React from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Contact from './Contact';

export default function Map() {
  const render = (status: Status): ReactElement => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };
  const center = { lat: 41.44417, lng: -90.15196 };
  const zoom = 12;
  const mapId = 'fbe3afe67839325';
  const mapTypeId = 'hybrid';

  return (
    <div className="mapBox">
      <Wrapper apiKey={process.env.REACT_APP_API_KEY} render={render}>
        <Contact
          center={center}
          zoom={zoom}
          mapId={mapId}
          mapTypeId={mapTypeId}
        />
      </Wrapper>
    </div>
  );
}
