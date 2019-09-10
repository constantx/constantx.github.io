/* global PIXI */

// create an new instance of a pixi stage
var stage = new PIXI.Stage(0xfdfdfd);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(400, 300, null, true, true);

// add the renderer view element to the DOM's #experiments
var container = document.getElementById('experiments');

// create a texture from an image path
var texture = PIXI.Texture.fromImage('/img/bunny.png');

// create a new Sprite using the texture
var bunny = new PIXI.Sprite(texture);

function animate () {
  requestAnimFrame(animate);

  // just for fun, lets rotate mr rabbit a little
  bunny.rotation += 0.1;

  // render the stage
  renderer.render(stage);
}

// add the renderer view element to the DOM
container.appendChild(renderer.view);

// center the sprites anchor point
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

// move the sprite t the center of the screen
bunny.position.x = 200;
bunny.position.y = 150;

stage.addChild(bunny);

requestAnimFrame(animate);
