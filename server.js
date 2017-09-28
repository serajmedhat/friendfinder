var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT =  3000;

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());





app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/survey.html"));
});
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "/home.html"));
});
var characters = 
[
	{
"name": "Ahmed",
"photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
"scores": [
"5",
"1",
"4",
"4",
"5",
"1",
"2",
"5",
"4",
"1"
]
}
];


app.get("/api/friends", function(req, res) {
  res.json(characters)
});




app.post("/api/friends", function(req, res) {
  var newcharacter = req.body;
  

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});
app.listen(PORT, function() {
  console.log("app is listening on PORT: " + PORT);
});

