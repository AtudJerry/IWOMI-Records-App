import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Read = () =>{
    const{id} = useParams()
    const [student,setStudent] = useState([])
    useEffect( () => {
        axios.get('http://localhost:3001/read/'+id)
        .then(res => {
            console.log(res)
            setStudent(res.data[0])
        })
        .catch(err => console.log(err))
    },[])

    return(
        <div>  bfchghgfhgfhgfhgfhfghhgfhgfghfhghgffhgfhgfghfghread
       <h1>{student.ID}</h1>    
          <h1> {student.projectname}</h1> 
          <h1>{student.details}</h1>  
            </div>
    )
}
export default Read