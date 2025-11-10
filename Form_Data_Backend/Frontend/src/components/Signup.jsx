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
       try {
					const response = await axios.post(
						"http://localhost:8000/signup",
						Userdata
					);
					console.log("Signup successful:", response.data);
					alert("User registered successfully!");
				} catch (error) {
					console.error("Error during signup:", error);
					alert("Signup failed. Please try again.");
				}
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
