const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const notes_route = require('./routes/notes');
const user_route = require('./routes/user');

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose    
    .connect(process.env.DB_URL, {})
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
console.log("here");

app.use('/notes', notes_route);
app.use('/user', user_route);

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
});
