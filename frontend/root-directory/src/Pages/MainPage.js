import React, { useEffect, useState } from "react";
import "../index.css";
import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import { Link, Outlet } from "react-router-dom";
import { AddCircleOutline } from "@material-ui/icons";
import {Button} from "@material-ui/core";
import Form from "./Form";
import Add from "./Add";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const navigate = useNavigate()
  const [list,setList] = useState([])
  useEffect( () => {
    Axios.get('http://localhost:3001/resp').then( (Response) => {
      setList(Response.data)
    })
    
  }, [])

  // const [products,setProducts] = useState([])
  // const addProduct = (product) =>{
  //   setProducts([...products, product])
  //   alert(`you have added ${product.name}`)
  // }

  return (
    <div className=" ml-12">
  

      <div>
        <div className="grid grid-cols-3 ">
          <div>
            <h1 className=" head-text lg:text-4xl font-bold text-green-600">MAJOR APPLICATIONS</h1>
</div>

<div> <Link to="/add"> <Button size="sm"> <AddCircleOutline/> <h6 className="text-green-900 lg:text-lg font-bold">&nbsp;Add project</h6> </Button> </Link> </div>
            <div>
            <IconButton variant = "outlined">   <Search /> </IconButton>
            <TextField color="primary" label="search" bg-black variant="outlined" size="small" className="bg-grey-500 h-2 w-44 text-white"/>
          </div>

          </div>

      </div>
      <Outlet/>
     
      
{/* cards */}
{/* 
        <div className=" p-1 lg:grid lg:grid-cols-3 gap-12 ">
        </div> */}
       <br></br>
       <div className=" p-1 lg:grid lg:grid-cols-3 gap-12 ">
      
        {list.map( (val) => {
          const handleVersions = () =>{
            navigate(`main/${val.ID}`)
          }
          return   <div className="card"> <br></br> <h1 className="text-3xl h-24 w-52 ml-14 font-bold">{val.projectname} </h1> <div className="h-16 text-center m-auto"> {val.details}</div> <br></br>  <br></br>
     <div>
      
   <Link to = {`/read/${val.ID}`} >  <button className="button add-butt text-white outlined-4 rounded-lg w-20 h-10 " > read</button> </Link> &nbsp;
   <Link to = {`/edit/${val.ID}`} >  <button className="button add-butt text-white outlined-4 rounded-lg w-20 h-10 " > Edit</button> </Link> &nbsp;

        <button onClick={handleVersions} type="submit" className="button add-butt text-white outlined-4 rounded-lg w-20 h-10 " > Versions</button>  <br></br> <br></br>

</div>
           </div>
  
        }) }
        </div> <br></br> <br></br>  <br></br> <br></br>

<h7 className="flex items-center justify-center text-green-700">@IWOMI 2023</h7>
           
    </div>
  );
};
export default MainPage
