const user_db = require('../models/user.model')

async function addUser(req, res){
    const user = req.body
    try {
        const data = await user_db.create(user);
        res.status(201).json({message: 'User added successfully', data : data })
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

async function loginUser(req, res){
    const user = req.body
    try {
        const data = await user_db.findOne({email: user.email, password: user.password});
        if(data){
            res.status(200).json({message: 'Login successful', data : data })
        
        }
        else{
            res.status(401).json({message: 'Invalid credentials'})
        }
    }
    catch (error) {
        res.status(409).json({message: error.message})
    }
}

module.exports = {addUser, loginUser};