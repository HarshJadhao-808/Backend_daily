import BooksModel from "../models/booksmodel.js"

export const addbook = async(req,res) => {
  
try {
    const {title , author , year} = req.body
    
    const Book = await BooksModel.create({
        title,
        author,
        year
    })
    res.json({message:"New book added " , Book})
    
} catch (error) {
    console.log(error);
    
}

    
}


export const showbooks = async (req,res) => {
    try {
        let books = await BooksModel.find()
        res.json({message:"All books",books})
    } catch (error) {
        console.log(error)
    }   
}


export const showonebook = async (req,res) => {
try {
    let book = await BooksModel.findById(req.params.id)
    res.json({message : "One book",book})
} catch (error) {
    console.log(error)
}
}

export const changebook = async (req,res) => {
    try {
        let updatedbook = await BooksModel.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:" Updated ",updatedbook})
    } catch (error) {
        console.log(error)
    }
}


export const deletebook = async (req,res) => {
    try {
        let deleted = await BooksModel.findByIdAndDelete(req.params.id)
        res.json({message:"Book Deleted", deleted})
    } catch (error) {
        console.log(error)
    }
}