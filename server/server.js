const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  res.json(myMovies);
})

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
    "Title": "Whisper of the Heart",
    "Released": "1996-12-13",
    "Runtime": 111,
    "Genres": ["Animation, Drama, Family"],
    "Directors": ["Yoshifumi Kondô"],
    "Writers": ["Aoi Hiiragi, Hayao Miyazaki"],
    "Actors": ["Yoko Honna, Issei Takahashi, Takashi Tachibana"],
    "Plot": "A love story between a girl who loves reading books and a boy who has previously checked out all of the library books she chooses.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWVlOGNlYjgtYWE4Yi00MjdiLWE1MTEtZTRmNzI1ODk5NzMzXkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore": 75,
    "imdbRating": 7.8
  },
  {
    "Title": "The Boy and the Heron",
    "Released": "2023-12-08",
    "Runtime": 124,
    "Genre": ["Animation, Adventure, Drama"],
    "Directors": ["Hayao Miyazaki"],
    "Writers": ["Hayao Miyazaki"],
    "Actors": ["Soma Santoki, Masaki Suda, Kô Shibasaki"],
    "Plot": "In the wake of his mother's death and his father's remarriage, a headstrong boy ventures into a dreamlike world shared by the living and the dead in search of his missing stepmother.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzA5Zjg3MTAtM2FhZS00NTNjLTg3NjEtNWQ4MTRhZjhiNzVmXkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore": 91,
    "imdbRating": 7.3
  }
]

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

