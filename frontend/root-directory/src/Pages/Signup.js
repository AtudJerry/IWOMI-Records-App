import React, { useState } from "react"
import Axios from "axios"
import { Box } from "@material-ui/core"
import {TextField} from "@material-ui/core"
import "../App.css"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const navigate = useNavigate()
const [email,setEmail] = useState('')
const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const [loginStatus,setloginStatus] = useState('')
const [registerStatus,setregisterStatus] = useState('')

const register = (e) =>{
    e.preventDefault();
    Axios.post('http://localhost:3001/register', {
        email:email,
        username:username,
        password:password,
    }).then( (response) => {
        if(response.data.message){
            setregisterStatus(response.data.message)

        }else{
            setregisterStatus('account created successfully');
            navigate('/')
        }
    })

}



    return(
        <div className="bg-white">
          
        {/* cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc */}
        
        
        
        <Box className="form lg:bg-gray-200 h-96 mt-12 flex justify-center shadow-lg rounded-lg hover:shadow-2xl"> <br></br> <br></br> <br></br>
        
        <form> <br></br> <br></br>
        
        <h1 className="text-col text-2xl font-bold">CREATE AN ACCOUNT</h1> <br></br> <br></br>
        
        
        
        
        <Box className="grid grid-cols-2 lg:ml-16 lg:w-80">
                <div className="font-black  text-left">Email Address   :</div>
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
        
              
                <Box className="grid grid-cols-2 lg:ml-16 lg:w-80">
                <div className="font-black  text-left">User Name    :</div>
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
                <Box className="grid grid-cols-2 w-72 lg:ml-16 lg:w-80">
                <div className="font-black  text-left">Password   :</div>
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
                </Box> <br></br> <br></br>
                <button type="submit" className="button add-butt bg-black text-white rounded w-44 h-10" onClick={register} value="register">Create Account</button> 
        
        
        <h1 className="text-blue-700">{registerStatus}</h1> 
        
                
        
                    </form>  
                    </Box>
        
</div>        
       
    )
}
export default Signup