const express = require('express');
const fs = require('fs')
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api',apiRoutes)
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
