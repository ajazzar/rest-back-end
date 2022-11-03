import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import ReservationForm from "./reservations/new";
/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
      <Switch>
        <Route path="/reservations/new">
          <ReservationForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
