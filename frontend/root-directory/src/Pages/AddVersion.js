import React, { useState } from "react";
import '../index.css'
import {IconButton} from "@material-ui/core";
import {Box} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import { Link, useNavigation } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const AddVersion= ()=>{
   
const navigate = useNavigate()

    const [title,setTitle] = useState('')
    const [details,setDetails] = useState('')
    const [link,   setLink] = useState('')
    const [output,setOutput] = useState('')
    const [detailStatus,setDetailStatus] = useState('')

 
    const handleSub = (e) => {
      
        e.preventDefault();
        Axios.post('http://localhost:3001/addVersion',{
            title:title,
            details:details,
            link:link
        }).then( (response) => {

            if(response.data.message){
                setOutput(response.data.message)
                
                }else{
                    setOutput('sent')
                    


                            // setregisterStatus('account created successfully');
                            // navigate('/')
                        }
          
            // setOutput(response.data[0].projectname)
            
                
         
        })


    }



    // const register = (e) =>{
    //     e.preventDefault();
    //     Axios.post('http://localhost:3001/register', {
    //         email:email,
    //         username:username,
    //         password:password,
    //     }).then( (response) => {
    //         if(response.data.message){
    //             setregisterStatus(response.data.message)
    
    //         }else{
    //             setregisterStatus('account created successfully');
    //             navigate('/')
    //         }
    //     })
    
    // }







    return (
            <div className="bg-white"> 
                <Box className="form bg-white-200 w-80 h-96 mt-12 flex justify-center ml-96  bg-gray-200 shadow-lg rounded-lg hover:shadow-2xl "> <br></br> 
         <form className="mt-16 mr-7" encType="multipart/form-data">
         <h1 className="text-col text-2xl font-bold ml-11">ADD SUB PROJECT</h1> <br></br> <br></br> <br></br>
         
                     <Box className="grid grid-cols-2 ml-20 w-96">
                 <div className="font-black  text-left">Title   :</div>
         {/*         
                  &nbsp; &nbsp; */}
              <div className="-my-6  text-left"> <TextField
                     className="text"
                     required
                     margin="none"
                     size="small"
                     label="Enter title"
                     type="text" name="title" placeholder="enter title"onChange={ (e) =>{setTitle(e.target.value)}}
         
                   /></div>  
                 </Box>
                 <br></br>
                 <Box className="grid grid-cols-2 ml-20 w-96">
                 <div className="font-black  text-left">Details  :</div>
         {/*         
                  &nbsp; &nbsp; */}
              <div className="-my-4  text-left"> <TextField
                     className="text"
                     required
                     margin="none"
                     size="small"
                     label="Enter details"
               
                     type="text" name="details"  onChange={ (e) =>{setDetails(e.target.value)}}
         
                   /></div>  
                 </Box> <br></br>
                 
                 <Box className="grid grid-cols-2 ml-20 w-96">
                 <div className="font-black  text-left">Details  :</div>
         {/*         
                  &nbsp; &nbsp; */}
              <div className="-my-4  text-left"> <TextField
                     className="text"
                     required
                     margin="none"
                     size="small"
                     label="Enter link"
               
                     type="text" name="link"  onChange={ (e) =>{setLink(e.target.value)}}
         
                   /></div>  
                 </Box> <br></br> <br></br> 
                 
              {/* <Link to="/main"><button type="submit " className="button bg-black text-white rounded w-24 h-10"> Cancel</button> </Link>   */}
                 <button type="submit" className="button add-butt text-white rounded w-24 h-10" onClick={handleSub} value="add"> Add</button>  <br></br> <br></br>



                
               <br></br> <br></br>
{/*          
         <div >{imageStatus}</div> <br></br> */}
         <h1 className="text-blue-700">{ output}</h1>
       
         
         
         </form>
         </Box>
         
         
         
         
         </div>


    )

         
}
export default AddVersion




































{/* <div className="card">
            <img src={require("../images/card-pic1.jpg")}></img> 
        <div>  <span>  <Link to = "./ccc"> <IconButton>{item.name}</IconButton> </Link> </span> </div>
        <div>{item.dec}</div>
          </div>
         
         </div> */}