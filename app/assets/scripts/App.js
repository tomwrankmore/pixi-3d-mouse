import '../styles/styles.css'
import 'lazysizes'
// import MobileMenu from './modules/MobileMenu'
import * as PIXI from 'pixi.js'

let app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});

document.body.appendChild(app.view);

let img = new PIXI.Sprite.from("assets/images/fred-hampton.png");
img.width = window.innerWidth;
img.height = window.innerHeight;
app.stage.addChild(img);

let depthMap = new PIXI.Sprite.from("assets/images/fred-hampton-map.png");
depthMap.width = window.innerWidth;
depthMap.height = window.innerHeight;
app.stage.addChild(depthMap);

let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];

window.onmousemove = function(e) {
  displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 100;
  displacementFilter.scale.y = (window.innerWidth / 2 - e.clientY) / 100;
}

new MobileMenu();

if(module.hot) {
  module.hot.accept()
}



// hot modules means that webpack generates javascript file to memory rather than creating a file...