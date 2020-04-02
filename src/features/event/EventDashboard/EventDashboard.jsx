import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class EventDashboard extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={10}>
                        <h2>Left Column</h2>
                        <li>bread</li>
                        <li>bread</li>
                        <li>bread</li>
                        <li>bread</li>
                        <li>bread</li>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <h2>Right Column</h2>
                        <li>dough</li>
                        <li>dough</li>
                        <li>dough</li>
                        <li>dough</li>
                        <li>dough</li>
                        <li>dough</li>
                        <li>dough</li>
                        <li>dough</li>
                        <li>dough</li>
                        <li>dough</li>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
export default EventDashboard