// Code your solution in this file!
// function distanceFromHqInBlocks(pickupStreet) {
//   const hqStreet = 42;
//   return Math.abs(hqStreet - pickupStreet);
// }
//
// function distanceFromHqInFeet(pickupStreet) {
//   return distanceFromHqInBlocks(pickupStreet) * 264;
// }
//
// function distanceTravelledInFeet(tripStart, tripEnd) {
//   return Math.abs((tripStart - tripEnd) * 264);
// }
//
// function calculatesFarePrice(tripStart, tripEnd) {
//   const distanceInFeet = distanceTravelledInFeet(tripStart, tripEnd);
//
//   switch (true) {
//     case distanceInFeet <= 400:
//       return 0;
//     case distanceInFeet > 400 && distanceInFeet =< 2000:
//       return (distanceInFeet - 400) * 0.02;
//     case distanceInFeet > 2000 && disatanceInFeet <= 2500:
//       return 25;
//     case distanceInFeet > 2500:
//       return "cannot travel that far";
//   }
// }

function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet (start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

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
