function newCar(aMake, aModel, aYear)
{
  var speed = 10;
  var maxSpeed = 70;
  var minSpeed = 0;
  return {
    currentSpeed: function() { return speed; },
    // topSpeed: function() { return maxSpeed; },
    increaseSpeed: function() {
      speed = speed + 10;
      if (speed > this.topSpeed) {
        speed = this.topSpeed;
        }
      },
    decreaseSpeed: function() {
      speed = speed - (Math.floor(Math.random()*10)+1);
      if (speed < minSpeed ) {
        speed = minSpeed;
      }
    },
    setMaxSpeed: function(number) {
      this.topSpeed = number;
    },

    slip: function () {
      speed = speed + ((Math.floor(Math.random()*10)+1) - (Math.floor(Math.random()*10)+1));
    },
    make: aMake,
    model: aModel,
    year: aYear,
    topSpeed: 0
  }
};

var raceCar = newCar("Honda","Civic","1990");

raceCar.setMaxSpeed(70);

while (raceCar.currentSpeed() < raceCar.topSpeed) {
  raceCar.increaseSpeed();
}

console.log(raceCar.currentSpeed());

while (raceCar.currentSpeed() > 0) {
  raceCar.decreaseSpeed();
}

console.log(raceCar.currentSpeed());

function accelerate() {
  raceCar.increaseSpeed();
  console.log("Your current speed is " +  raceCar.currentSpeed() + "mph");
}

function brake() {
  raceCar.decreaseSpeed();
  console.log("Your current speed is " +  raceCar.currentSpeed() + "mph");
}

function brakeSlip() {
  raceCar.slip();
  console.log("Your current speed is " +  raceCar.currentSpeed() + "mph");
}
