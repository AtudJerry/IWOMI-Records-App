import React from "react";
import "./index.css";
import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
const mainPage = () => {
  return (
    <div>
      {/* topbar */}

      <div className="bg-black h-20 w-96">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="tex">IWOMI Technologies</h1>
          </div>

          <div>
            {" "}
            <Search />
            <TextField />
          </div>
        </div>

        {/* cards */}
      </div>
    </div>
  );
};
