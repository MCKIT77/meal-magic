// Execute the following code when the document is ready
$(document).ready(function() {
   
    // Select the <form> element and store it in the "searchForm" variable
    var searchForm = $('form');
    
    // Select the element with class "search-result" and store it in the "searchResultDiv" variable
    var searchResultDiv = $('.search-result');
    
     // Initialize an empty string variable "searchQuery" to store the search query
    var searchQuery = '';
   
    // Set the values for the APP_ID and APP_key variables for the API request
    var APP_ID = '3363fcd5';
    var APP_key = 'fee91a78bd642adc08094cc80cd02704';
    
    // Attach a submit event listener to the search form
    searchForm.on('submit', function(event) {
      
        // Prevent the default form submission behavior
      event.preventDefault();
      
        // Get the value of the input field inside the form and store it in the "searchQuery" variable
      searchQuery = $(this).find('input').val();
      
        // Call the fetchAPI function to make the API request
      fetchAPI();
      
    });
    
      // Attach a click event listener to elements with class "ion-icon"
    $('.ion-icon').on('click', function() {
        // Get the value of the input field inside the search form and store it in the "searchQuery" variable
      searchQuery = searchForm.find('input').val();
      
        // Call the fetchAPI function to make the API request
      fetchAPI();
      
    });
    // Declare an asynchronous function named fetchAPI
    async function fetchAPI() {
      
        // Construct the base URL for the API request using the searchQuery, APP_ID, and APP_key variables
      var baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=18`;
      
        // Make an asynchronous HTTP request to the API and store the response in the "response" variable
      var response = await fetch(baseURL);
      
        // Extract the JSON data from the response and store it in the "data" variable
      var data = await response.json();
      
        // Call the generateHTML function and pass the "hits" property of the data as an argument
      generateHTML(data.hits);
      
    }
    // Declare a function named generateHTML that takes "results" as a parameter
    function generateHTML(results) {
      
        // Declare an empty string variable "generatedHTML" to store the generated HTML
      var generatedHTML = '';
      
        // Iterate over each item in the "results" array using the forEach method
      results.forEach(function(result) {
        
        // Round the calorie value of the current item and store it in the "calories" variable
        var calories = Math.round(result.recipe.calories);
        
        // Append the HTML code for each item to the "generatedHTML" string
        generatedHTML += `
          <div class="item">
            <img src="${result.recipe.image}" alt="">
            <div class="flex-container">
              <h1 class="title">${result.recipe.label}</h1>
              <a class="view" href="${result.recipe.url}" target="_blank" rel="noopener noreferrer">view recipe</a>
            </div>
            <p class="item-data">${result.recipe.healthLabels.join(', ')}</p>
            <p class="item-data">${result.recipe.dietLabels.join(', ')}</p>
            <p class="item-data">Calories: ${calories}</p>
          </div>
        `;
        
      });
       // Set the HTML content of the searchResultDiv element to the "generatedHTML"
      searchResultDiv.html(generatedHTML);
     
    }
  });
  