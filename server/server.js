const express = require("express");
const path = require("path");
const app = express();

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, "files")));

// Configure a 'get' endpoint for data..
app.get("/movies", function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movies = [
    {
      Title: "The Thing",
      Released: "1982-06-25", 
      Runtime: 109, // Number, no "min"
      Genres: ["Horror", "Mystery", "Sci-Fi"], 
      Directors: ["John Carpenter"], 
      Writers: ["Bill Lancaster", "John W. Campbell Jr."], 
      Actors: ["Kurt Russell", "Wilford Brimley", "Keith David"],
      Plot: "A research team in Antarctica is hunted by a shape-shifting alien...",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      Metascore: 57,
      imdbRating: 8.2,
    },
    // Add at least 2 more movie objects here following the same structure
    {
      Title: "Inception",
      Released: "2010-07-16",
      Runtime: 148,
      Genres: ["Action", "Adventure", "Sci-Fi"],
      Directors: ["Christopher Nolan"],
      Writers: ["Christopher Nolan"],
      Actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      Plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      Metascore: 74,
      imdbRating: 8.8,
    },
    {
      Title: "The Dark Knight",
      Released: "2008-07-18",
      Runtime: 152,
      Genres: ["Action", "Crime", "Drama"],
      Directors: ["Christopher Nolan"],
      Writers: ["Jonathan Nolan", "Christopher Nolan"],
      Actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      Metascore: 84,
      imdbRating: 9.0,
    },
  ];
  res.json(movies);
});

app.listen(3000);

console.log("Server now listening on http://localhost:3000/");
