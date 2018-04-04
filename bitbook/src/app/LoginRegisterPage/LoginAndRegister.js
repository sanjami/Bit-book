import React from 'react';
import { Tab, Container, Grid, Segment, Form, Button } from 'semantic-ui-react';
import {authService} from '../../service/authenticationService';



class LoginAndRegister extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginEmail: '',
            loginPassword: '',
            registerEmail : '',
            registerPassword: '',
            registerUsername: ''
        }
    }

    usernameLoginChange = (event) => {
        this.setState({
            loginEmail: event.target.value
        })
    }

    passwordLoginChange = (event) => {
        this.setState({
            loginPassword: event.target.value
        })
    }

    handlerLogin = (event) =>{
        let user = {
            "username": this.state.loginEmail,
             "password": this.state.loginPassword
          }
        authService.userLogin(user)
        
     }
 
     emailRegisterChange = (event) => {
         this.setState({
            registerEmail: event.target.value
         })
     }
 
     passwordRegisterChange = (event) => {
         this.setState({
            registerPassword: event.target.value
         })
     }

     usernameRegisterChange = (event) => {
        this.setState({
            registerUsername: event.target.value
        })
    }

    handlerRegister = (event) =>{
        let user = {
                "username": this.state.registerUsername,
                "password": this.state.registerPassword,
                "name": this.state.registerUsername,
                "email": this.state.registerEmail
              }        
        authService.userRegister(user);
        
     }

    login = () => {
        return (
            <Form>
                <Form.Field>
                    <label>username</label>
                    <input type='text' onChange={this.usernameLoginChange} placeholder='Email Address' />
                </Form.Field>
                <Form.Field>
                    <label>pass</label>
                    <input type='password' onChange={this.passwordLoginChange} placeholder='Password' />
                </Form.Field>
                <Button onClick={this.handlerLogin}>Login</Button>
            </Form>
        )
    }

    register = () => {
        return (
            <Form>
                <Form.Field>
                    <label>username</label>
                    <input type='text' onChange={this.usernameRegisterChange} placeholder='Full Name' />
                </Form.Field>
                <Form.Field>
                    <label>email</label>
                    <input type='email' onChange={this.emailRegisterChange} placeholder='Email Address' />
                </Form.Field>
                <Form.Field>
                    <label>pass</label>
                    <input type='password' onChange={this.passwordRegisterChange} placeholder='Min 6 characters' />
                </Form.Field>
                <Button onClick={this.handlerRegister}>Register</Button>
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





