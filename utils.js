export function renderIngredients(ingredientForm) {
    const li = document.createElement('li');
    li.textContent = `${ingredientForm.quantity} ${ingredientForm.ingredient}`;
    return li;
}
