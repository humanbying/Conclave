import React, { Component } from 'react';
// import { Button } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Conclave</h1>
        <EventDashboard />
      </div>
    );
  }
}

export default App;
