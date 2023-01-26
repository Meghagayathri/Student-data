import React from 'react'
import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap'

function Navside() {
  return (
    <div>
      <Navbar bg="dark" variant='dark'>
      <Container fluid>
        <Navbar.Brand href="#" >STUDENT MANAGEMENT SYSTEM</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
    
            navbarScroll
          >
            <Nav.Link href="/login">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <NavDropdown title="Details" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/addstddetails">Add Student Details</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Add Teacher
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                View Student
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            </Nav>
           <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        
        

    </div>
  )
}

export default Navside