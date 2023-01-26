import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { Newcontext } from './App'

function Viewpage() {
  const [data,setData]=useContext(Newcontext)
  console.log(data)

  const {user} = useParams()
  console.log(user)
  const viewdata =data[user]
  return (
    <div>
       <h2> {viewdata.name} </h2>
       <h2> {viewdata.age} </h2>
       <h2> {viewdata.qualification}</h2>
        {/* <h2>hellooooo</h2> */}
    </div>
  )
}

export default Viewpage