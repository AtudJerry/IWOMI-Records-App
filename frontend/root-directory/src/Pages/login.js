import React from "react";
import { Box, Button, IconButton, InputLabel, TextField } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";


const Login = () => {
  return (
    <div className="flex justify-center">
        <form>
      <div className="text-2xl">Sign In With</div>
      <div className="grid grid-cols-2 m-16 gap-6">
        <button className="hover:bg-green-700 text-white rounded bg-gray-500" >
      <Facebook />  
          Facebook
        </button>
        <button className="hover:bg-green-700 text-white rounded bg-gray-500 h-9" >
          
          Google
        </button>
      </div>

      
        <Box className="grid grid-cols-2 gap-2">
        <div className="font-black ml-16 text-left">Email Address   :</div>
{/*         
         &nbsp; &nbsp; */}
     <div className="-my-6  text-left"> <TextField
            className="text"
            required
            margin="none"
            size="small"
            label="Enter your Name"
            type="text" name="email" placeholder="enter your email address" onChange={ (e) =>{setEmail(e.target.value)}}
          /></div>  
        </Box>
        <br></br>

      
        <Box className="grid grid-cols-2 gap-2">
        <div className="font-black ml-16 text-left">User Name    :</div>
{/*         
         &nbsp; &nbsp; */}
     <div className="-my-6  text-left"> <TextField
            className="text"
            required
            margin="none"
            size="small"
            label="Enter your Name"
            type="text" name="username" placeholder="enter your name"onChange={ (e) =>{setUsername(e.target.value)}}

          /></div>  
        </Box>
        <br></br>
        <Box className="grid grid-cols-2 gap-2">
        <div className="font-black ml-16 text-left">Password   :</div>
{/*         
         &nbsp; &nbsp; */}
     <div className="-my-6  text-left"> <TextField
            className="text"
            required
            margin="none"
            size="small"
            label="Enter your Password"
      
            type="text" name="password" placeholder="enter your user password" onChange={ (e) =>{setPassword(e.target.value)}}

          /></div>  
        </Box>

        <br></br>

        <button className="bg-black text-green-200 rounded-md w-60 h-10">
          Submit
        </button><br></br> <br></br>
<div className="text-sm">not a member? <a href="/"> sign up now</a></div>
      </form>
    </div>
  );
};
export default Login;
