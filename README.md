This is my files without the quiz portion included to spare the headache-- as I made the quiz in a very inefficient manner. Hopefully the API key still works, if not let me know and if possible we could work it out over a zoom?

I did get the API to work, just not displaying the thumbnail images so this is the last portion I have to do to complete my project.


this code below is from last Thursday when we got the api to work (but changed so the url links to a specific result i need for my quiz)

let tester1 = "https://api.rawg.io/api/games?platforms=4&genres=action&dates=2023-03-17,2023-04-16&metacritic=50,&ordering=-released&parent_platforms=1&include_platforms=true&search_precise=true&multiplayer_modes=2,3,4&search_precise=true&key=378f5f9f8b824216a61340f59cfd0f5c"


function preload() {


}

function setup() {
  createCanvas(400, 400);
  data = loadJSON(tester1);
  console.log(data);
}

function draw() {
  background(220);
}
