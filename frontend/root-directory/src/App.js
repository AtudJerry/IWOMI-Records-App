import React from 'react';
import MainPage from './Pages/MainPage';
import './App.css';
import Topbar from './Topbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orange from "./Sub-Pages/Orange"
import MTN from "./Sub-Pages/MTN"
import CCC from "./Sub-Pages/CCC"

function App() {
  return (
    <div>
      <Topbar/>
      <Router>
    <div className="App">
    <br></br>
    <Routes>
       <Route path="/" element = {<MainPage/>}> </Route>
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
