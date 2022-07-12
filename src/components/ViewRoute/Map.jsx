import React, { useRef, memo, useEffect } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const center = {
  lat: 23.5120,
  lng: 80.3290
};

const Map = ({ selectedRoute }) => {
  const stops = selectedRoute[0]?.stops;
  console.log({ stops, selectedRoute });

  const render = (status) => {
    console.log({ status })
    if (status === Status.FAILURE) return <div>Something went wrong</div>;
    return <div>Loading...</div>;
  };

  return (
    <Wrapper apiKey={"AIzaSyCsYeUOMZc46HlZhnnhdTue-sXBd007_qk"} render={render}>
      <MyMapComponent center={center} zoom={5} stops={stops} />
    </Wrapper>
  )
}

function MyMapComponent({
  center,
  zoom,
  children,
  stops,
  ...options
}) {
  const ref = useRef();

  useEffect(() => {

    let coords = [];
    let waypoints = [];

    stops?.map((place) => coords.push({ lat: place.lat, lng: place.lng }));
    console.log({ coords });

    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    const directionsService = new window.google.maps.DirectionsService();
    console.log({ directionsRenderer, directionsService })

    const mapCenter = new window.google.maps.LatLng(23.5120, 80.3290);
    const map = new window.google.maps.Map(ref.current, {
      zoom: 5,
      center: mapCenter,
      disableDefaultUI: true,
    });
  
    directionsRenderer.setMap(map);

    let start = { lat: coords[0].lat, lng: coords[0].lng };
    let end = {
      lat: coords[coords.length - 1].lat,
      lng: coords[coords.length - 1].lng,
    };
    for (let i = 1; i < coords.length - 1; i++) {
      waypoints.push({
        location: { lat: coords[i].lat, lng: coords[i].lng },
        stopover: true,
      });
    }
    let request = {
      origin: start,
      waypoints: waypoints,
      destination: end,
      travelMode: "DRIVING",
    };
    directionsService.route(request, function (result, status) {
      if (status == "OK") {
        directionsRenderer.setDirections(result);
      }
    });
  });

  return (
    <>
      <div
        ref={ref}
        id="map"
        style={{height: '80vh', width: '50vw', margin: 'auto'}}
      />
    </>
  );
}

export default memo(Map);