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

var containerEl = document.getElementById('container');
var reqUrl = "https://api.edamam.com/api/recipes/v2?type=public&q='chicken''noodles'&app_id=3363fcd5&app_key=fee91a78bd642adc08094cc80cd02704&health=tree-nut-free&imageSize=SMALL";
var baseEdamamUrl = 'https://api.edamam.com/api/recipes/v2?type=public';
var authUrl = 'app_id=3363fcd5&app_key=fee91a78bd642adc08094cc80cd02704';
var searchBtnEl = $('searchBtn');

//this function will take in user input to build the request link for the api call

function buildReq(event) {
    event.preventDefault();



    if (event.target === searchBtnEl) {

        var queryQ = $('q').val.trim();
        var healthQ = $('health').val.trim();
        var endReqUrl = `${baseEdamamUrl}&q=${queryQ}&${authUrl}&health=${healthQ}&imageSize=SMALL`;
        return endReqUrl
    }

    getReq(endReqUrl);









}

function handleLinkClick(event) {
    window.location.replace('endpoint.html');
}






function createCard(recipe) {

    //creates div to hold the card
    var cardEl = document.createElement('div');
    cardEl.classList.add('card');
    var titleEl = document.createElement('h2');
    titleEl.textContent = recipe.label;
    cardEl.appendChild(titleEl);
    var imageEl = document.createElement('img');

    imageEl.classList.add('card-img-top');
    //setting img element source to the apis image
    imageEl.src = recipe.image;
    cardEl.appendChild(imageEl);
    //creating unordered list to store the ingredients
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
            // console.log(response.json());
            return response.json();
        })
        .then(function (data) {
            displayRecipes(data);
        });
}

function getReqTest() {

    fetch(reqUrl)
        .then(function (response) {
            console.log(response.json());
            return response.json();
        })
        .then(function (data) {
            displayRecipes(data);
        });
}

searchBtnEl.on('click', buildReq);

=======
var reqUrl = "https://api.edamam.com/api/recipes/v2?type=public&q='chicken''noodles'&app_id=3363fcd5&app_key=fee91a78bd642adc08094cc80cd02704&health=tree-nut-free&imageSize=SMALL";

function getReq() {
    fetch(reqUrl)
        .then(function (response) {
           console.log(response.json);
        })

}

getReq();

