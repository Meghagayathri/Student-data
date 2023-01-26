import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Newcontext } from './App';

function Addstddetails() {
    const navigate=useNavigate()
    const [data,setData]= useContext(Newcontext)
    console.log(data);
    const [input,setInput]=useState({
        name:"" ,
        age:"",
        course:"",
      })
     
      const handlechange = (e) =>
      {
        //console.log(e.target.value);
        setInput({...input,[e.target.name]:e.target.value})
      };
      console.log(input);

      const Submit = (sub)=>{

        sub.preventDefault();
        const New=[...data,input]
        setData(New
          
          );
        navigate(-1)
          
      }
          
  return (
    <div>
        <Form className='form' onSubmit={Submit}>
          <h1 className='heading'>Add Student Details</h1>
          <Form.Group className="mb-3" controlId=" ">
        <Form.Label>Name</Form.Label>
        <Form.Control type=" " placeholder=" " onChange={handlechange} name="name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId=" ">
        <Form.Label>Age</Form.Label>
        <Form.Control type=" " placeholder=" " onChange={handlechange} name="age" />
      </Form.Group>

      <Form.Group className="mb-3" controlId=" ">
        <Form.Label>Course</Form.Label>
        <Form.Control type=" " placeholder=" " onChange={handlechange} name="course" />
      </Form.Group>

      <div className='text-center'>
      <Button variant="primary" type="submit" className="center">
        Add
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default Addstddetails