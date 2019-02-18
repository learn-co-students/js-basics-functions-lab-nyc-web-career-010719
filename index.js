// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  result = Math.abs((block - 42))
  return result
}

function distanceFromHqInFeet(block) {
  result = Math.abs((block - 42)*264)
  return result
}
//
// function distanceTravelledInBlocks(block1, block2) {
//   result = Math.abs((block2 - block1))
//   return result
// }

function distanceTravelledInFeet(block1, block2) {
  result = Math.abs((block2 - block1))*264
  return result
}

function calculatesFarePrice(start, destination) {
  let fare
  blocks = distanceTravelledInFeet(start, destination)
  if (blocks <= 400){
    fare = 0
  }
  else if (blocks <= 2000){
    fare = (blocks-400) * .02
  }
  else if (blocks < 2500){
    fare = 25
  }
  else if (blocks > 2500){
    fare = 'cannot travel that far'
  }

  else{fare = 0}
  return fare
}
