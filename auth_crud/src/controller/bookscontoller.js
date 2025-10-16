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