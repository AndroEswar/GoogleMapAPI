import React from 'react';
import { Link } from 'react-router-dom';

import styles from './RouteDetails.module.scss';

const RouteDetails = ({ routeDetails = [], addRoute, editRoute }) => {

  const onEdit = (e, route) => {
    e.preventDefault();
    editRoute(route);
  }

  const onView = (e, route) => {
    e.preventDefault();

  }

  const handleAddRoutes = () => {
    addRoute()
  }

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.infoWrapper}>
            <span>
              Routes
            </span>
            <button onClick={handleAddRoutes}>Add Route</button>
          </div>
        </div>
        <div className={styles.detailsContainer}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Route ID</th>
                <th>Route Name</th>
                <th>Direction</th>
                <th>Status</th>
                <th>Start Stop</th>
                <th>End Stop</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {routeDetails?.map(route => {
                return (
                  <tr>
                    <td>{route.route_id}</td>
                    <td>{route.name}</td>
                    <td>{route.direction}</td>
                    <td>{route.status}</td>
                    <td>{route.stops[0].label}</td>
                    <td>{route.stops[route.stops.length - 1].label}</td>
                    <td style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                      <button onClick={(e) => onEdit(e, route)}>Edit</button>
                      <Link to={`/route/${route.id}`}>
                        <div>View</div>
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
};

export default RouteDetails;