const express = require('express')
const chefsData = require('./data/chefsData.json')
const recipes = require('./data/recipes.json')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Chef Recipe Hunter server is running');
})
app.get('/chefsData',(req,res)=>{
    res.send(chefsData);
})
app.get('/recipes',(req,res)=>{
    res.send(recipes);
})
app.get('/recipes/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const chefRecipes = recipes.filter(recipe=> parseInt(recipe.chef_id) === id);
    res.send(chefRecipes)
})

app.listen(port,()=>{
    console.log(`Chef Recipe Hunter is running on ${port}`);
})