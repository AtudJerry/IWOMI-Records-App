import React from "react";
import '../index.css'
import {IconButton} from "@material-ui/core";
import { Link } from "react-router-dom";
const Add= ({item})=>{

    return <div>

<div className="card">
            <img src={require("../images/card-pic1.jpg")}></img> 
        <div>  <span>  <Link to = "./ccc"> <IconButton>{item.name}</IconButton> </Link> </span> </div>
        <div>{item.dec}</div>
          </div>
         
         </div>
         
}
export default Add