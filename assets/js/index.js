var containerEl = document.getElementById('container');


var reqUrl = "https://api.edamam.com/api/recipes/v2?type=public&q='chicken''noodles'&app_id=3363fcd5&app_key=fee91a78bd642adc08094cc80cd02704&health=tree-nut-free&imageSize=SMALL";

function getReq() {
    fetch(reqUrl)
        .then(function (response) {
           console.log(response.json);
        })

}

getReq();