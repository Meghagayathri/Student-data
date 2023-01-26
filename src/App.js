import './App.css';
import Navside from './Navside';
import Data from './Data';
import { createContext, useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Table1 from './Table';
import Viewpage from './Viewpage';
import Deletepage from './Deletepage';
import Addstddetails from './Addstddetails';
import Editpage from './Editpage'
import Login from './Login';

const Newcontext=createContext();


function App() {
    const[data,setData]=useState(Data);
    console.log(data);
  return (
    <div>
    <Navside />
    <Newcontext.Provider value={[data,setData]}>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Table1 />}></Route> 
      <Route path="/viewpage/:user" element={<Viewpage />}></Route>
      <Route path="/editpage/:user" element={<Editpage />}></Route>
      <Route path="/deletepage/:user" element={<Deletepage />}></Route>
      <Route path="/addstddetails" element={<Addstddetails />}></Route>
      <Route path="/login" element={<Login />}></Route> 

      </Routes>
      </BrowserRouter>
    </Newcontext.Provider>
    </div>
  );
}

export default App;
export {Newcontext}