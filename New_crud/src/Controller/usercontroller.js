import User from "../Models/User.js";
import express from 'express'

export const  Postun =  async (req, res) => {
	try {
		const user = new User(req.body);
		await user.save();
		res.json(user);
	} catch (error) {
		console.log(error);
	}
}

export const Getfun = async (req, res) => {
	try {
		let data = await User.find();
		res.json(data);
	} catch (error) {
		console.log(error);
	}
};

export const Getonefun = async (req, res) => {
	try {
		let data = await User.findById(req.params.id);
		res.json(data);
	} catch (error) {
		console.log(error);
	}
}


export const Updatefun = async (req, res) => {
	try {
		let data = await User.findByIdAndUpdate(req.params.id, req.body);
		res.json({ data, message: "Edited" });
	} catch (error) {
		console.log(error);
	}
};

export const Deletefun = async (req, res) => {
	try {
		let data = await User.findByIdAndDelete(req.params.id);
		res.json({ data, message: "deleted" });
	} catch (error) {
		console.log(error);
	}
};