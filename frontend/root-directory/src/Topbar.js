import React from "react";
import "./index.css";
import { Link, Outlet } from "react-router-dom";
import { AddCircleOutline } from "@material-ui/icons";
import {Button} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
// import { TextField } from "@material-ui/core";
// import { Search } from "@material-ui/icons";
// import {IconButton} from "@material-ui/core";
const Topbar = () => {
  return (
    <div>
    <div className="bg-black h-16 w-full">

      <div>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-green-300 text-xl lg:p-4 ">IWOMI Technologies</h1>
          </div>
        </div>
      </div>
    </div>
    
    {/* <div className="grid grid-cols-3 w-full">
          <div>
            <h1 className=" head-text lg:text-4xl font-bold text-green-600">MAJOR APPLICATIONS</h1>
</div>

<div> <Button size="sm"> <AddCircleOutline/> <h6 className="text-green-900 lg:text-lg font-bold">&nbsp;Add project</h6> </Button>  </div>
            <div>
            <IconButton variant = "outlined">   <Search /> </IconButton>
            <TextField color="primary" label="search" bg-black variant="outlined" size="small" className="bg-grey-500 h-2 w-44 text-white"/>
          </div>

          </div> */}
            

    </div>
  );
};
export default Topbar;

{
  /* <div>
  <IconButton variant = "outlined">   <Search /> </IconButton>
  <TextField color="primary" bg-black variant="outlined" size="small" className="bg-grey-500 h-2 w-44 text-white"/>
</div> */
}
