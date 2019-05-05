"use strict";
(function IIFE(){
    document.querySelector('#root').addEventListener('click',(e) => {
        console.log(e.target.classList);
        if(e.target.classList.contains("detailBtn")){
            e.preventDefault();
            showDetails(e.target.id);
        }else if(e.target.id === "addBtn"){
            e.preventDefault();
            addRecipeSection();
        }else if(e.target.id === "submitBtn"){
            e.preventDefault();
            toSubmitRecipe();
        }else if(e.target.id === "backBtn"){
            e.preventDefault();
            removeRecipeSection();
        }
    });

    function addRecipeSection(){
        removeRecipeSection();
        const root = document.querySelector('#root');
        const add = document.createElement("div");
        add.classList.add("addRecipeSection");
        add.innerHTML=(`<div class="inputLabelPair">
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
                    </div>`);
        root.appendChild(add);
    };

    function removeRecipeSection(){
        const recipeSection = document.querySelector(".addRecipeSection");
        if(recipeSection)
            recipeSection.parentNode.removeChild(recipeSection);
    };

    function toSubmitRecipe() {
        const title=document.querySelector(".inputLabelPair .title").value.trim();
		const ingredients=document.querySelector(".inputLabelPair .ingredient").value.trim();
        const instructions=document.querySelector(".inputLabelPair .instruction").value.trim();
        fetch('/recipes/',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title,ingredients,instructions})
        })
        .then( response => {
            if(response.ok) {
              refresh();
            }
        });
        removeRecipeSection();
    };
    
    function refresh(){
        fetch('/recipes/')
        .then( response => {
            if(response.ok) {
                return response.json();
            }
        })
        .then( recipes => {
            const recipelist = recipes.map(recipe => `<li>
                <form action="/recipeDetails" method="GET">
                    <div class="recipe">
                        <input type="hidden" name="recipeTitle" value='${recipe}'>
                        <button class="detailBtn" id="${recipe}" type="submit">${recipe}</button>
                    </div>
                </form>
            </li>
        `).join('');
        document.querySelector('.recipeList').innerHTML = recipelist;
        })
    };

    function showDetails(title){
        removeRecipeSection();
        fetch("recipes/"+title)
        .then( response => {
            if(response.ok){
                return response.json();
            }
        })
        .then(recipe => {
            removeRecipeSection();
            const root = document.querySelector('#root');
            const add = document.createElement("div");
            add.classList.add("addRecipeSection");
            add.innerHTML=(`<div class="inputLabelPair">
                                    <label>Title: </label>
                                    <label>${recipe.title}</label>
                                </div>
                                <div class="inputLabelPair">
                                    <label>Ingredients: </label>
                                    <label>${recipe.ingredients}</label>
                                </div>
                                <div class="inputLabelPair">
                                    <label>Instructions: </label>
                                    <label>${recipe.instructions}</label>
                                </div>
                                <button id="backBtn">Back to Main</button>
                        </div>`);
            root.appendChild(add);
        }) 
    }
})();