function searchYouTube(videoLink) {
    // Extract the video ID from the link
    var videoId = getVideoId(videoLink);
    
    // Create the API request URL using the video ID
    var youtubeApiKey = 'AIzaSyBL4yI-cDYDAwEF2igoJsxRKm_nJsBbyio';
    var youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + videoId + '&key=' + youtubeApiKey;
    
    // Sends the API request
    fetch(youtubeApiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Extract the video ID from the API response
        var videoId = data.items[0].id.videoId;
        
        // Create the YouTube video URL
        var youtubeUrl = 'https://www.youtube.com/watch?v=' + videoId;
        
        // Used to display the YouTube video link
        var linkEl = document.createElement('a');
        linkEl.href = youtubeUrl;
        linkEl.textContent = 'Watch Video';
        containerEl.appendChild(linkEl);
      })
      .catch(function (error) {
        console.log('Error:', error);
      });
  }
  
  function getVideoId(videoLink) {
    // Get the video ID from the link
    var videoId = '';
    
    // Check to see if the links contains a video ID
    if (videoLink.includes('youtube.com')) {
      var url = new URL(videoLink);
      videoId = url.searchParams.get('v');
    } else if (videoLink.includes('youtu.be')) {
      var parts = videoLink.split('/');
      videoId = parts[parts.length - 1];
    }
    
    return videoId;
  }
  
  // Example usage
  var youtubeLink = 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID';
  searchYouTube(youtubeLink);
  
  
  
  
  
  
  
  