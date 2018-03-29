import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { dataServices } from '../../service/dataService';

class AddCommentForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: ''
        };
    }
  
    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = (event, props) => {
      dataServices.addComment({
          body : this.state.value,
        postId : this.props.postId
        })
        .then((result) => {
          this.setState({
            value: ''
          })
          this.props.invalidate()
        })
    }
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
        <Form.Field>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </Form.Field>
          <Button type="submit" value="Submit" disabled={this.state.value?'':"disabled"}>SEND</Button>
        </Form>
      );
    }
  }

  export default AddCommentForm;