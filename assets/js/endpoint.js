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
        // document.location.href = `?${selectedCard.label}`;




        var imageEl = document.createElement('img');
        imageEl.classList.add('card-img-alt');
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

        var recipeQuery = document.querySelector('.card-header').textContent;
        // Create the API request URL using the video ID
        var youtubeApiKey = 'AIzaSyBL4yI-cDYDAwEF2igoJsxRKm_nJsBbyio';
        var youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + recipeQuery + '&key=' + youtubeApiKey;
        var videoContainerEl = document.getElementById('videoContainer');

        // Sends the API request
        fetch(youtubeApiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // Extract the video ID from the API response
                console.log(data)
                var videoId = data.items[0].id.videoId;

                // Create the YouTube video URL
                var youtubeUrl = 'https://www.youtube.com/watch?v=' + videoId;

                // Create the YouTube video iframe
                var iframeEl = document.createElement('iframe');
                iframeEl.width = '640';
                iframeEl.height = '360';
                iframeEl.src = 'https://www.youtube.com/embed/' + videoId;
                iframeEl.frameborder = '0';
                iframeEl.allowfullscreen = true;

                // Clear the video container
                videoContainerEl.innerHTML = '';

                // Append the iframe to the video container
                videoContainerEl.appendChild(iframeEl);
            })
            .catch(function (error) {
                console.log('Error:', error);
            });

    }


});