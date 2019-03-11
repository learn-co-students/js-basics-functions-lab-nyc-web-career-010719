// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return block - 42;
  }
  else {
    return 42 - block;
  }
}

function distanceFromHqInFeet(place) {
  return distanceFromHqInBlocks(place) * 264;
}

function distanceTravelledInFeet(block1, block2) {
  if (block1 >= block2) {
    return (block1 - block2) * 264;
  } else {
      return (block2 - block1) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const trip = distanceTravelledInFeet(start, destination);
  if (trip <= 400) {
    return 0;
  } else if (trip > 400 && trip <= 2000) {
    return (trip - 400) * 0.02;
  } else if (trip > 2000 && trip <= 2500) {
    return 25;
  } else if (trip > 2500) {
    return 'cannot travel that far';
  }
}
