import React, { useState } from 'react';
import Select from "react-select";
import { data } from '../../data/routes';

import styles from './RouteForm.module.scss';

const RouteForm = ({
  isEdit = false,
  editRouteHandler,
  addRouteHandler,
  routeDetailsForEdit = undefined
}) => {
  const initialState = {
    name: "",
    direction: "",
    route_id: "",
    status: "",
    stops: []
  }
  const [routeDetails, setRouteDetails] = useState(routeDetailsForEdit || initialState);
  const [routeStops] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      editRouteHandler(routeDetails);
    } else {
      addRouteHandler(routeDetails);
    }
    setRouteDetails(initialState);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRouteDetails({ ...routeDetails, [name]: value });
  };

  const setSelectedOption = (val) => {
    setRouteDetails({ ...routeDetails, stops: val });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formElement}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={routeDetails.name}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.formElement}>
        <label htmlFor="direction" className={styles.label}>
          Direction
        </label>
        <div>
          <select
            name="direction"
            onChange={handleChange}
            required
            defaultValue={routeDetails.direction}
            className={styles.selectDropDown}
          >
            <option value="" disabled hidden>
              Select
            </option>
            <option value="Up">UP</option>
            <option value="Down">DOWN</option>
          </select>
        </div>
      </div>
      <div className={styles.formElement}>
        <label htmlFor="route_id" className={styles.label}>
          Route ID
        </label>
        <input
          type="number"
          name="route_id"
          id="route_id"
          required
          value={routeDetails.route_id}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.formElement}>
        <label htmlFor="status" className={styles.label}>
          Status
        </label>
        <div>
          <select
            name="status"
            onChange={handleChange}
            required
            defaultValue={routeDetails.status}
            className={styles.selectDropDown}
          >
            <option value="" disabled hidden>
              Select
            </option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>
      <div className={styles.formElement}>
        <label htmlFor="stops" className={styles.label}>
          Select Stops
        </label>
        <div>
        <Select
          isMulti
          required
          name="stops"
          placeholder="Select"
          value={routeDetails.stops}
          onChange={setSelectedOption}
          options={routeStops}
        />
        </div>
      </div>
      <div className={styles.formElement}>
        <button className={styles.submitCta} onClick={handleSubmit}>
          {isEdit ? "Update Route" : "Add Route"}
        </button>
      </div>
    </form>
  )
};

export default RouteForm;