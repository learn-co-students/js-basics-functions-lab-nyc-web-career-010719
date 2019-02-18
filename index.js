// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start_block, end_block) {
  return (Math.abs(start_block - end_block)) * 264;
}

function calculatesFarePrice(start_block, end_block) {
  const distance = distanceTravelledInFeet(start_block, end_block)

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
