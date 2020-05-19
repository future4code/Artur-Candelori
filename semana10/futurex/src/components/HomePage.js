import React from 'react';
import { useHistory } from "react-router-dom";


function HomePage() {
  const history = useHistory();

  const goToApplicationForm = () => {
    history.push(`/application-form`)
  }
  const goToLoginPage = () => {
    history.push(`/login`)
  }
  const goToCreateListPage = () => {
    history.push(`/trips/create`)
  }
  const goToListTripsPage = () => {
    history.push(`/trips/list`)
  }
  const goToTripDetailsPage = () => {
    history.push(`/trips/details`)
  }

  return (
    <div className="HomePage">
      HomePage
      <button onClick={goToApplicationForm}>ApplicationForm</button>
      <button onClick={goToLoginPage}>LoginPage</button>
      <button onClick={goToCreateListPage}>CreateListPage</button>
      <button onClick={goToListTripsPage}>ListTripsPage</button>
      <button onClick={goToTripDetailsPage}>TripDetailsPage</button>
    </div>
  );
}

export default HomePage;