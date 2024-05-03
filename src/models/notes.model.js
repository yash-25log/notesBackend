const mongoose = require('mongoose');
const noteSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        content: {
            type: String,   
            required: true
        },
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        }


    },
    {timestamps:true}
)

noteSchema.index({
    title: "text",
    content: "text",
    // location: "text",
  });
  
const notes_db = mongoose.model('notes_db', noteSchema);
module.exports = notes_db


