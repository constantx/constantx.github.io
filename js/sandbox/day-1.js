// create an new instance of a pixi stage
var stage = new PIXI.Stage(0xfdfdfd);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(400, 300, null, true, true);

// add the renderer view element to the DOM's #sandbox
var container = document.getElementById("sandbox");
container.appendChild(renderer.view);

// create a texture from an image path
var texture = PIXI.Texture.fromImage("/img/bunny.png");
// create a new Sprite using the texture
var bunny = new PIXI.Sprite(texture);

// center the sprites anchor point
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

// move the sprite t the center of the screen
bunny.position.x = 200;
bunny.position.y = 150;

stage.addChild(bunny);

requestAnimFrame( animate );

function animate() {

    requestAnimFrame( animate );

    // render the stage
    renderer.render(stage);
}
