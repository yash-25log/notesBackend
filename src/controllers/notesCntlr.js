const notes_db = require('../models/notes.model')


async function addNote(req, res){
    const note = req.body
    
    try {
        await notes_db.create(note);
        res.status(201).json({message: 'Note added successfully'})
    } catch (error) {

      console.log(error)
        res.status(409).json({message: error.message})
    }
}

async function getNote(req, res){
    const id = req.query.user_id;
    // console.log(id);
     try{
        const data = await notes_db.find({user_id: id});
        res.status(200).json({message:"Notes received", data : data})
     }
     catch(error){
        res.status(400).json({message: error.message})
     }
}
async function globalSearch(req, res) {
    try {
      const query = req.query.q; // Get the search query from the request query parameters
      const userId = req.query.userId;
      const result = await notes_db.find({
        user_id: userId,
        $or: [
          { title: { $regex: query, $options: "i" } }, // Case-insensitive matching for name
          { content: { $regex: query, $options: "i" } }, // Case-insensitive matching for description
        //   { location: { $regex: query, $options: "i" } }, // Case-insensitive matching for location
        //   { type: { $regex: query, $options: "i" } }, // Case-insensitive matching for location
        ],
      });
      return res.status(200).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

module.exports = {addNote,getNote, globalSearch}