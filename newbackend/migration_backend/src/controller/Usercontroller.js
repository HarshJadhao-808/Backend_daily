import User from '../Models/Usermodel.js'



export const UserSignup = async (req, res) => {
	const { name, email, password, role } = req.body;
	const added = await User.create({
		name,
		email,
		password,
		role,
	});
	res.json({ message: "USer created", added });
};