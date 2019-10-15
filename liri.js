require("dotenv").config();
var axios = require("axios");
var keys = require("./key.js");
// console.log(keys);
var moment = require("moment");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");



// Make it so liri.js can take in one of the following commands:

// console.log(process.argv);

var command = process.argv[2];
var query = process.argv[3];
var qCommand = command + " " + query;

console.log(command)
// console.log(query)

//logging to log.txt
createLog(qCommand);

switch (command) {
    case "concert-this":
        bandsAPI();
        console.log("concert this is being executed");
        break;

    case "spotify-this-song":
        spotifySong();
        console.log("spotify song is being executed");
        break;

    case "movie-this":
        omdb();
        console.log("movie this command being executed");
        break;

    case "do-what-it-says":
        readRandom();
        console.log("do what it says is executed");
        break;

    default:
        console.log("no input");
}

// concert-this
function bandsAPI() {
    axios.get("https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp").then(
            function (response) {
                // console.log(response.data);

                console.log("The venue is: " + response.data[0].venue.name);
                console.log("The location is: " + response.data[0].venue.city);
                console.log("The date of the event is: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));

            })
        .catch(function (error) {
            if (error.response) {
                console.log("------Data------");
                console.log(error.response.data);
                console.log("------Status----");
                console.log(error.response.status);
                console.log("------Status----");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        })
};


// spotify-this-song
function spotifySong() {
    console.log("spotifySong")
    spotify.search({
        type: 'track',
        query: query,
    }, function (err, data) {
        console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Song Preview: " + data.tracks.items[0].external_urls.spotify);
        console.log("Album: " + data.tracks.items[0].album.name);
        if (err) {
            return console.log('Error occurred: ' + err);
        }
    });
}

// movie-this OMDB
function omdb() {
    if (query) {
        //user put in movie do nothing
    } else {
        query = "Mr Nobody";
    }
    axios.get("http://www.omdbapi.com/?t=" + query + "&apikey=trilogy").then(
            function (response) {

                // console.log(response.data);
                console.log("The title of movie is: " + response.data.Title);
                console.log("The year of the movie is: " + response.data.Year);
                console.log("The IMBD Rating of the movie is: " + response.data.Ratings[0].Value);
                console.log("The Rotten Tomatoes Rating is: " + response.data.Rating);
                console.log("The Country where movie was produced is: " + response.data.Country);
                console.log("The language of the movie is: " + response.data.Language);
                console.log("The plot of movie is: " + response.data.Plot);
                console.log("The Actors in the movie are: " + response.data.Actors);

            })
        .catch(function (error) {
            if (error.response) {
                console.log("------Data------");
                console.log(error.response.data);
                console.log("------Status----");
                console.log(error.response.status);
                console.log("------Status----");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        })
};

function readRandom() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(data);

    });
};

function createLog() {
    fs.appendFile("log.txt", qCommand, function (error) {
        if (error) {
            return console.log(error);
        }
        
    });
}