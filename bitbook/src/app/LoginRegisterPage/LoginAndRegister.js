import React from 'react';
import { Tab, Container, Grid, Segment, Form, Button } from 'semantic-ui-react';
import {authService} from '../../service/authenticationService';



class LoginAndRegister extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputEmail: '',
            inputPassword: ''
        }
    }

    handlerLogin = (event) =>{
       let user = {
           'username': this.state.inputEmail,
           'password': this.state.inputPassword
       }
       authService.userLogin(user)
       
    }

    emailChange = (event) => {
        this.setState({
            inputEmail: event.target.value
        })
    }

    passwordChange = (event) => {
        this.setState({
            inputPassword: event.target.value
        })
    }

    login = () => {
        return (
            <Form>
                <Form.Field>
                    <label>email</label>
                    <input type='email' onChange={this.emailChange} placeholder='Email Address' />
                </Form.Field>
                <Form.Field>
                    <label>pass</label>
                    <input type='password' onChange={this.passwordChange} placeholder='Password' />
                </Form.Field>
                <Button onClick={this.handlerLogin}>Login</Button>
            </Form>
        )
    }

    register = () => {
        return (
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input type='name' placeholder='Full Name' />
                </Form.Field>
                <Form.Field>
                    <label>email</label>
                    <input type='email' placeholder='Email Address' />
                </Form.Field>
                <Form.Field>
                    <label>pass</label>
                    <input type='password' placeholder='Min 6 characters' />
                </Form.Field>
                <Button type='submit'>Register</Button>
            </Form>
        )
    }

    render() {
        return (
            <Container>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Segment id='login'>
                            <p>WELCOME TO BITBOOK</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Segment id='login'>
                            <Tab panes={[{ menuItem: 'Login', render: () => <Tab.Pane attached={false}>{this.login()}</Tab.Pane> },
                            { menuItem: 'Register', render: () => <Tab.Pane attached={false}>{this.register()}</Tab.Pane> }]} menu={{ pointing: true }} />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Container>
        )
    }

}



export default LoginAndRegister;





