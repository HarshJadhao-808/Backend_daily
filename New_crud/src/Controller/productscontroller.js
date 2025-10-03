import express from 'express'
import Products from '../Models/Products.js'
import products from '../Models/Products.js'


export const postfun = async(req,res) => {
    try {
       let product = new Products(req.body)
       await product.save()
       res.json(product)
    } catch (error) {
        console.log(error)
    }

}

export const getfun =async (req,res) => {
    try {
        let Products =await products.find()
        res.json(Products)
    } catch (error) {
        console.log(error)
    }
}



export const getone = async(req,res) => {
    try {
        let Products =await products.findById(req.params.id)
        res.json(Products)
    } catch (error) {
        console.log(error)
    }
}

export const updatefun = async(req,res) => {
    try {
        let Product = await products.findByIdAndUpdate(req.params.id,req.body)
        res.json(Product)
    } catch (error) {
        console.log(error)
    }
} 

export const deletefun = async(req,res) => {
    try {
        let Product = await products.findByIdAndDelete(req.params.id)
        res.json({Product,message:"Deleted"})
    } catch (error) {
        console.log(error)
    }
}