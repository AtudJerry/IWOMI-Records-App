import React from "react";
import "../index.css";
import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import {Button} from "@material-ui/core";
const CCC = () => {
  return (
    <div className=" ml-12">

      <div>
        <div className="grid grid-cols-3 ">
          <div>
            <h1 className="text-black text-xl lg:text-2xl">CCC APPLICATIONS</h1>
</div>
<div><Button size="sm"> <AddCircleOutline/> <h6 className="text-green-700">&nbsp;Add project</h6> </Button> </div>
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
        <div>  <span> <IconButton><a href="/">CCC 1</a></IconButton> </span> </div>  
          </div>

          <div className="card">
            <img src={require("../images/card-pic2.jpg")}></img> 
           <span> <IconButton><a href="/">CCC2</a></IconButton> </span> 
          </div>

          <div className="card">
            <img src={require("../images/card-pic3.jpg")}></img> 
           <span> <IconButton><a href="/">CCC3</a></IconButton> </span> 
          </div>

          <div className="card">
            <img src={require("../images/card-pic2.jpg")}></img> 
           <span> <IconButton><a href="/">CCC4</a></IconButton> </span> 
          </div>

          <div className="card">
            <img src={require("../images/card-pic1.jpg")}></img> 
           <span> <IconButton><a href="/">CCC5</a></IconButton> </span> 
          </div>

          <div className="card">
            <img src={require("../images/card-pic3.jpg")}></img> 
           <span> <IconButton><a href="/">CCC6</a></IconButton> </span> 
          </div>

          <div className="card">
            <img src={require("../images/card-pic1.jpg")}></img> 
           <span> <IconButton><a href="/">CCC7</a></IconButton> </span> 
          </div>

          <div className="card">
            <img src={require("../images/card-pic1.jpg")}></img> 
           <span> <IconButton><a href="/">CCC8</a></IconButton> </span> 
          </div>


        </div><br></br>
        <h7 className="flex items-center justify-center text-green-700">@IWOMI 2023</h7>
           
        
         
    </div>
  );
};
export default CCC
