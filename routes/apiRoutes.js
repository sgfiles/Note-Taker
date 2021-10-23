const path = require('path');
const fs = require('fs')
const router = require('express').Router();
const { text } = require('express');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid  = require('../helpers/uuid');

//Get for retrieving notes
router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// POSt to submit a not
router.post('/notes', (req, res) => {
    const {title, text} = req.body;

    if (title && text) {
        const newNote = {
            title, text, id: uuid(),
        };
    }
        readAndAppend(newNote, './db/db.json');
        res.json('Note added');
     
    
  
})

module.exports = router;
