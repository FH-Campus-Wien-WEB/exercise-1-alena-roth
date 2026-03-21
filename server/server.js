const express = require('express')
const path = require('path')
const app = express()

const myMovies = [

  {
    "Title": "Kiki's Delivery Service",
    "Released": "1990-12-20",
    "Runtime": 103,
    "Genres": ["Animation, Family, Fantasy"],
    "Directors": ["Hayao Miyazaki"],
    "Writers": ["Eiko Kadono, Hayao Miyazaki"],
    "Actors": ["Minami Takayama, Rei Sakuma, Mieko Nobusawa"],
    "Plot": "Along with her black cat Jiji, Kiki settles in a seaside town and starts a high-flying delivery service. Here begins her magical encounter with independence and responsibility, making lifelong friends and finding her place in the ...",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTFhYWI1NGUtZWFhZS00MTdkLWIzZTItMDBhNWNiZDNlMjYyXkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore": 85,
    "imdbRating": 7.8
  },
  {
    "Title": "Jurassic World",
    "Released": "2015-06-12",
    "Runtime": 124,
    "Genres": ["Action, Adventure, Sci-Fi"],
    "Directors": ["Colin Trevorrow"],
    "Writers": ["Rick Jaffa, Amanda Silver, Colin Trevorrow"],
    "Actors": ["Chris Pratt, Bryce Dallas Howard, Ty Simpkins"],
    "Plot": "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzBhNzlkM2UtZTQyOC00NjUyLTkzMmMtNDQ1YTM5N2NmMGE5XkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore": 59,
    "imdbRating": 6.9
  },
  {
    "Title": "Cloud Atlas",
    "Released": "26 Oct 2012",
    "Runtime": 172,
    "Genres": ["Drama, Mystery, Sci-Fi"],
    "Directors": ["Tom Tykwer, Lana Wachowski, Lilly Wachowski"],
    "Writers": ["David Mitchell, Lana Wachowski, Tom Tykwer"],
    "Actors": ["Tom Hanks, Halle Berry, Hugh Grant"],
    "Plot": "As souls are born and reborn, they renew their connections to one another throughout the ages.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg",
    "Metascore": 55,
    "imdbRating": 7.3
  }
]

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  res.json(myMovies);
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

