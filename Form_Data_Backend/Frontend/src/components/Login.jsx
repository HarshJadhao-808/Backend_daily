import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
const Login = () => {
   const [user,setUser] = useState({
    email:"",
    password:""
   })
  const logFun = async() => {
      event.preventDefault()
          try {
        const response = await axios.post("http://localhost:8000/user/login", user);
        console.log("Signup Successfull", response.data)
        Swal.fire({
					text: "Login Successfull !",
					icon: "success",
				});
      } catch (error) {
        console.log("Signup Failed", error)
       Swal.fire({
                  text: "Login Failed !",
                  icon: "error",
                });
      }
  }

  const handlechange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  }
  return (
		<div className='auth_page'>
			<form className="loginform" onSubmit={logFun}>
				<h1 style={{ textAlign: "center", fontSize: " 37.83px" }}>Login</h1>
				<div className="colored_box_input">
					<div className="inputholder_div">
						<div className="input_image_div">
							<img src="../../src/assets/email.svg" alt="" />
						</div>
						<input
							className="signupinputs"
							type="email"
							onChange={handlechange}
							name="email"
							placeholder="E-mail..."
						/>
					</div>
				</div>
				<br />
				<div className="colored_box_input">
					<div className="inputholder_div">
						<div className="input_image_div">
							<img src="../../src/assets/password.svg" alt="" />
						</div>
						<input
							className="signupinputs"
							type="password"
							onChange={handlechange}
							name="password"
							placeholder="Password..."
						/>
					</div>
				</div>
        <div style={{display:"flex",marginTop:"20px",marginLeft:"15px", justifyContent:"space-between"}}><div><input type="radio" /><p style={{fontSize:"16px",fontFamily:"sans-serif",display:"inline-block"}}>Remember me</p></div> <p style={{color:"#939393"}}>Forget Password</p></div>
        <br /><br /> <br />
				<input className="signupinputs_submit" value="Login" type="submit" />
			</form>
		</div>
	);
}

export default Login
