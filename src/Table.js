import React, { useContext } from 'react'
import { Button,Table } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import App from './App';
import Data from './Data'
import {Newcontext} from './App'

function Table1() {
  //const[storedata,setStoredata]=useState(Data);
  const[data,setData]=useContext(Newcontext)

  
  return (
    <div>
      
       <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>NAME</th>
          <th>AGE</th>
          <th>COURSE</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((item,index)=>{
          return(
            <tr>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.course}</td>
            <Link to={`/Viewpage/${index}`} >
            <td> <Button variant='success'>View</Button>{' '}</td>
            </Link>
            <td> <Link to={`/Editpage/${index}`} >
            <Button variant='primary'>Edit</Button>{' '}
            </Link></td>
            <Link to={`/Deletepage/${index}`}>
            <td> <Button variant='danger'>Delete</Button>{' '}</td>
            </Link>
          </tr>
          // <tr><td>
          // <Button variant='primary'>Create</Button>
          // </td></tr>
          )
        })}
      </tbody>
    </Table>
    <div className='text-center'>
    <Link to={`/Addstddetails`}>
    <Button variant='primary' className='center'>Create</Button>
    </Link>
    </div>

    </div>
  )
}

export default Table1