
import sharp from './node_modules/sharp';

// let url = "https://api.rawg.io/api/games?key=378f5f9f8b824216a61340f59cfd0f5c"
// let urlGenre = "https://api.rawg.io/api/genres?key=378f5f9f8b824216a61340f59cfd0f5c"
// let urlPlatforms = "https://api.rawg.io/api/platforms?key=378f5f9f8b824216a61340f59cfd0f5c"
let tester1 = "https://api.rawg.io/api/games?platforms=4&genres=action&dates=2023-03-17,2023-04-16&metacritic=50,&ordering=-released&parent_platforms=1&include_platforms=true&search_precise=true&multiplayer_modes=2,3,4&search_precise=true&key=378f5f9f8b824216a61340f59cfd0f5c"

function preload() {

}

async function setup() {
  createCanvas(400, 400);
  data = await fetch(tester1).then(response => response.json());
  console.log(data);

  // load the thumbnails for the first 4 games
  for (let i = 0; i < 4; i++) {
    let imgURL = data.results[i].background_image;
    let thumbnailBuffer = await loadImageBuffer(imgURL);
    let thumbnail = await resizeImage(thumbnailBuffer, 100, 100);
    data.results[i].thumbnail = thumbnail;
  }
}

function draw() {
  background(220);
}

// load an image from a URL and return it as a buffer
async function loadImageBuffer(url) {
  let response = await fetch(url);
  let arrayBuffer = await response.arrayBuffer();
  let buffer = Buffer.from(arrayBuffer);
  return buffer;
}

// resize an image buffer to the given width and height using the sharp library
async function resizeImage(buffer, width, height) {
  let image = sharp(buffer);
  image = image.resize(width, height);
  let thumbnail = await image.toBuffer();
  return thumbnail;
}
