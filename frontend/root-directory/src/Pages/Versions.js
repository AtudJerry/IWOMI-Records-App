 import React, { useEffect, useState } from "react";
 import { TextField } from "@material-ui/core";
 import { Search } from "@material-ui/icons";
 import {IconButton} from "@material-ui/core";
 import { Link, Outlet } from "react-router-dom";
 import { AddCircleOutline } from "@material-ui/icons";
 import {Button} from "@material-ui/core";
import Axios from "axios";


 const Versions = (item) => {

    const [lis,setLis] = useState([])

    useEffect( () => {
        Axios.get('http://localhost:3001/versionresp').then( (Response) => {
            setLis(Response.data)
          })
          
        }, [])
    


    return(

        <div>

<div>
        <div className="grid grid-cols-3 ">
          <div>
            <h1 className=" head-text lg:text-4xl font-bold text-green-600">MAJOR APPLICATIONS</h1>
</div>

<div> <Link to="/addVersion"> <Button size="sm"> <AddCircleOutline/> <h6 className="text-green-900 lg:text-lg font-bold">&nbsp;Add project</h6> </Button> </Link> </div>
            <div>
            <IconButton variant = "outlined">   <Search /> </IconButton>
            <TextField color="primary" label="search" bg-black variant="outlined" size="small" className="bg-grey-500 h-2 w-44 text-white"/>
          </div>

          </div>

      </div>

   {

lis.map( (item) => {

    return(
          <div className="card"> <br></br> <h1 className="text-3xl h-24 w-52 ml-14 font-bold">{item.title} </h1> <div className="h-16 text-center m-auto"> {item.details}</div> <br></br>  <br></br>
        <button className="button add-butt text-white outlined-4 rounded-lg w-24 h-10 " > Github link</button>  <br></br> <br></br>


           </div>
    )


})




   }



        </div>





    )

 }
 export default Versions