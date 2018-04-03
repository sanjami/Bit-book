import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

const Login = (props) => {



    return (
        <Form>
            <Form.Field>
                <label>email</label>
                <input type='email' placeholder='Email Address' />
            </Form.Field>
            <Form.Field>
                <label>pass</label>
                <input type='password' placeholder='Password' />
            </Form.Field>
            <Button type='submit'>Login</Button>
        </Form>
    )
}


export default Login;