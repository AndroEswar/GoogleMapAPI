import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ViewRoute from './components/ViewRoute';

import styles from './App.module.scss';
import Header from './components/Header';

function App() {
  const ROUTE_DETAILS = "routeDetails";
  const [routeDetails, setRouteDetails] = useState([]);

  useEffect(() => {
    const getRouteDetails = JSON.parse(localStorage.getItem(ROUTE_DETAILS)) || [];
    setRouteDetails(getRouteDetails);
  }, [])

  useEffect(() => {
    if (routeDetails.length) {
      localStorage.setItem(ROUTE_DETAILS, JSON.stringify(routeDetails));
    }
  }, [routeDetails]);

  const addRouteHandler = (route) => {
    setRouteDetails([
      ...routeDetails,
      { id: Math.floor(Math.random() * 1000), ...route },
    ]);
  };

  const editRouteHandler = (route) => {
    const updatedRoute = routeDetails.filter((el) => el.id !== route.id);
    setRouteDetails([...updatedRoute, route]);
  };

  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              routeDetails={routeDetails}
              editRouteHandler={editRouteHandler}
              addRouteHandler={addRouteHandler}
            />
          }
        />
        <Route
          path="route/:routeId"
          element={
            <ViewRoute
              routeDetails={routeDetails}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
