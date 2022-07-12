import React, { useEffect, useState } from 'react';
import Route from '../Route';

import styles from './LandingPage.module.scss';

const LandingPage = ({
  routeDetails,
  editRouteHandler,
  addRouteHandler
}) => {

  return (
    <section className={styles.landingPageContainer}>
      <div className={styles.wrapper}>
        <Route
          routeDetails={routeDetails}
          editRouteHandler={editRouteHandler}
          addRouteHandler={addRouteHandler}
        />
      </div>
    </section>
  )
};

export default LandingPage;