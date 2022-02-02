// import functions and grab DOM elements
import { renderIngredient } from './utils.js';
const form = document.getElementById('add-ingredient-form');
const iList = document.getElementById('ingredient-list');
const rList = document.getElementById('saved-meal-list');
const mealName = document.getElementById('meal-name');

const remove = document.getElementById('removeBtn');
const save = document.getElementById('save-mealBtn');

// let state
let ingredients = [];
let meals = [];

//loop through ingredients and update the view
function renderIngredients() {
    iList.textContent = '';
    for (let ingredient of ingredients) {
        const li = renderIngredient(ingredient);
        iList.appendChild(li);
    }
}

//button to remove last item of the ingredients array
remove.addEventListener('click', () => {
    ingredients.pop();
    renderIngredients();
    // console.log('remove');
});

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
save.addEventListener('click', (e) => {
    e.preventDefault();
    const name = mealName.value;
    const count = ingredients.length;
    meals.push({ name, count });
    console.log(name, count);
});
// use user input to update state
// update DOM to reflect the new state
