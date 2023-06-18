$(document).ready(function () {
    var containerEl = document.getElementById('container');



    // This function will take user input to build the request link for the API call
    var selectedCardData = localStorage.getItem('selectedCard');

    if (selectedCardData) {
        // Parse the selected card data into an object
        var selectedCard = JSON.parse(selectedCardData);

        // Manipulate the DOM to display the recipe details
        var recipeContainer = document.getElementById('recipeContainer');

        var titleEl = document.createElement('h2');
        titleEl.textContent = selectedCard.label;
        recipeContainer.appendChild(titleEl);

        var imageEl = document.createElement('img');
        imageEl.classList.add('card-img-main');
        imageEl.src = selectedCard.image;
        recipeContainer.appendChild(imageEl);

        var ingredientsEl = document.createElement('ul');
        selectedCard.ingredients.forEach(function (ingredient) {
            var liEl = document.createElement('li');
            liEl.textContent = ingredient.text;
            ingredientsEl.appendChild(liEl);
        });
        recipeContainer.appendChild(ingredientsEl);
    }

    function createCard(recipe) {
        // Create a div to hold the card
        var cardEl = document.createElement('div');
        cardEl.classList.add('card');

        var titleEl = document.createElement('a');
        titleEl.textContent = recipe.label;
        titleEl.href = 'endpoint.html'; // Set the URL for the recipe label
        titleEl.target = '_blank'; // Open the URL in a new tab
        titleEl.addEventListener('click', function () {
            localStorage.setItem('selectedCard', JSON.stringify(recipe));

        });

        cardEl.appendChild(titleEl);

        var imageEl = document.createElement('img');
        imageEl.classList.add('card-img-top');
        imageEl.src = recipe.image;
        cardEl.appendChild(imageEl);

        var ingredientsEl = document.createElement('ul');
        recipe.ingredients.forEach(function (ingredient) {
            var liEl = document.createElement('li');
            liEl.textContent = ingredient.text;
            ingredientsEl.appendChild(liEl);
        });
        cardEl.appendChild(ingredientsEl);

        return cardEl;
    }
});