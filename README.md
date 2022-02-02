## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

HTML

-   Form element with two inputs, one for ingredients type:text.. one for quantity type:number.

-   Type:submit button((js)event listener for 'preventDefault' and FormData(form) form =
    {ingredients: formData.get('ingredients')}...fame for quantity but Number )

-   FEATURE PLAN (ORDER OF OPERATIONS)
    Add Ingredients Feature

Make the form
Add the form event listener (VALIDATE using console.log)----------
ACP----------
TDD `<li>` render function--------------
ACP-----
create ingredients array variable--------------
push form data to the ingredients array----
add your `<ul>` to the HTML----
add renderIngredients function (loop through all the ingredients, create an LI, render to page)-----
ACP-----
Remove Last Item-------

Add the button-----
Add the event listener-------
Pop off the last element---------
render the ingredients------
ACP
Save Meal Function

Add the input and button to HTML
Add the event listener, and validate it works
ACP
TDD `<li>` render function
ACP
create meals array variable
push the meal info on the array
add `<ul>` to the HTML
add renderMeals function (loop through all the meals, create an LI and render to the page)
ACP
reset the ingredients
render the ingredients
Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
