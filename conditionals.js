const raining = true;
const cold = false;

if (raining) {
  console.log("Dont forget your umbrella!");
}  

if (cold) {
  console.log("Make sure you pick out a scarf");
} else {
  console.log("Short sleeves are fine");
}
 // #2
  const temperature = 12;

  if(temperature<0) {
    console.log("Make sure you pick out a scarf!");
  } else if (temperature<15) {
    console.log("Short sleeves won't cut it!");
  } else {
    console.log("Short sleeves are fine.");
  }

  console.log("Now you're ready to go outside!");

  //#3
  const isCitizen = true;
  const age = 26;

  if (isCitizen && age > 18) {
    console.log("you are eligible to vote.");
  }

  //#4
  if (temperature < -40 || temperature > 40) {
    console.log("Maybe going outside isn't such a great idea…");
  }

  //#5
  if (!raining) {
    console.log("Leave your umbrella at home!");
  }


  //
  while (x<=25) {
    console.log('Printing out x = ' + x);
    x = x + 2;
  }
  