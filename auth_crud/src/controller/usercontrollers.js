import usermodel from "../models/usermodel.js";
import bcrypt from "bcrypt";
import dotenv  from "dotenv";
import jwt from "jsonwebtoken";


dotenv.config()

export const createuser = async (req, res) => {
	try {
		const { name, email, password, role } = req.body;

		const exist_user = await usermodel.findOne({ email });

		if (exist_user) {
			res.status(400).json({ message: "User already exists", exist_user });
		}


		const hashed_pass = await bcrypt.hash(password, 10);
		
        
        const user = await usermodel.create({
			name,
			email,
			password: hashed_pass,
			role,
		});


		res.json({ message: "User created ", user });


	} catch (error) {
        console.log(error)
		    res.status(500).json({ message: error.message });
	}


};


export const logincontroller = async (req,res) => {
	try {
		const { password, email } = req.body;

		const userexist = await usermodel.findOne({ email });

		if (!userexist) return res.status(400).send("Invalid credentials");

		const ismatch = bcrypt.compare(password, userexist.password);

		if (!ismatch) return res.status(400).send("invalid credentials");

		const token = jwt.sign(
			{
				name: userexist.name,
				password: userexist.password,
				email: userexist.email,
				role: userexist.role,
			},
			process.env.secret_key,
			{ expiresIn: "1h" } 
		);

		res.json({ message: "Login successful", token });
	} catch (error) {
		console.log(error)
	}	
} 