//making sure document is ready before we run our code
$(document).ready(function () {
    var containerEl = document.getElementById('container');
    var baseEdamamUrl = 'https://api.edamam.com/api/recipes/v2?type=public';
    var authUrl = 'app_id=3363fcd5&app_key=fee91a78bd642adc08094cc80cd02704';
    var searchBtnEl = $('#searchBtn');



    // This function will take user input to build the request link for the API call
    function buildReq(event) {
        event.preventDefault();
        event.stopPropagation();

        if (event.target === searchBtnEl[0]) {
            var queryQ = $('#q').val();
            var healthQ = [];
            var dietQ = [];

            // Get selected health options
            $('input[name="health"]:checked').each(function () {
                healthQ.push($(this).val());
            });

            // Get selected diet options
            $('input[name="diet"]:checked').each(function () {
                dietQ.push($(this).val());
            });

            // Build the request URL with query, health, and diet parameters
            var endReqUrl = `${baseEdamamUrl}&q=${encodeURIComponent(queryQ)}&${authUrl}&imageSize=LARGE`;

            healthQ.forEach(function (option) {
                endReqUrl += `&health=${encodeURIComponent(option)}`;
            });

            dietQ.forEach(function (option) {
                endReqUrl += `&diet=${encodeURIComponent(option)}`;
            });

            console.log(endReqUrl);

            getReq(endReqUrl);
        }
    }

    function createCard(recipe) {
        // Create a div to hold the card
        var cardEl = document.createElement('div');
        cardEl.classList.add('card');

        var titleEl = document.createElement('a');
        titleEl.classList.add('card-header');
        titleEl.textContent = recipe.label;
        titleEl.href = 'endpoint.html';
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
            liEl.classList.add('card-body');
            ingredientsEl.appendChild(liEl);
        });

        cardEl.appendChild(ingredientsEl);

        return cardEl;
    }

    function displayRecipes(data) {
        containerEl.textContent = '';
        data.hits.forEach(function (hit) {
            var recipe = hit.recipe;
            var cardEl = createCard(recipe);
            containerEl.appendChild(cardEl);
        });
    }

    function getReq(endReqUrl) {
        fetch(endReqUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                displayRecipes(data);
            });
    }


    searchBtnEl.on('click', buildReq);
});