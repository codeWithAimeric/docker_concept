const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Note = require('./Note');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

app.get('/api/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json({message: "Fetched notes successfully!", notes});    
    }catch(err){
        res.status(500).json({message: "Fetching notes failed, please try again later.", err});
    }
})

app.post('/api/notes', async (req, res) => {
    try {
        const newNote = new Note({
            title: req.body.title,
            content: req.body.content
        })
        const savedNote = await newNote.save();
        res.status(200).json({message: "Saved notes successfully!", data: savedNote});    
    }catch(err){
        res.status(500).json({message: "Error creating note.", err});
    }
})

app.all('*', (req, res) => {
    res.status(404).json({message: "Not found"});
})

app.listen(4000, () => {
    console.log('Server started on port 4000');
})