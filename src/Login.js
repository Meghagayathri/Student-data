import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {
  return (
    <div>
          <Form className='classfrm mb-5'>
          <h1 className='classhead'>Login</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="username" /> 
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className='text-center'>
          <Link to={`/`}>
          <Button variant="primary" type="submit" >
           Login
          </Button>
          </Link>
          </div>
          </Form>
        </div>
  )
}

export default Login