import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

const Register = (props) => {



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




export default Register;