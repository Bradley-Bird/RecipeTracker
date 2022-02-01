import { renderIngredients } from '../utils.js';

const test = QUnit.test;

test('should return ingredients', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>4 Strips of bacon</li>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderIngredients({ quantity: 4, ingredient: `Strips of bacon` });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
