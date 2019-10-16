# liri-node-app

<h2>The LIRI Bot was designed to produce search results based on the following commands:</h2>
<ul>
<li>node liri.js concert-this</li>
<li>node liri.js spotify-this-song</li>
<li>node liri.js movie-this</li>
<li>node liri.js do-what-it-says</li>
</ul>

<h2>Technologies used in the app</h2>
<ul>
<li>npm packages for spotify, moment</li>
<li>node</li>
<li>javascript/jquery</li>
<li>axios for OMDB and bands in town</li>
<li>API key for OMDB</li>
<li>txt files = fs</li>
</ul>


<h2>Each command produced different search results as listed below:</h2>
<h3>node liri.js concert-this “artist/band name”</h3>
<ul> 
<li>Name of venue</li>
<li>Venue location</li>
<li>Date of the event in MM/DD/YYYY format</li>
</ul>

<h2>node liri.js spotify-this-song “song/track name”</h2>
<ul>
<li>Artist</li>
<li>Song</li>
<li>Spotify song preview url</li>
<li>Album</li>
</ul>

<h2>node liri.js movie-this “movie title”</h2>
<ul>
<li>Title of the movie</li>
<li>Year the movie came out</li>
<li>IMDB Rating of the movie</li>
<li>Country where the movie was produced</li>
<li>Language of the movie</li>
<li>Plot of the movie</li>
<li>Actors in the movie</li>
<li>Rotten Tomatoes Rating of the movie</li>
</ul>

<h2>node liri.js do-what-it-says</h2>
<ul>
<li>Print the spotify results for “I want it that way” stored in the random.txt file</li>
</ul>

<h2>How to run the app</h2>
<ol>
<li>clone github file to your computer
<li>Open liri.js file in terminal and download npm to get packages
<li>Once packages are downloaded go to the liri.js file in terminal and type in the following: liri.js node command user-input 
</ol>

<h2>Screenshots liri-node-app functioning</h2>
<img src = "https://user-images.githubusercontent.com/7318006/66780953-1706a400-eea0-11e9-8f46-6e510710dddf.png">
<img src = "https://user-images.githubusercontent.com/7318006/66780824-cb53fa80-ee9f-11e9-9570-7ab843b64b4d.png">
<img src = "https://user-images.githubusercontent.com/7318006/66780743-9e9fe300-ee9f-11e9-9411-97381a378d02.png">
<img src = "https://user-images.githubusercontent.com/7318006/66780662-65677300-ee9f-11e9-95d6-1b010ee2dd37.png">


<h2>Link to a deployed version of the app</h2>
<h4>https://github.com/ssullivan14/liri-node-app</h4>
<h4>solo-app developer</h4>


<h2>What should node liri.js spotify-this-song <song name here></h2>
<h4>Spotify command will show the following information about the song in your terminal/bash window</h4>
<ul>
<li>Artist(s)</li>
<li>The song's name</li>
<li>A preview link of the song from Spotify</li>
<li>The album that the song is from</li>
</ul>

<h4>If no song is provided then your program will default to "The Sign" by Ace of Base by utilizing the node-spotify-api package in order to retrieve song information from the Spotify API.</h4>

<h2> What should node liri.js concert-this <artist/band name here</h2>
<h4>This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:</h4>
<ul>
<li>Name of the venue</li>
<li>Venue location</li>
<li>Date of the Event (use moment to format this as "MM/DD/YYYY")</li>
</ul>

<h2>What should node liri.js movie-this '<movie name here>' Command</h2>
<h4>This will output the following information to your terminal/bash window:</h4>
<ul>
<li>Title of the movie.</li>
<li>Year the movie came out.</li>
<li>IMDB Rating of the movie.</li>
<li>Rotten Tomatoes Rating of the movie.</li>
<li>Country where the movie was produced.</li>
<li>Language of the movie.</li>
<li>Plot of the movie.</li>
<li>Actors in the movie.</li>
<li>If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.</li>
</ul>


<h2>What should node liri.js do-what-it-says</h2>
<h4>Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.</h4>
<ul>
<li>It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.</li>
</ul>

