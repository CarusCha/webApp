const API_KEY = "AIzaSyAzxyS2TmTkQE94EUdhjqbcU2reh39Wg90";
// const BASE_URL = "https://www.googleapis.com/youtube/v3/";
const DISCOVERY_DOCS = 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';

// function loadClient() {
    // gapi.load("client", function() {
    //     gapi.client.init({
    //         'apiKey': API_KEY,
    //         'discoveryDocs': [DISCOVERY_DOCS],
    //     });
    // });
// }

// loadClient();
// class API {
//     static Search = new API(BASE_URL + "search?");
//     constructor(url) {
//         this.url = url + `?key=${API_KEY}`;
//     }
// }


// load client with promise object
const loadClient = new Promise((resolve, reject) => {
    gapi.load("client", function() {
        gapi.client.init({
            'apiKey': API_KEY,
            'discoveryDocs': [DISCOVERY_DOCS],
        }).then(function() {
            resolve(gapi.client);
        }, function(reason) {
            console.log('Error: ', reason.error);
        });
    });
});


// http request class
class HttpRequest {
    static search(keyword) {
        loadClient.then(function(client){
            client.youtube.search.list({
                "part": ["snippet"],
                "q": keyword,
            }).then(function(response){
                console.log(response);
            }, function(reason) {
                console.log('Error: ' + reason.result.error.message);
            });
        });
    }
}