const express = require('express');
const app = express();
const path = require('path');
const {db,syncAndSeed, models: {Company, Model}} = require('./db')

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/companies', async(req,res,next) => {
    try{
        const companies = await Company.findAll()
        res.send(companies)

    }catch(ex){
        next(ex)
    }
})

app.get('/api/companies/:id', async(req, res, next) => {
    try{
        
    }catch(ex){
        next(ex)
    }
})



const init = async() => {
    try{
        await db.authenticate()
        await syncAndSeed()
        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`));

    }catch(ex){
        console.log(ex)
    }
}

init()
