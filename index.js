// Code your solution in this file!
 function distanceFromHqInBlocks(blocks){
   if (blocks > 42) {
     return blocks - 42
   }
    else {
      return 42 - blocks
    }
 }

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(beginning, end){
  if (beginning > end) {
      return (beginning - end) * 264 }
     else {
       return (end - beginning) * 264
     }

}

function calculatesFarePrice(beginning, end){
  const distance = distanceTravelledInFeet(beginning, end);
  if (distance <= 400) {
    return 0;
  }
  else if (distance > 400 && distance <= 2000){
    return 0.02 * (distance - 400);
    }
  else if (distance > 2000 && distance <= 2500){
    return 25;
    }
  else if (distance > 2500 ){
    return 'cannot travel that far';

  }


}
