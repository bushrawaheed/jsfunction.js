// Challenge 1
// 1. Modify the function is Windy and return true if the speed is greater than 5 and false if not
// 2. Call the function and alert ‘It is windy’ if it is windy, Else, alert ‘It is not windy’

function isWindy(speed) {
  if (speed > 5) {
    return true;
  } else {
    return false;
  }
}
if (isWindy(5)) {
  alert(`It is Windy`);
} else {
  alert(`It is not Windy`);
}
// Challenge 2
// 1. Add unit parameter to isWindy
// 2. if greater than 5 and unit is metric, return true, else return false
// 3. Test both scenarios
// isWindy(2, 'imperial') should return false
// isWindy(20, 'metric') should return true
function isWindy2(speed, unit) {
  if (speed > 5 && unit === `metric`) {
    return true;
  } else {
    return false;
  }
}

let speed = prompt(`What is wind speed?`);
let unit = prompt(`In what unit(metric or imperial)?`);

if (isWindy2(speed, unit)) {
  alert("It is Windy");
} else {
  alert("It is not Windy");
}
