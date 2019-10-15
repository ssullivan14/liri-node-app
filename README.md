# liri-node-app

<h2>The LIRI Bot was designed to produce search results based on the following commands:</h2>
<ul>
<li>node liri.js concert-this</li>
<li>node liri.js spotify-this-song</li>
<li>node liri.js movie-this</li>
<li>node liri.js do-what-it-says</li>
</ul>

<h2>Technologies used in the app<h2>
npm packages for spotify, moment
node
javascript/jquery
axios for OMDB and bands in town 
API key for OMDB
txt files = fs


<<<<<<< HEAD
<h2>Each command produced different search results as listed below:</h2>
=======

Each command produces different search results as listed below:
>>>>>>> 27310ff290100678b75511c751577505c2340812
node liri.js concert-this “artist/band name”
- Name of venue
- Venue location
- Date of the event in MM/DD/YYYY format

node liri.js spotify-this-song “song/track name”
- Artist
- Song
- Spotify song preview url
- Album

node liri.js movie-this “movie title”
- Title of the movie
- Year the movie came out
- IMDB Rating of the movie
- Country where the movie was produced
- Language of the movie
- Plot of the movie
- Actors in the movie
- Rotten Tomatoes Rating of the movie

node liri.js do-what-it-says
Print the spotify results for “I want it that way” stored in the random.txt file

How to run the app
1. clone github file to your computer
2. Open liri.js file in terminal and download npm to get packages
3. Once packages are downloaded go to the liri.js file in terminal and type in the following:
  - liri.js node (command) (input) - examples are above for each command

Screenshots liri-node-app functioning
https://github.com/ssullivan14/liri-node-app/issues/4#issue-506859852
https://github.com/ssullivan14/liri-node-app/issues/3#issue-506858969
https://github.com/ssullivan14/liri-node-app/issues/2#issue-506858593
https://github.com/ssullivan14/liri-node-app/issues/1#issue-506858081

Link to a deployed version of the app
https://github.com/ssullivan14/liri-node-app

State your role in the app development
solo-app developer

What Each Command Should Do
Spotify command will show the following information about the song in your terminal/bash window


Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from


If no song is provided then your program will default to "The Sign" by Ace of Base.
You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

node liri.js concert-this <artist/band name here>

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:


Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")



node liri.js movie-this '<movie name here>' Command 
This will output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.


If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/

It's on Netflix!

<<<<<<< HEAD
Used the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.

=======
>>>>>>> 27310ff290100678b75511c751577505c2340812


node liri.js do-what-it-says
Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

