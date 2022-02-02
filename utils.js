export function renderIngredient(ingredientForm) {
    const li = document.createElement('li');
    li.textContent = `${ingredientForm.quantity} ${ingredientForm.ingredient}`;
    return li;
}
