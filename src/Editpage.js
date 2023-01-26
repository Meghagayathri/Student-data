import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import '../src/edit.css'
import { Newcontext } from './App'

function Editpage() {
  const [data,setData]= useContext(Newcontext)
  const {user} = useParams()
  const navigate=useNavigate()
  console.log(user)
  const editdata=data[user]
  
  const [input,setInput]=useState({
    name:"" ,
    age:"",
    qualification:"",
  })
  const handlechange = (e) =>
  {
    //console.log(e.target.value);
    setInput({...input,[e.target.name]:e.target.value})
  };

  console.log(input);
  const submit = (sub)=>{

    sub.preventDefault();
    setInput(data[user]=input);
    navigate("/")
      
  }
  return (
     <div>
        <Form className='form' onSubmit={submit}>
        <h1 className='heading'> Edit Page</h1>
        <Form.Group className="mb-3" controlId="" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={editdata.name} onChange={handlechange} name="name"/> 
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type=" " placeholder={editdata.age} onChange={handlechange} name="age"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId=" ">
        <Form.Label>Course</Form.Label>
        <Form.Control type=" " placeholder={editdata.qualification} onChange={handlechange} name="qualification"/>
        </Form.Group>
       <div className='text-center'>
       <Button variant="primary" type="submit" className='center'>
        Edit
      </Button>
      </div>
    </Form>
     </div>
  )
}
export default Editpage