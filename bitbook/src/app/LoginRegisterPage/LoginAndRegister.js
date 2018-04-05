import React from 'react';
import { Tab, Container, Grid, Segment, Form, Button } from 'semantic-ui-react';
import { authService } from '../../service/authenticationService';
import ErrorComponeny from '../sharedComponents/ErrorComponent';
import ErrorComponent from '../sharedComponents/ErrorComponent';




class LoginAndRegister extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginUsername: '',
            loginPassword: '',
            registerEmail: '',
            registerPassword: '',
            registerUsername: '',
            errorUsernameLog: '',
            errorPasswordLog: '',
            errorRegUsername: '',
            errorRegEmail: '',
            errorRegPassword: '',
            errorLogBtn: '',
            errorRegBtn: '',
            error: ''

        }
    }

    /* Login validation input for username */

    usernameLoginChange = (event) => {
        this.setState({
            loginUsername: event.target.value,
            errorUsernameLog: ''
        })
        this.usernameLogValidation();
    }

    usernameLogValidation = () => {
        if (this.state.loginUsername.length > 23) {
            this.setState({
                errorUsernameLog: 'Username is too long!'
            })

        } else if (this.state.loginUsername == '') {
            this.setState({
                errorUsernameLog: 'Username is missing!'
            })
        } else {
            return true;
        }
    }

    /* Validation input for password */

    passwordLoginChange = (event) => {
        this.setState({
            loginPassword: event.target.value,
            errorPasswordLog: ''
        })
        this.passwordLogValidation();
    }

    passwordLogValidation = () => {
        if (this.state.loginPassword.length > 23) {
            this.setState({
                errorPasswordLog: 'Password is too long'
            })
        } else {
            return true;
        }
    }

    /* Click on button login  */

    handlerLogin = (event) => {
        let user = {
            "username": this.state.loginUsername,
            "password": this.state.loginPassword
        }
        if (this.usernameLogValidation() && this.passwordLogValidation()) {
            authService.userLogin(user)
                .then((response) => {
                    console.log(response);
                    if (response.error) {
                        this.setState({
                            errorLogBtn: response.error
                        })
                    } else {
                        window.location.assign('/');
                    }
                })
        }

    }

    /* Register validation input for username */


    usernameRegisterChange = (event) => {
        this.setState({
            registerUsername: event.target.value,
            errorRegUsername: ''
        })
        this.usernameRegValidation();
    }

    usernameRegValidation = () => {
        if (this.state.registerUsername.length > 23) {
            this.setState({
                errorRegUsername: 'Username is too long!'
            })

        } else if (this.state.registerUsername == '') {
            this.setState({
                errorRegUsername: 'Username is missing!'
            })
        } else {
            return true;
        }
    }

    /* Register validation input for email */

    emailRegisterChange = (event) => {
        this.setState({
            registerEmail: event.target.value,
            errorRegEmail: '',
        })
        this.emailRegValidation();
    }

    emailRegValidation = () => {
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.registerEmail.match(mailFormat)) {
            return true;
        } else if (this.state.registerEmail == '') {
            this.setState({
                errorRegEmail: 'Email is missing!'
            })
        }
    }


    /* Register validation input for password */

    passwordRegisterChange = (event) => {
        this.setState({
            registerPassword: event.target.value,
            errorRegPassword: '',
        })
        this.passwordRegValidation();
    }


    passwordRegValidation = () => {
        if (this.state.registerPassword.length > 23) {
            this.setState({
                errorRegPassword: 'Password is too long'
            })
        } else {
            return true;
        }
    }


    /* Click on button register  */

    handlerRegister = (event) => {
        let user = {
            "username": this.state.registerUsername,
            "password": this.state.registerPassword,
            "name": this.state.registerUsername,
            "email": this.state.registerEmail
        }
        if (this.usernameRegValidation() && this.emailRegValidation() && this.passwordRegValidation()) {
            authService.userRegister(user);
        }
    }


    /* Tab for login  */

    login = () => {
        return (
            <Form>
                <Form.Field>

                    <label>username</label>
                    <input type='text' onChange={this.usernameLoginChange} placeholder='Username' /><br />
                    <div>{this.state.errorUsernameLog}</div>
                </Form.Field>
                <Form.Field>
                    <label>pass</label>
                    <input type='password' onChange={this.passwordLoginChange} placeholder='Password' /><br />
                    <div>{this.state.errorPasswordLog}</div>

                </Form.Field>
                <Button onClick={this.handlerLogin}>Login</Button>

            </Form>
        )
    }


    /* Click on button register  */

    register = () => {
        return (
            <Form>
                <Form.Field>
                    <label>username</label>
                    <input type='text' onChange={this.usernameRegisterChange} placeholder='Full Name' /><br />
                    <div>{this.state.errorRegUsername}</div>
                </Form.Field>
                <Form.Field>
                    <label>email</label>
                    <input type='email' onChange={this.emailRegisterChange} placeholder='Email Address' /><br />
                    <div>{this.state.errorRegEmail}</div>
                </Form.Field>
                <Form.Field>
                    <label>pass</label>
                    <input type='password' onChange={this.passwordRegisterChange} placeholder='Min 6 characters' /><br />
                    <div>{this.state.errorRegPassword}</div>
                </Form.Field>
                <Button onClick={this.handlerRegister}>Register</Button>
            </Form>
        )
    }

    render() {

        return (
            <Container className='welcome-container'>
                {/* <Grid.Row>
                    <Grid.Column width={8} className='headline-app'> */}
                        <Segment id='login'>
                            <h1>Welcome to Bitbook</h1><br/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </Segment>
                    {/* </Grid.Column> */}
                    {/* <Grid.Column width={8} className='tabs'> */}
                        <Segment id='tabs'>
                            <Tab panes={[{ menuItem: 'Login', render: () => <Tab.Pane attached={false}>{this.login()} </Tab.Pane> },
                            { menuItem: 'Register', render: () => <Tab.Pane attached={false}>{this.register()}</Tab.Pane> }]} menu={{ pointing: true }} />
                            <ErrorComponent errorMessage={this.state.errorLogBtn}/>
                        </Segment>
                    {/* </Grid.Column> */}
                {/* // </Grid.Row> */}
            </Container>
        )
    }

}



export default LoginAndRegister;





