const fs = require('fs');
const path = require('path')
const express = require('express');
const app = express();
app.use(express.static( `${__dirname}/client/build` ))

const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

app.get('/api/programs', (req, res) => {
    res.json(data.programs);
});
app.get('/api/projects', (req, res) => {
    res.json(data.projects);
});
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


