// 1) Use npm to install ejs in the terminal


// 2) create a views and a public folder



// 3) In your public folder create an index.html and add your code from the planning document 
// You can also add your CSS files here too if applicable 




// 4) Now in your views folder create your EJS file and add your HTML code from your planning document



const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})


// 5) Paste in your data array of objects from the planning documents here. 

const posts = [
  {
    username: "sunny_vibes",
    id: 1,
    profileImg: "pink.jpeg",
    postImg: "beach.jpeg",
    caption: "Loving the sunshine today! ☀️🏖️",
    likes: 120,
    comments: 15
  },
  {
    username: "foodie_frenzy",
    id: 2,
    profileImg: "purple.jpg",
    postImg: "pizza.jpeg",
    caption: "Homemade pizza night 🍕😋",
    likes: 230,
    comments: 32
  },
  {
    username: "travel_diary",
    id: 3,
    profileImg: "blue1.jpg",
    postImg: "mountain.jpeg",
    caption: "Exploring the mountains 🏔️ #adventure",
    likes: 340,
    comments: 28
  }
];
// 6) Add static file middleware here

app.use(express.static(__dirname + "/public"))
// 7) Set the view engine to ejs here

app.set("view engine", "ejs")
// 8) Create a route handler to path / and send your index.html 
// run your server with node index.js to test it

app.get("/home", (req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})

// 9) Create a route handler to your overview route from your planning document
// Pass in your data array

app.get("/posts", (req,res) => {
    res.render("insta.ejs", {posts})
})


// 10) Go to your EJS file and turn the HTML into EJS
// Test and run your server then submit if working (git add . git commit -m 'message' git push)


app.listen(3000, ()=> {
    console.log("Server Started")
})