// import functions and grab DOM elements
import { renderIngredient } from './utils.js';
const form = document.getElementById('add-ingredient-form');
const iList = document.getElementById('ingredient-list');
const rList = document.getElementById('saved-recipe-list');

const remove = document.getElementById('removeBtn');
const save = document.getElementById('save-recipeBtn');

// let state
let ingredients = [];
let recipes = [];

//loop through ingredients and update the view
function renderIngredients() {
    for (let ingredient of ingredients) {
        const li = renderIngredient(ingredient);
        iList.appendChild(li);
    }
}

// set event listeners
// get user input
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    // console.log('data', data);

    const ingredientForm = {
        ingredient: data.get('ingredient'),
        quantity: Number(data.get('quantity')),
    };
    // console.log('ingredientForm',ingredientForm);
    ingredients.push(ingredientForm);
    renderIngredients();
    form.reset();
});
// use user input to update state
// update DOM to reflect the new state
