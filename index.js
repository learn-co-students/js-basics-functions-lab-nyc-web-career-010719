let distance;

function distanceFromHqInBlocks(street) {
  distance = distanceTravelledInFeet(42, street) / 264;
  return distance;
};

function distanceFromHqInFeet(street) {
  distance = distanceTravelledInFeet(42, street);
  return distance;
};

function distanceTravelledInFeet(start, destination) {
  distance = (destination - start) * 264;

  if (distance < 0) {
    distance *= -1;
  };
  return distance;
};

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination);

  if (distance < 400) {
    return 0;
  } else if (distance >= 400 && distance < 2000) {
    return (distance - 400) * 0.02;
  } else if (distance >= 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  };
};
