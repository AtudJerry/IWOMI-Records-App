
import React, { useState } from "react"
import Axios from "axios"
import { Box } from "@material-ui/core"
import {TextField} from "@material-ui/core"
import "../App.css"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const Form = () => {
    const navigate = useNavigate()
// const [email,setEmail] = useState('')
const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const [loginStatus,setloginStatus] = useState('')
// const [registerStatus,setregisterStatus] = useState('')





const login = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/login', {
    
        username:username,
        password:password,
    }).then( (response) => {
        if(response.data.message){
            setloginStatus(response.data.message);

        }else{
            setloginStatus(response.data[0].email);
            navigate("/main")
           
        } 

    })

}




    return(
   <div className="bg-white">
       <Box className="form bg-gray-200  w-80 h-96 mt-12 flex justify-center ml-96 shadow-lg rounded-lg hover:shadow-2xl"> <br></br> <br></br> <br></br>
<form className="mt-16">
<h1 className="text-col text-2xl font-bold ">LOGIN</h1> <br></br> <br></br>

            <Box className="grid grid-cols-2 ml-16 w-80">
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
        <Box className="grid grid-cols-2 ml-16 w-80">
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
        </Box> <br></br> <h1 className="text-red-500">{loginStatus}</h1> <br></br>
      <button type="submit" className="button add-butt bg-black text-white rounded w-24 h-10" onClick={login} value="Login"> Login</button> 
<br></br> <br></br>


<h5>Don't have an account? <Link to="/signup"> <a className="text-green-700 font-bold" href=""> Signup here</a> </Link> </h5>


</form>
</Box>




</div>
            )
   
}
export default Form






































// const ProductForm = ( {addProductProp}) => {
//     const [name,setName] = useState('')
//       const [description,setDescription] = useState('')



//       const addProduct = () => { 
//         addProductProp({

//         id :(new Date).getTime(),
//         name, description,  
//     })      
//     // setName('');
//     // setDescription('');      
//     return(`<div>${name} </div><br> ${description}`)
// }

//   return(
//     <div>

// <input type="text" placeholder="name" value={name} onChange={ (e) => {setName(e.target.value)}}></input>
// <input type="text" placeholder="desc" value={description} onChange={ (e) => {setDescription(e.target.value)}} ></input>
// <button onClick={addProduct}>add</button>

// </div>


//   )

// }
// export default ProductForm