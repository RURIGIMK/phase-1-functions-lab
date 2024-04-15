// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    // returns the number of blocks from Scuber headquarters to the pickup location
    return Math.abs(pickupLocation - 42);
  }

  function distanceFromHqInFeet(pickupLocation) {
    // uses the distanceFromHqInBlocks function to help return the correct value in feet
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    // calculates the number of feet a passenger travels given a starting block and an ending block
    const difference = Math.abs(start - destination);
    return difference * 264;
  }

  function calculatesFarePrice(start, destination) {
    // calculates the fare for the customer based on the distance travelled
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }
  