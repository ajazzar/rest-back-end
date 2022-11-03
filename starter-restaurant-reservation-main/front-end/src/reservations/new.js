import React, { useEffect, useState } from "react";
import { listReservations } from "../utils/api";

function ReservationForm() {
  const initialActiveState = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "yyyy-MM-dd",
    reservation_time: "HH:mm:ss",
    people: 0,
  };
  const [formData, setFormData] = useState({ ...initialActiveState });
  const [reservationsError, setReservationsError] = useState(null);
  const [reservations, setReservations] = useState([]);
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/reservations`, {
      method: "POST",
      body: JSON.stringify(initialActiveState),
    });
    const savedData = await response.json();
    console.log("Saved user!", savedData);
  };
  useEffect(loadDashboard, []);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations(abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first_name">
        Enter Your First Name:
        <input
          id="first_name"
          type="text"
          name="first_name"
          onChange={handleChange}
          value={formData.first_name}
        />
      </label>
      <br />
      <label htmlFor="last_name">
        Enter Your Last Name:
        <input
          id="last_name"
          type="text"
          name="last_name"
          onChange={handleChange}
          value={formData.last_name}
        />
      </label>
      <br />
      <br />
      <label htmlFor="mobile_number">
        Enter Your Mobile Number:
        <input
          id="mobile_number"
          type="text"
          name="mobile_number"
          onChange={handleChange}
          value={formData.mobile_number}
        />
      </label>
      <br />
      <label htmlFor="reservation_date">
        Enter Your Reservation Date:
        <input
          id="reservation_date"
          type="date"
          name="reservation_date"
          onChange={handleChange}
          value={formData.reservation_date}
        />
      </label>
      <br />
      <label htmlFor="reservation_time">
        Enter Your Reservation Time:
        <input
          id="reservation_time"
          type="time"
          name="reservation_time"
          onChange={handleChange}
          value={formData.reservation_time}
        />
      </label>
      <br />
      <label htmlFor="people">
        Enter Number of People:
        <input
          id="people"
          type="number"
          name="people"
          onChange={handleChange}
          value={formData.people}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default ReservationForm;
