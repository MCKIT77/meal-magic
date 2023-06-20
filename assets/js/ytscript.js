// function searchYouTube(recipeId) {
//   // Get the video link for the selected recipe (replace this with your own logic)
//  // var videoLink = getVideoLinkForRecipe(recipeId);

//   // Extract the video ID from the link
//   //var videoId = getVideoId(videoLink);
//   var recipeQuery = document.querySelector('card-header'); 
//   console.log(recipeQuery);
//   // Create the API request URL using the video ID
//   var youtubeApiKey = 'AIzaSyBL4yI-cDYDAwEF2igoJsxRKm_nJsBbyio';
//   var youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + 'chicken noodle soup' + '&key=' + youtubeApiKey;
//   var videoContainerEl = document.getElementById('videoContainer');

//   // Sends the API request
//   fetch(youtubeApiUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // Extract the video ID from the API response
//       console.log(data)
//       var videoId = data.items[0].id.videoId;

//       // Create the YouTube video URL
//       var youtubeUrl = 'https://www.youtube.com/watch?v=' + videoId;

//       // Create the YouTube video iframe
//       var iframeEl = document.createElement('iframe');
//       iframeEl.width = '640';
//       iframeEl.height = '360';
//       iframeEl.src = 'https://www.youtube.com/embed/' + videoId;
//       iframeEl.frameborder = '0';
//       iframeEl.allowfullscreen = true;

//       // Clear the video container
//       videoContainerEl.innerHTML = '';

//       // Append the iframe to the video container
//       videoContainerEl.appendChild(iframeEl);
//     })
//     .catch(function (error) {
//       console.log('Error:', error);
//     });
// }

// function getVideoId(videoLink) {
//   // Get the video ID from the link
//   var videoId = '';

//   // Check to see if the link contains a video ID
//   if (videoLink.includes('youtube.com')) {
//     var url = new URL(videoLink);
//     videoId = url.searchParams.get('v');
//   } else if (videoLink.includes('youtu.be')) {
//     var parts = videoLink.split('/');
//     videoId = parts[parts.length - 1];
//   }

//   return videoId;
// }

// // Recipe click event handler
// // function handleRecipeClick(recipeId) {
// //   // Call the function to search and play the YouTube video
// //   searchYouTube(recipeId);
// // }

// // Example usage
// // var recipeId = ''; 
// // handleRecipeClick(recipeId);
// $(document).ready(searchYouTube());
