const express = require('express');
const app = express();
const PORT = 3000;
const recipe = require('./recipe');
const recipeWeb = require('./recipeWeb');

let recipeList = recipe.recipeList;

app.get('/', (req,res)=>{
    res.send(recipeWeb.recipePage(recipeList));
});

app.get('/recipeDetails',(req,res) => {
    const recipeTitle = req.query.recipeTitle;
    const specificRecipe = recipeList[recipeTitle];
    res.send(recipeWeb.specificRecipePage(specificRecipe));
});

app.get('/addRecipe', (req,res) => {
    res.send(recipeWeb.addRecipePage());
});

app.post('/addRecipe',express.urlencoded({ extended: false }), (req, res) => {
    const title = req.body.title;
    const ingredients = req.body.ingredient;
    const instructions = req.body.instruction;
    recipe.addRecipe({title,ingredients,instructions});
    res.send(recipeWeb.recipePage(recipeList));
})

//REST
app.get("/recipes/",(req,res)=>{
	res.json(Object.keys(recipeList));
})

app.get("/recipes/:title", (req,res) => {
    const title = req.params.title;
    res.json(recipeList[title]);
})

app.post("/recipes/",express.json(),(req,res)=>{
    const title = req.body.title;
    recipeList[title] = req.body;
    res.sendStatus(200);
});

app.use(express.static('./public'));
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))