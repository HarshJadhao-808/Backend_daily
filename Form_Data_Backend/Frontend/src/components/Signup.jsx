import React, { useState } from 'react'
import axios from 'axios'
import "./Signup.css";

const Signup = () => {

  const [Userdata,setUserdata] = useState({
    name:"",
    email:"",
    password:"",
  })

    const handlechange = (e) => {
      setUserdata({ ...Userdata, [e.target.name]: e.target.value });
    };


    const signFun = async(event) => {
      event.preventDefault()
      try {
        const response =  await axios.post( "http://localhost:5173/Signup", Userdata)
        console.log("Signup Successfull", response.data)
        alert("Signup Successfull !")
      } catch (error) {
        console.log("Signup Failed", error)
        alert("Error Signup !")
      }
      };
      
   
  return (
    <div>
      <form onSubmit={signFun}>
        <input type="text"  onChange={handlechange} name='name'  placeholder='User name ... '/>
        <input type="email"  onChange={handlechange} name='email' placeholder='E-mail...'/>
        <input type="password" onChange={handlechange} name='password' placeholder='Password...'/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Signup
