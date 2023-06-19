
import React, { useState } from "react";
import '../index.css'
import {IconButton} from "@material-ui/core";
import {Box} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import { Link, useNavigation } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Edit = () => {
    
    const [projectname,setProjectName] = useState('')
    const [details,setDetails] = useState('')
    const [output,setOutput] = useState('')
    const [detailStatus,setDetailStatus] = useState('')
    const [student,setStudent] = useState([])
    const [values,setValues] = useState({
        projectname : student.projectname,
        details :student.details

        
    })

    const{id} = useParams()
   
    useEffect( () => {
        Axios.get('http://localhost:3001/read/'+id)
        .then(res => {
            console.log(res)
            setValues({...values, projectname: res.data[0].projectname, details:res.data[0].details})
        })
        .catch(err => console.log(err))
    },[])

   const handleUpdate = (e) => {
    e.preventDefault();
    Axios.use('http://localhost:3001/update/')

   }
   

    return(
        <div className="bg-white"> 
                <Box className="form bg-white-200 w-80 h-96 mt-12 flex justify-center ml-96  bg-gray-200 shadow-lg rounded-lg hover:shadow-2xl "> <br></br> 
         <form className="mt-16 mr-7" encType="multipart/form-data">
         <h1 className="text-col text-2xl font-bold ml-11">Update PROJECT</h1> <br></br> <br></br> <br></br>
         
                     <Box className="grid grid-cols-2 ml-20 w-96">
                 <div className="font-black  text-left">Project Name   :</div>
         {/*         
                  &nbsp; &nbsp; */}
              <div className="-my-6  text-left"> <TextField
                     className="text"
                     required
                     margin="none"
                     size="small"
                     
                     type="text" value={values.projectname} name="projectname" placeholder="enter name"onChange={ (e) =>{setProjectName(e.target.value)}}
         
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
                
               
                     type="text" value={values.details} name="details"  onChange={ (e) =>{setDetails(e.target.value)}}
         
                   /></div>  
                 </Box> <br></br> <br></br>
                 
              <Link to="/main"><button type="submit " className="button bg-black text-white rounded w-24 h-10"> Cancel</button> </Link>  
                 <button type="submit" className="button add-butt text-white rounded w-24 h-10" onClick={handleUpdate}  value="add"> Update</button>  <br></br> <br></br>



                
               <br></br> <br></br>
{/*          
         <div >{imageStatus}</div> <br></br> */}
         <h1 className="text-blue-700">{ output}</h1>
       
         
         
         </form>
         </Box>
         
         
         
         
         </div>
    )
}
export default Edit