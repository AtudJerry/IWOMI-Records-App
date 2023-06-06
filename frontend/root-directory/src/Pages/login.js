import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {


    return(
        <div>
            <div className="text-2xl">Sign In With</div>
            <div className="grid grid-cols-2">
                <Button><Facebook/>Facebook</Button>
                <Button>< GoogleIcon/>Google</Button>
            </div>

        </div>
    )
}
export default Login