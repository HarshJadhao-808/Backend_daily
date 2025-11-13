import React, { useState } from 'react'
import axios from 'axios'
import Swal from "sweetalert2";

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
        const response = await axios.post("http://localhost:8000/user/signup", Userdata);
        console.log("Signup Successfull", response.data)
         Swal.fire({
                  text: "Signup Successfull !",
                  icon: "success",
                });
      } catch (error) {
        console.log("Signup Failed", error)
          Swal.fire({
						text: "Signup Failed !",
						icon: "error",
					});
      }
      };
      
   
  return (
		<div className="auth_page">
			<form className="signupform" onSubmit={signFun}>
				<h1 style={{ textAlign: "center", fontSize: " 37.83px" }}>signup</h1>
				<div className="colored_box_input">
					<div className="inputholder_div">
						<div className="input_image_div">
							<img src="../../src/assets/user.svg" alt="" />
						</div>
						<input
							className="signupinputs"
							type="text"
							onChange={handlechange}
							name="name"
							placeholder="User name ... "
						/>
					</div>
				</div>{" "}
				<br />
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
				</div>{" "}
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
				</div>{" "}
				<br /> <br /> <br />
				<input className="signupinputs_submit" value="Signup" type="submit" />
			</form>
		</div>
	);
}

export default Signup
