import React, { useState } from 'react'
import axios from 'axios'
const Signup = () => {

  const [Userdata,setUserdata] = useState({
    name:"",
    email:"",
    password:"",
  })
    const Loginfun = async() => {
      event.preventDefault()
      
      }
      
      const handlechange = (e) => {
     setUserdata({...Userdata, [e.target.name] : e.target.value})
      
    }
  return (
    <div>
      <form onSubmit={Loginfun}>
        <input type="text"  onChange={handlechange} name='name'  placeholder='User name ... '/>
        <input type="email"  onChange={handlechange} name='email' placeholder='E-mail...'/>
        <input type="password" onChange={handlechange} name='password' placeholder='Password...'/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Signup
