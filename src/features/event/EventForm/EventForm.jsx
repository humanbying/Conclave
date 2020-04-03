import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

class EventForm extends Component {
    state = {
        title: '',
        date:'',
        city:'',
        venue:'',
        hostedBy: ''
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.createEvent(this.state)
    }
    onInputChangeHandler = ({target:{name, value}}) => {
        this.setState({
        [name]: value
        })
    }

    render() {
        const {cancelFormOpen} = this.props;
        const {title, date, city, venue, hostedBy} = this.state;
        return (
            <Segment>
                <Form onSubmit={this.formSubmitHandler} autoComplete='off'>
                    <Form.Field>
                    <label>Event Title</label>
                    <input name='title'
                           value = {title}
                           onChange={this.onInputChangeHandler}
                           placeholder="Event Title" />
                    </Form.Field>
                    <Form.Field>
                    <label>Event Date</label>
                    <input name='date'
                           value = {date}
                           onChange={this.onInputChangeHandler}
                           type="date" 
                           placeholder="Event Date" />
                    </Form.Field>
                    <Form.Field>
                    <label>City</label>
                    <input name='city'
                           value = {city}
                           onChange={this.onInputChangeHandler}
                           placeholder="City event is taking place" />
                    </Form.Field>
                    <Form.Field>
                    <label>Venue</label>
                    <input name='venue'
                           value = {venue}
                           onChange={this.onInputChangeHandler}
                           placeholder="Enter the Venue of the event" />
                    </Form.Field>
                    <Form.Field>
                    <label>Hosted By</label>
                    <input name='hostedBy'
                           value = {hostedBy}
                           onChange={this.onInputChangeHandler}
                           placeholder="Enter the name of person hosting" />
                    </Form.Field>
                    <Button positive type="submit">
                    Submit
                    </Button>
                    <Button onClick = {cancelFormOpen} type="button">Cancel</Button>
                </Form>
            </Segment>
        )
    }
}

export default EventForm