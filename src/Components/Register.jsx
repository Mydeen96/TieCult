import React from "react"; 
import auth from '../fireBase/Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
     export default function Login(){    
          const [error,setError] = React.useState({
               username : false,        
               email : false,           
               password : false,         
               passwordLength : false ,
               confirmPassword : false
            })
            
            const [inputs,setInput] = React.useState({
               username :"" ,        
               email : "",           
               password : "",         
               confirmPassword : ""  })

///handleChange function       
              function handleChange(event){
                const {name ,value} = event.target
                setInput((prevdata) => ({
                  ...prevdata,
                  [name]: value
                }))    
              }
              
//handleSubmiit function 
              async function handleSubmit(event){
                event.preventDefault()
                setError({
                  username : inputs.username === "",        
                  email : inputs.email === "",           
                  password : inputs.password === "",
                  passwordLength : (inputs.password.length > 1 && inputs.password.length < 6) ,         
                  confirmPassword :  inputs.confirmPassword.length > 1 ? (inputs.confirmPassword === inputs.password ? false : true) : false

                })                
               const isvalid  = Object.values(error).every((input) => input === false)
               if(isvalid){
                    try {
                         const userCreate = await createUserWithEmailAndPassword(auth , inputs.email ,inputs.password)
                         console.log( "signeup "), userCreate;
                         
                    } catch (firebaseError) {
                         console.error(firebaseError.message);

                    }
                    }

              }


     return(
               <form onSubmit={handleSubmit} >
                    <input 
                         type="text" 
                         name="username"     
                         id="username" 
                         placeholder="Username"
                         onChange={handleChange}
                         
                         />
                         {  error.username && <span className=" input-msg">*This field is required</span>}
                    <input 
                         type="email" 
                         name="email" 
                         id="email" 
                         placeholder="E-mail"
                         onChange={ handleChange}
                         
                         />
                         {  error.email && <span className=" input-msg">*This field is required</span>}
                    <input 
                         type="password" 
                         name="password" 
                         id="password" 
                         placeholder="Password"
                         onChange={ handleChange}
                         
                         />
                         {  error.password && <span className=" input-msg">*This field is required</span>}
                         {  error.passwordLength && <span className=" input-msg">Password must be at least 6 characters</span>}
                    <input 
                         type="password" 
                         name="confirmPassword" 
                         id="confirmPassword"
                         placeholder="Confirm Password"
                         onChange={ handleChange}
                         
                         />
                         {  error.confirmPassword && <span className=" input-msg">*The password does not match</span>}
                    <button id="submit">Submit</button>
               </form>
     )
     }

