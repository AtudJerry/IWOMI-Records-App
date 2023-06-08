import React, { useState } from "react";
import "../index.css";
import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import { Link } from "react-router-dom";
import { AddCircleOutline } from "@material-ui/icons";
import {Button} from "@material-ui/core";
import Form from "./Form";

import Add from "./Add";

const MainPage = () => {

  // const [products,setProducts] = useState([])
  // const addProduct = (product) =>{
  //   setProducts([...products, product])
  //   alert(`you have added ${product.name}`)
  // }

  return (
    <div className=" ml-12">
    {/* <ProductForm addProductProp={addProduct}/>
{
  products.map( (product) => 
    <Add key={product.id} item={product}/>
  )
} */}
      <div>
        <div className="grid grid-cols-3 ">
          <div>
            <h1 className="text-black text-xl lg:text-2xl">MAJOR APPLICATIONS</h1>
</div>

<div><Button size="sm"> <AddCircleOutline/> <h6 className="text-green-900">&nbsp;Add project</h6> </Button> </div>
            <div>
            <IconButton variant = "outlined">   <Search /> </IconButton>
            <TextField color="primary" label="search" bg-black variant="outlined" size="small" className="bg-grey-500 h-2 w-44 text-white"/>
          </div>

          </div>

      </div>
      <br></br>
      
{/* cards */}

        <div className=" p-9 lg:grid lg:grid-cols-4 gap-12 ">





          <div className="card">
            <img src={require("../images/card-pic1.jpg")}></img> 
        <div>  <span>  <Link to = "./ccc"> <IconButton> CCC Plc</IconButton> </Link> </span> </div>  
        
        
          </div>

          <div className="card">
            <img src={require("../images/card-pic2.jpg")}></img> 
           <span>  <Link to = "./mtn"> <IconButton >MTN Apps</IconButton></Link>  </span> 
          </div>

          <div className="card">
            <img src={require("../images/card-pic3.jpg")}></img> 
           <span> <Link to = "./orange"> <IconButton>Orange Apps</IconButton></Link></span> 
          </div>

          <div className="card">
            <img src={require("../images/card-pic2.jpg")}></img> 
           <span> <IconButton><a href="/">BICEC</a></IconButton> </span> 
          </div>

          <div className="card">
            <img src={require("../images/card-pic1.jpg")}></img> 
           <span> <IconButton><a href="/">CAMTEL</a></IconButton> </span> 
          </div>

          <div className="card">
            <img src={require("../images/card-pic3.jpg")}></img> 
           <span> <IconButton><a href="/">RESTAU</a></IconButton> </span> 
          </div>

          <div className="card">
            <img src={require("../images/card-pic1.jpg")}></img> 
           <span> <IconButton><a href="/">SHOP</a></IconButton> </span> 
          </div>

          <div className="card">
            <img src={require("../images/card-pic1.jpg")}></img> 
           <span> <IconButton><a href="/">AFRILAND</a></IconButton> </span> 
          </div>


        </div>
        <Form/><br></br>
      
        <h7 className="flex items-center justify-center text-green-700">@IWOMI 2023</h7>
           
        
         
    </div>
  );
};
export default MainPage
