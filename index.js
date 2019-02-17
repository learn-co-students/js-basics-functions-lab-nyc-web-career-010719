// Code your solution in this file!
function distanceFromHqInBlocks (loc)
{
  //returns the number of blocks given a value
  const hq = 42;
  if (hq == loc)
  {
    return 0;
  }
  let distance;
  distance= hq>=loc ? (hq-loc) :(loc-hq)
  return distance;
};

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(start,end)
{
  let  distance= start>=end ? (start-end) :(end-start)
  let feet = distance *264;
  return feet;
};

function calculatesFarePrice (start, end)
{
  let distance = distanceTravelledInFeet(start,end)
  if (distance<=400)
  {
    return 0;
  }
  // distance = distance- 400;
  // altert(distance);
  let fair =0;
  switch (true)
  {
    case (distance<2000): return (distance-400) * 0.02;
    case (distance>2000 && distance <2500): return   25;
    case (distance>=2500): return 'cannot travel that far';
    default: return 'default'
  }
  // return fair;
}
