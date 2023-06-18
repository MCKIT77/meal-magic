$(document).ready(function () {

    //this is what you play the youtube video iframe inside of
    var videoContainerEl = document.getElementById('videoContainer');



    // This function will take user input to build the request link for the API call
    var selectedCardData = localStorage.getItem('selectedCard');

    if (selectedCardData) {
        // Parse the selected card data into an object
        var selectedCard = JSON.parse(selectedCardData);

        // Manipulate the DOM to display the recipe details
        var recipeContainer = document.getElementById('recipeContainer');

        var titleEl = document.createElement('h2');
        titleEl.classList.add('card-header');
        titleEl.textContent = selectedCard.label;
        recipeContainer.appendChild(titleEl);



        var imageEl = document.createElement('img');
        imageEl.classList.add('card-img-main');
        imageEl.src = selectedCard.image;
        recipeContainer.appendChild(imageEl);

        var ingredientsEl = document.createElement('ul');
        selectedCard.ingredients.forEach(function (ingredient) {
            var liEl = document.createElement('li');
            liEl.classList.add('card-body');
            liEl.textContent = ingredient.text;
            ingredientsEl.appendChild(liEl);
        });
        recipeContainer.appendChild(ingredientsEl);


        var urlEl = document.createElement('a');
        urlEl.classList.add('link');


        urlEl.href = selectedCard.url;
        urlEl.target = '_blank';
        urlEl.textContent = selectedCard.url;
        recipeContainer.appendChild(urlEl);

        recipeContainer.appendChild(document.createElement('br'));

        var backBtn = document.createElement('a');
        backBtn.href = './index.html'
        backBtn.textContent = 'Back to Homepage';
        recipeContainer.appendChild(backBtn);

    }


});