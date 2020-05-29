import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/home.js';
import NewInterview from './views/newInterview.js';
import EditInterview from './views/editInterview.js';
import NewParticipant from './views/newParticipant.js';
import Participants from './views/participants.js';
import ShowInterview from './views/showInterview.js';

export default function App() {
  return (
    <Router>
    <Switch>
      
      <Route path="/participants">
        <Participants />
      </Route>
      <Route path="/participants/new">
        <NewParticipant />
      </Route>
      <Route path="/interviews/new">
        <NewInterview />
      </Route>
      <Route path="/interviews/:id">
          <ShowInterview />
      </Route>
      <Route path="/interviews/:id/edit">
          <EditInterview />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  );
}