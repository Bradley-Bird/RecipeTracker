// import functions and grab DOM elements
const form = document.getElementById('add-ingredient-form');
const iList = document.getElementById('ingredient-list');
const rList = document.getElementById('saved-recipe-list');

const remove = document.getElementById('removeBtn');
const save = document.getElementById('save-recipeBtn');

// let state
let ingredients = [];
let recipes = [];

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
});
// use user input to update state
// update DOM to reflect the new state
