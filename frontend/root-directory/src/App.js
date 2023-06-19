import React from 'react';
import MainPage from './Pages/MainPage';
import Signup from './Pages/Signup';
import Form from './Pages/Form';
import './App.css';
import Topbar from './Topbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orange from "./Sub-Pages/Orange"
import MTN from "./Sub-Pages/MTN"
import CCC from "./Sub-Pages/CCC"
import Add from './Pages/Add';
import Versions from './Pages/Versions';
import AddVersion from './Pages/AddVersion';
import Read from './Pages/Read'
import Edit from './Pages/Edit';
function App(item) {
  return (
    <div>
      <Topbar/>
      <Router>
    <div className="App">
    <br></br>
    <Routes>
       <Route path="/" element = {<Form/>}> </Route>
       <Route path="/signup" element = {<Signup/>}> </Route>
    <Route path="/main" element = {<MainPage/>}/>
    {/* <Route path="main/main/:mainid" element = {<Versions/>}/>
    <Route path="/addVersion" element = {<AddVersion/>}/> */}
      <Route path='/read/:id' element = {<Read/>}></Route>  
      <Route path='/edit/:id' element = {<Edit/>}></Route> 
        <Route path="/add" element = {<Add/>}/>
      
       <Route path="/ccc" element={<CCC/>}> </Route>
       <Route path='/mtn' element={<MTN/>}> </Route>
       <Route path='/orange' element={<Orange/>}> </Route>
    



        </Routes>
    </div>

    </Router>
    </div>
  );
}

export default App;
