// var containerEl = document.getElementById('container');


// var reqUrl = "https://api.edamam.com/api/recipes/v2?type=public&q='chicken''noodles'&app_id=3363fcd5&app_key=fee91a78bd642adc08094cc80cd02704&health=tree-nut-free&imageSize=SMALL";

// function getReq() {
//     fetch(reqUrl)
//         .then(function (response) {
//            console.log(response.json);
//         })

// }

// getReq();

// var containerEl = document.getElementById('container');


// var reqUrl = "https://api.edamam.com/api/recipes/v2?type=public&q='chicken''noodles'&app_id=3363fcd5&app_key=fee91a78bd642adc08094cc80cd02704&health=tree-nut-free&imageSize=SMALL"

// function getReq() {
//     fetch(reqUrl)
//         .then(function (response) {

//             console.log(response.json());
//             return response.json();
//         })
//         .then(function (data) {

//             console.log(data);
//             for (var i = 0; i < data.length; i++) {
//                 var listItem = document.createElement('li');
//                 listItem.textContent = data.hits[i].recipe.label;
//                 containerEl.appendChild(listItem);
//             }
//         })



// }

// getReq();

// youtube api key "AIzaSyCLr16hvUGxzj9C64azF2C16DkoJtcfC-c" "AIzaSyCwMEUm1zPT5d-gYMJ-YQV8GRcWVTf_bVg"

$(document).ready(function () {

    var containerEl = document.getElementById('container');
    var reqUrl =
        'https://api.edamam.com/api/recipes/v2?type=public&q=chicken%20noodles&app_id=3363fcd5&app_key=fee91a78bd642adc08094cc80cd02704&health=tree-nut-free&imageSize=SMALL';
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
            var endReqUrl = `${baseEdamamUrl}&q=${queryQ}&${authUrl}&imageSize=LARGE`;

            if (healthQ.length > 0) {
                endReqUrl += `&health=${healthQ.join(',')}`;
            }

            if (dietQ.length > 0) {
                endReqUrl += `&diet=${dietQ.join(',')}`;
            }
            console.log(endReqUrl);

            getReq(endReqUrl);
        }
    }


    function createCard(recipe) {
        // Create a div to hold the card
        var cardEl = document.createElement('div');
        cardEl.classList.add('card');

        var titleEl = document.createElement('h2');
        titleEl.textContent = recipe.label;
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