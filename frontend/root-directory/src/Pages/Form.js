
import React, { useState } from "react"
import axios from "axios"

const Form = () => {
const [email,setEmail] = useState('')
const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const [loginStatus,setloginStatus] = useState('')
const [registerStatus,setregisterStatus] = useState('')


const register = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/register',{
        email:email,
        username:username,
        password:password,
    }).then( (response) => {
        if(response.data.message){
            setregisterStatus(response.data.message)

        }else{
            setregisterStatus('account created successfully');
        }
    })

}


const login = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login',{
        
        username:username,
        password:password,
    }).then( (response) => {
        if(response.data.message){
            setloginStatus(response.data.message)

        }else{
            setloginStatus(response.data[0].email);
        }
    })

}




    return(
        <div>
            <form>

                <h4>LOGIN HERE</h4>
                <label htmlFor="username">username</label>&nbsp; &nbsp;
                <input className="text-input" type="text" name="username" placeholder="enter your user name" onChange={ (e) =>{setUsername(e.target.value)}}/>
<br></br> <br></br>

                <label htmlFor="password">password</label>&nbsp; &nbsp;
                <input className="text-input" type="text" name="password" placeholder="enter your user password"onChange={ (e) =>{setPassword(e.target.value)}}/>

<br></br>
                <button type="submit" className="button" onClick={login} value={login}>submit</button><br></br>
                
<h1 className="text-blue-700">{loginStatus}</h1>


                {/* <label htmlFor="username">username</label>
                <input className="text-input" type="text" name="username" placeholder="enter your user name"> </input> */}

</form><br></br>  <br></br>
<br></br>  <br></br>
{/* cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc */}
<form>
                <h4>REGISTER HERE</h4> <br></br>
                <label htmlFor="email">Email Address</label> &nbsp; &nbsp;
                <input className="text-input" type="text" name="email" placeholder="enter your email address" onChange={ (e) =>{setEmail(e.target.value)}}/> <br></br>
<br></br>
                <label htmlFor="username">username</label>&nbsp; &nbsp;
                <input className="text-input" type="text" name="username" placeholder="enter your user name"onChange={ (e) =>{setUsername(e.target.value)}}/> <br></br>
<br></br>

                <label htmlFor="password">password</label>&nbsp; &nbsp;
                <input className="text-input" type="text" name="password" placeholder="enter your user password" onChange={ (e) =>{setPassword(e.target.value)}}/> 
<br></br>
                <button type="submit" className="button" onClick={register} value={login}>submit</button><br></br>


<h1 className="text-blue-700">{registerStatus}</h1>

            </form>
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