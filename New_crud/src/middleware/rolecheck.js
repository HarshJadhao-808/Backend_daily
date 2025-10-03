const rolecheck = (req,res,next) => {
try {
    let role = req.headers.role
    if (role == "admin"){
        next()
    }else{
        res.status(401).send("You are not admin")
    }
} catch (error) {
    console.log(error)
}
}

export default rolecheck