var player, lowerWall, upperWall, leftWallup, rightWallup, leftWalldown, rightWalldown;

var horizontalLeft1, horizontalLeft2, horizontalLeft3, horizontalLeft4, horizontalLeft5,
horizontalLeft6, horizontalLeft7, horizontalLeft8, horizontalLeft9;
var horizontalRight1,horizontalRight2, horizontalRight3, horizontalRight4, horizontalRight5,
horizontalRight6, horizontalRight7, horizontalRight8, horizontalRight9;

var verticalLeft1, verticalLeft2, verticalLeft3, verticalLeft4;
var verticalRight1, verticalRight2, verticalRight3, verticalRight4;

var upperMiddle1, upperMiddle2, upperMiddle3, upperMiddle4, upperMiddle5, upperMiddle6, upperMiddle7;

var squareLeft1, squareLeft2;
var squareRight1, squareRight2;

var wallsGroup;

function preload(){
  
}

function setup() {
  createCanvas(600, 400);



}


function draw() {
  background("#404040");
  //Condición para mover al jugador con flechas
 
  drawSprites();
  
}
