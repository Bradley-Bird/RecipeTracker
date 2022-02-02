import { renderIngredient, renderMeal } from '../utils.js';

const test = QUnit.test;

test('should return ingredients', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>4 Strips of bacon</li>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderIngredient({ quantity: 4, ingredient: `Strips of bacon` });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('should return saved meals', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>bacon/eggs - 2 Ingredients</li>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderMeal({ name: 'bacon/eggs', count: 2 });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
