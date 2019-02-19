// Code your solution in this file!

function distanceFromHqInBlocks (someValue) {
  let distance
  if(someValue < 42) {
    distance = 42 - someValue
  } else {
    distance = someValue - 42
  }
  return distance
}

function distanceFromHqInFeet (someValue) {
  let distance = distanceFromHqInBlocks(someValue);
  return distance * 264
}

function distanceTravelledInFeet(start, destination) {
  distance = distanceFromHqInFeet(destination) - distanceFromHqInFeet(start)
  return distance
}

function calculatesFarePrice(start, destination){
  let fare;
  let distanceFeet = distanceTravelledInFeet(start, destination);
  if(distanceFeet < 400) {
    fare = 0
  } else if(distanceFeet > 2500) {
    fare = "cannot travel that far"
  } else if(distanceFeet > 2000) {
    fare = 25
  } else {
    fare = (distanceFeet - 400)*0.02
  }
  return fare
}
