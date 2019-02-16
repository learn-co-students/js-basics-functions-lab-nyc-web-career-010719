// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
  if (distance > 42) {
    return distance - 42;
  }
  else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start < end) {
    return (end - start) * 264;
  }
  else {
    return (start - end) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  }
  else if (distanceTravelledInFeet(start, destination) > 400 &&  distanceTravelledInFeet(start, destination) <= 2000) {
    return .02 *  (distanceTravelledInFeet(start, destination) - 400);
  }
  else if (distanceTravelledInFeet(start, destination) > 2000 &&  distanceTravelledInFeet(start, destination) <= 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
