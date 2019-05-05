let recipeList = {
    "Cream Scones with Currants": {
        title:"Cream Scones with Currants",
        ingredients:"flour,baking powder, sugar, salt",
        instructions:"Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. ",
    },
    "Cheese Grits": {
        title:"Cheese Grits",
        ingredients:"salt, water, milk",
        instructions:"Place the milk, water, and salt into a large, heavy-bottomed pot over medium-high heat and bring to a boil. Once the milk mixture comes to a boil, gradually add the cornmeal while continually whisking. Once all of the cornmeal has been incorporated, decrease the heat to low and cover. Remove lid and whisk frequently, every 3 to 4 minutes, to prevent grits from sticking or forming lumps; make sure to get into corners of pot when whisking. Cook for 20 to 25 minutes or until mixture is creamy.",
    }
};

function addRecipe({title, ingredients, instructions}){
    recipeList[title]={title, ingredients, instructions};
};

const recipe = {
    recipeList,
    addRecipe
};

module.exports = recipe;