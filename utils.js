export function renderIngredient(ingredientForm) {
    const li = document.createElement('li');
    li.textContent = `${ingredientForm.quantity} ${ingredientForm.ingredient}`;
    return li;
}
export function renderMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.name} - ${meal.count} Ingredients`;
    return li;
}
