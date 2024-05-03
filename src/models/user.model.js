const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email: {
            type: String,   
            required: true
        },
        password:{
            type: String,
            required: true,
        }
    },
    {timestamps:true}
)

const user_db = mongoose.model('user_db', userSchema);
module.exports = user_db