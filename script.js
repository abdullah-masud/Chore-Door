let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let startButton = document.getElementById('start')

let numClosedDoors = 3;

let currentPlaying = true;

let openDoor1;
let openDoor2;
let openDoor3;

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

isBot = door => {
  if(door.src===botDoorPath){
    return true;
  }
  else{
    return false;
  }
}

isClicked = door => {
  if(door.src===closedDoorPath){
    return false;
  }
  else{
    return true;
  }
}

// This function decreases the numClosedDoors variable.
playDoor = door => {
  numClosedDoors--;
  if(numClosedDoors===0){
    gameOver('win');
  }
  else if(isBot(door)===true){
    gameOver();
  }
}

randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor===0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor===1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor===2){
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  }
}

doorImage1.onclick = () => {
  if(isClicked(doorImage1)===false && currentPlaying){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if(isClicked(doorImage2)===false && currentPlaying){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if(isClicked(doorImage3)===false && currentPlaying){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if(currentPlaying===false){
    startRound();
  }
}

startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good Luck!";
  currentPlaying = true;
  randomChoreDoorGenerator()
}

gameOver = status => {
  if(status==='win'){
    startButton.innerHTML = "You win! Play again?";
  }
  else{
    startButton.innerHTML = "Game over! Play again?";
  }

  currentPlaying = false
}

startRound();