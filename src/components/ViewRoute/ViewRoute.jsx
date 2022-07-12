import React from 'react';
import { useParams } from "react-router-dom";

import styles from './ViewRoute.module.scss';
import Map from './Map';
import MapInfo from './MapInfo';

const ViewRoute = ({ routeDetails }) => {
  const params = useParams();
  const routeID = params.routeId;
  const selectedRoute = routeDetails?.filter((data) => {
    return data.id == routeID;
  });

  return (
    <div className={styles.container}>
      <MapInfo selectedRoute={selectedRoute} />
      <Map selectedRoute={selectedRoute} />
    </div>
  )
}

export default ViewRoute;