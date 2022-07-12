import React, { useEffect, useState } from 'react';

import styles from './ViewRoute.module.scss';

const MapInfo = ({ selectedRoute }) => {
  const [route, setRoute] = useState({})

  useEffect(() => {
    if (selectedRoute[0]?.id) {
      console.log({ selectedRoute })
      setRoute(selectedRoute[0])
    }
  }, [selectedRoute])

  const stops = route?.stops?.map((stop) => (
    <span>
      {stop.label + ', '}
    </span>
  ));

  if (!route?.id) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.infoContainer}>
      <div className={styles.fields}>
        <span>Route Name: </span>
        <span>{route?.name}</span>
      </div>
      <div className={styles.fields}>
        <span>Route ID: </span>
        <span>{route?.route_id}</span>
      </div>
      <div className={styles.fields}>
        <span>Route Status: </span>
        <span>{route?.status}</span>
      </div>
      <div className={styles.fields}>
        <span>Route Start: </span>
        <span>{route?.stops?.length ? route?.stops?.[0].label : ''}</span>
      </div>
      <div className={styles.fields}>
        <span>Route Destiny: </span>
        <span>{route?.stops?.length ? route?.stops[ route?.stops?.length - 1 ].label : ''}</span>
      </div>
      <div className={styles.fields}>
        <span>Stops: </span>
        <span>{stops}</span>
      </div>
    </div>
  )
}

export default MapInfo;