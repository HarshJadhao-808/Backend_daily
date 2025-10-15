import usermodel from "../models/usermodel.js";
import bcrypt from "bcrypt";

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
		res.send(error.message);
	}


};


export const logincontroller = async () => {
	const {name , email} = req.body

	const userexist = await usermodel.find({email})

	if(!userexist) res.status(400).send("Invalid credentials")

		
} 