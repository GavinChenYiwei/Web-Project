const recipeWeb = {
    recipePage: function(recipe) {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <link rel="stylesheet" href="./style.css">
            </head>
            <body>
                <div id="root">
                    ${recipeWeb.getRecipeList(recipe)}
                    ${recipeWeb.addRecipe()}
                </div>
                <script src="./script.js"></script>
            </body>
            </html>
        `;
    },

    getRecipeList: function(recipe){
        return `<ol class="recipeList">` +
        Object.values(recipe).map( recipe => `
            <li>
                <form action="/recipeDetails" method="GET">
                    <div class="recipe">
                        <input type="hidden" name="recipeTitle" value='${recipe.title}'>
                        <button class="detailBtn" id="${recipe.title}" type="submit">${recipe.title}</button>
                    </div>
                </form>
            </li>
        `).join('') +
        `</ol>`;
    },

    specificRecipePage: function(recipe){
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <link rel="stylesheet" href="./style.css">
            </head>
            <body>
                <div id="root">
                    <div class="specificPage">
                        ${recipeWeb.getSpecificRecipe(recipe)}
                        <div class="btnBack">
                            <form action="/" method="GET">
                                <button id="backBtn">Back to Main</button>
                            </form>
                        </div>
                    </div>
                </div>
                <script src="./script.js"></script>
            </body>
            </html>
    `;
    },

    getSpecificRecipe: function(recipe){
        return `<div class="recipeDetail" id=${recipe.title}>
                    <p>Title: ${recipe.title}</p>
                    <p>Ingredients: ${recipe.ingredients}</p>
                    <p>Instructions: ${recipe.instructions}</p>
                </div>
        `
    },

    addRecipe: function(){
        return `
            <div class="outgoing">
                <form action="/addRecipe" method="GET">
                    <button id="addBtn">Add Recipe</button>
                </form>
            </div>
        `
    },

    addRecipePage: function() {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <link rel="stylesheet" href="./style.css">
            </head>
            <body>
                <div id="root">
                    <div class="addRecipePage">
                        <form action="/addRecipe" method="POST">
                            <div class="inputLabelPair">
                                <label>Title: </label>
                                <input required class="title" name="title" value="" placeholder="Enter the title"/>
                            </div>
                            <div class="inputLabelPair">
                                <label>Ingredients: </label>
                                <input required class="ingredient" name="ingredient" value="" placeholder="Enter the ingredient"/>
                            </div>
                            <div class="inputLabelPair">
                                <label>Instructions: </label>
                                <input required class="instruction" name="instruction" value="" placeholder="Enter the instruction"/>
                            </div>
                            <button id="submitBtn" type="submit">Submit</button>
                        </form>
                        <form action="/" method="GET">
                            <button id="backBtn">Back to Main</button>
                        </form>
                    </div>
                </div>
                <script src="./script.js"></script>
            </body>
            </html>
        `
    }
}

module.exports = recipeWeb;