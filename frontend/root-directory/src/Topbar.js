import React from "react";
import "./index.css";
// import { TextField } from "@material-ui/core";
// import { Search } from "@material-ui/icons";
// import {IconButton} from "@material-ui/core";
const Topbar = () => {
  return (
    <div className="bg-black h-16 w-full">

      <div>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-green-300 text-xl lg:p-4 ">IWOMI Technologies</h1>
          </div>
        </div>
      </div>
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
