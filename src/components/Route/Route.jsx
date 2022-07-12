import React, { useEffect, useState } from 'react';
import { ModalBody, ModalContainer, ModalHeader } from '../Modal';
import RouteDetails from '../RouteDetails';
import RouteForm from '../RouteForm';

import styles from './Route.module.scss';

const Route = ({
  routeDetails = [],
  editRouteHandler,
  addRouteHandler
}) => {
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [routeDetailsForEdit, setRouteDetailsForEdit] = useState(undefined);

  useEffect(() => {
    console.log({ routeDetails })
    if (!routeDetails?.length) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [routeDetails]);

  const handleModal = () => {
    setShowModal(false);
  }

  const addRoute = () => {
    setRouteDetailsForEdit(undefined);
    setEdit(false);
    setShowModal(true);
  }

  const editRoute = (route) => {
    setRouteDetailsForEdit(route);
    setEdit(true);
    setShowModal(true);
  }

  const showAddRouteModal = () => {
    return (
      <>
        <ModalContainer isOpen={showModal}>
          <ModalHeader title={edit ? 'Update Route' : 'Add Route'}>
            {routeDetails?.length ? (
              <span onClick={handleModal} className={styles.subtitle}>
                View Routes
              </span>
            ) : null}
          </ModalHeader>
          <ModalBody>
            <RouteForm
              isEdit={edit}
              editRouteHandler={editRouteHandler}
              addRouteHandler={addRouteHandler}
              routeDetailsForEdit={routeDetailsForEdit}
            />
          </ModalBody>
        </ModalContainer>
      </>
    )
  }

  return (
    <div>
      {showAddRouteModal()}
      <RouteDetails
        routeDetails={routeDetails}
        addRoute={addRoute}
        editRoute={editRoute}
      />
    </div>
  )
};

export default Route;