for (var x = 100; x <= 200; x++) {
  if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (x % 3 === 0) {
    console.log("Loopy");
  } else if (x % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(x);
  }
}

const amounts = [61.0, 52.25, 112.99, 5.0];
const total = 0;

for (i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log("Order total is: ", total);

// for.. of loop example
const total = 0;
for (let amounts of amounts) {
  total += amounts;
}
//
var sound = "";
function laugh(num) {
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
}

console.log(laugh(3));

//
function makeline(length) {
  var line = "";
  for (j = 1; j <= length; j++) {
    line += "* ";
  }
  returnline + "\n";
}

function buildTriangle (length) {
  var triangle = "";
  var line = 1;
  for (lineNumber =1; lineNumber<=length; lineNumber++) {
    triangle = triangle + makeline(lineNumber)
  }
  return triangle;
}
// 
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
emotion ("happy", function(num) { 
  var sound = "";
    for (var i = 0; i < num; i++) {
     sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
});

emotions("happy", function (num) {
  var sound = "";
  for (var i = 0; i < num; i++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
});