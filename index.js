// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let distance;
  if (location > 42) {
    distance = location - 42;
  }
  else {
    distance = 42 - location;
  }
  return distance;
}

function distanceFromHqInFeet(location) {
  const block = 264;
  let result = distanceFromHqInBlocks(location) * block;
  return result;
}

function distanceTravelledInFeet(start, destination) {
  const block = 264;
  let distanceBlocks = Math.abs(start - destination);
  let distance = distanceBlocks * block;
  return distance;
}

function calculatesFarePrice(start, destination) {
  let distanceFeet = distanceTravelledInFeet(start, destination);
  let result;
    if (distanceFeet > 2500) {
      result = "cannot travel that far";
    }
    else if (distanceFeet > 2000) {
      result = 25;
    }
    else if (distanceFeet < 400) {
      result = 0;
    }
    else {
      result = (distanceFeet - 400) * .02;
    }
  return result;
}
