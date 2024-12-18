//_____________________________Advanced Objects___________________________
//this keyword___________
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    //we use this for accessing the properties inside the function
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};
console.log(robot.provideInfo());
//Arrow Functions and this
//it won't work with the arrow function, we dont use that with this keyword
// const robot2 = {
//   energyLevel: 100,
//   checkEnergy: () => {
//     console.log(`Energy is currently at ${this.energyLevel}%.`);
//   },
// };

// robot2.checkEnergy(); //undefined
const robot2 = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot2.checkEnergy();
//__________________________Privacy__________
//Developers use an underscore (_) before a property name (e.g., _amount) to signal that it should not be modified directly.
const robot3 = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};
robot3.recharge();
//_________________Getters_____________________
// retrieves the value of a property and more
const robot4 = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    //checks if it's a number or not
    if (typeof this._energyLevel == "number") {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};
console.log(robot4.energyLevel);
//_____________Setters___________
//reassign values of existing properties
const robot5 = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num == "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};
robot5.numOfSensors = 100;
console.log(robot5.numOfSensors);
//Factory Functions________________________
//to create many instances of an object quickly
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};
const tinCan = robotFactory("P-500", true);
tinCan.beep();
//to see the object
console.log(tinCan);
//Property Value Shorthand________
const robotFactory2 = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};
const newRobot = robotFactory2("P-501", false);
console.log(newRobot.model);
console.log(newRobot.mobile);
//__________Destructured Assignment_____________
//somehow a shorthand for retrieving a value of a key
const robot6 = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop");
    },
    fireLaser() {
      console.log("Pew Pew");
    },
  },
};
//here is the short way
const { functionality } = robot6;
console.log(functionality);
functionality.beep();
functionality.fireLaser();
//we use that instead of this:
// const functionality = robot6.functionality;
// console.log(functionality);
//_______________________________Built-in Object Methods______________________
const robot7 = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};

//for storing all the keys in an array
const robotKeys = Object.keys(robot7);
console.log(robotKeys);

//for array of key-value pairs
const robotEntries = Object.entries(robot7);
console.log(robotEntries);

// to add two another property to the robot
const newRobot2 = Object.assign(
  { laserBlaster: true, voiceRecognition: true },
  robot7
);
console.log(newRobot2);

//Beginnner
console.log("Hello World!");
console.log(22 + 3.5);
console.log(2024 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);
console.log("Hello" + " " + "World");
console.log("Teaching the world how to code".length);
//______________________________Built-in Objects______________________
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));
//___________________________Built-in Methods__________________________
console.log("Codecademy".toUpperCase());
console.log("    Remove whitespace   ".trim());

//____________________________________variables_____________________
var favoriteFood = "pizza";
console.log(favoriteFood);
//let ___reassign a different value
let changeMe = true;
changeMe = false;
console.log(changeMe);
//constant___
const entree = "Enchiladas";
console.log(entree);
//______Mathematical Assignment Operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;
console.log("The value of levelUp:", levelUp);
console.log("The value of powerLevel:", powerLevel);
console.log("The value of multiplyMe:", multiplyMe);
console.log("The value of quarterMe:", quarterMe);
//Increment and Decrement Operator
let gainedDollar = 3;
gainedDollar++;
let lostDollar = 50;
lostDollar--;
console.log(gainedDollar + "\n" + lostDollar);
//___________________________________________
var favoriteAnimal = "cat";
console.log("My favorite animal: " + favoriteAnimal);
var myName = "Humaira";
var myCity = "Paris";
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);
//typeof___
let newVariable = "Playing around with typeof.";
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);
//converting kelvin to C and F and N
const kelvin = 293;
//to C
const celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees Celsius`);
//to F
let fahrenheit = celsius * (9 / 5) + 32;
//to round off
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
//to Newton
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton`);
//to see if I was a dog, how old I`m
const myAge = 22;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears + "\n" + laterYears);
let myAgeInDogYears = earlyYears + laterYears;
myName = "Humaira";
myName = myName.toLowerCase();
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
//______________________________if_________else_____________
let sale = true;
sale = false;
if (sale) {
  console.log("Time to buy!");
} else {
  console.log("Time to wait for a sale.");
}
//____
let mood = "sleepy";
let tirednessLevel = 6;
if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}
//____________Truthy and Falsy
let wordCount = 2;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log("Better get to work!");
}

let favoritePhrase = "";

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log("This string is definitely empty.");
}
//________
let tool = "marker";

let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);
//____________________________Ternary Operator___________________simplify if...else_______
let isLocked = false;

isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");

let isCorrect = true;

isCorrect ? console.log("Correct!") : console.log("Incorrect!");

favoritePhrase = "Love That!";

favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");
//if___else if____
let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}
//_________Switch______
let athleteFinalPosition = "first place";
switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}
//_________________________________________Functions________________________________________
function sayThanks() {
  console.log("Thank you for your purchase! We appreciate your business.");
}
//calling function
sayThanks();
sayThanks();
//Parameters
function sayThanks2(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}
sayThanks2("Cole");
//Default Parameters
function greeting(name = "stranger") {
  console.log(`Hello, ${name}!`);
}

greeting("Nick"); // Output: Hello, Nick!
greeting(); // Output: Hello, stranger!
//return
function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);
//Helper Functions_______functions being called within another function
function monitorCount2(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns) {
  return monitorCount2(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);
//Function Expressions___________stored in a variable_____________anonymous function
const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
console.log(plantNeedsWater("Tuesday"));
//_________________Arrow Function______________________
const plantNeedsWater2 = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
console.log(plantNeedsWater("Tuesday"));
//shorter than that
const plantNeedsWater3 = (day) => (day === "Wednesday" ? true : false);
//Scope____________
const city = "New York City";
function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
}
console.log(logCitySkyline());
//global scope
const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";
function callMyNightSky() {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
}
console.log(callMyNightSky());
//block scope
function logVisibleLightWaves() {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
}
logVisibleLightWaves();
//console.log(lightWaves); // throws a ReferenceError
//______reassigning a global variable
const satellite2 = "The Moon";
const galaxy2 = "The Milky Way";
let stars2 = "North Star";

const callMyNightSky2 = () => {
  stars2 = "Sirius";
  return "Night Sky: " + satellite + ", " + stars + ", " + galaxy;
};

console.log(callMyNightSky2());
console.log(stars2);
//______
const logVisibleLightWaves3 = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";
  if (region === "The Arctic") {
    let lightWaves = "Northern Lights";
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves3();
//___________________________________________Array________________________________________
let newYearsResolutions = [
  "Keep a journal",
  "Take a falconry class",
  "Learn to juggle",
];

console.log(newYearsResolutions);
//___
const hobbies = ["Watching Films", "Coding", "BF"];
console.log(hobbies);
//Accessing Elements___________
const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life.",
];
const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);
//Update Elements______________________
let groceryList2 = ["bread", "tomatoes", "milk"];
groceryList2[1] = "avocados";
console.log(groceryList2);
//let and const in arrays
let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];
//re-assigning the element
condiments[0] = "Mayo";
console.log(condiments);
//re-assigning the array
condiments = ["Mayo"];
console.log(condiments);
const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];
//we can re-assign an element but not re-assign an array
utensils[3] = "Spoon";
console.log(utensils);
//_________________array length
const objectives = ["Learn a new language", "Read 52 books", "Run a marathon"];
console.log(objectives.length);
//_______________adding elements to an array using push method
const chores = ["wash dishes", "do laundry", "take out trash"];
chores.push("dont do anything", "just sleep");
console.log(chores);
// pop() method removes the last item of an array
const chores2 = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];
chores2.pop();
console.log(chores2);
//we have too much array methods___________
//.shift() method removes the first item from the array
const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];
groceryList.shift();
console.log(groceryList);
//.unshift() method adds an element to the beginning of array
groceryList.unshift("popcorn");
console.log(groceryList);
//.slice method picks up any element u want from an array
console.log(groceryList.slice(1, 4));
//its still the same
console.log(groceryList);
//indexOf____
const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);
//____________________________Arrays and Functions_________________
const concept = ["arrays", "can", "be", "mutated"];
//update
function changeArr(arr) {
  arr[3] = "MUTATED";
}
changeArr(concept);
console.log(concept);
//remove
function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(concept);
//____________________________________Nested Arrays_____________________________________
const numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const target = numberClusters[2][1]; //output: 6
console.log(target);
//____________________________________________loops______________________________________
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}
//reverse loop
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}
//loop with array
const vacationSpots = ["Bali", "Paris", "Tulum"];
for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}
//nested loop
const bobsFollowers = ["ahmad", "safi", "shadgul", "gulagha"];
const tinasFollowers = ["ahmad", "safi", "sag"];
const mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);
//while loop
const cards = ["diamond", "spade", "heart", "club"];
let currentCard = "";
while (currentCard !== "spade") {
  //for indexing 0 to 3
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
//do....while loop
let cupsOfSugarNeeded = 4;
let cupsAdded = 0;
do {
  console.log(cupsAdded);
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);
//break keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
  if ((i = 2)) {
    console.log(rapperArray[i]);
    break;
  }
  console.log(rapperArray[i]);
}
console.log("And if you don't know, now you know.");
//Higher-order Functions
//___________________________Functions as Data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name);
//___________________Functions as Parameters
//Anonymous functions can be arguments too!
// passed function
const addTwo = (num) => {
  return num + 2;
};
//func is another function to pass
const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  if (checkA === checkB) {
    return checkB;
  } else {
    return "inconsistent results";
  }
};

console.log(checkConsistentOutput(addTwo, 2));

//another short way
const addTwo2 = (num) => {
  return num + 2;
};

const checkConsistentOutput2 = (func, val) => {
  let checkA = val + 4;
  let checkB = func(val);
  return checkA === checkB ? func(val) : "inconsistent results";
};

console.log(checkConsistentOutput2(addTwo2, 8));
//__________________________________________________Iterators_________________________________________
// .forEach()
// .map()
// .filter()
//example
const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

artists.forEach((artist) => {
  console.log(artist + " is one of my favorite artists.");
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareNumbers);

const things = ["desk", "chair", 5, "backpack", 3.14, 100];

const onlyNumbers = things.filter((thing) => {
  return typeof thing === "number";
});

console.log(onlyNumbers);
//.forEach() Method__________________
const fruits = ["mango", "papaya", "pineapple", "apple"];
//the shortest way______arrow function
fruits.forEach((fruit) => console.log("I want to eat a " + fruit));
//the old version
fruits.forEach(function (fruit) {
  console.log("I want to eat a " + fruit);
});
//another way_______function beforehand
function printfruits(fruit) {
  console.log("I want to eat a " + fruit);
}
fruits.forEach(printfruits);
//__________.map() Method____same as forEach, but returns a new array
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];
const secretMessage = animals.map((anim) => {
  //for printing only the first character of array
  return anim[0];
});
//for joining the elements of the array
console.log(secretMessage.join(""));
//_______________
const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map((num) => {
  return num / 100;
});
console.log(smallNumbers);
//_________filter() Method______returns a new array according to a condition if ture__________
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers2 = randomNumbers.filter((num) => {
  return num < 250;
});
console.log(smallNumbers2.join(","));
//___________
const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];
const longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7;
});
console.log(longFavoriteWords.join(","));
//__________.findIndex() Method__________________with a condition
const animalss = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];
const foundAnimal = animalss.findIndex((anim) => {
  return anim === "elephant";
});
console.log(foundAnimal);
const startsWithS = animalss.findIndex((anim) => {
  return anim[0] === "s";
});
console.log(startsWithS);
//_____________The .reduce() Method________________ returns a single value__________
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum);
//___________________additional built-in array methods________
//.some() method_______doesn't modify the array____just looking for at least one element exists according to condition
const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];
console.log(
  words.some((word) => {
    return word.length < 6;
  })
); //true
//_________
const interestingWords = words.filter((word) => {
  return word.length > 5;
});
console.log(interestingWords);
//___________.every() method________checks the interestingWords function if it works ok or not
console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);
//examples of Methods__________________________________
const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];
export const nums = [1, 50, 75, 200, 350, 525, 1000];
cities.forEach((city) => console.log("Have you visited " + city + "?"));
const longCities = cities.filter((city) => city.length > 7);
console.log(longCities);
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");
console.log(word);
const smallerNums = nums.map((num) => num - 5);
console.log(smallerNums);
//_______________________________________________________Objects_________________________________________
//an empty object
let spaceship = {};
// An object literal with two key-value pairs
spaceship = {
  "Fuel Type": "diesel", //because of space we used ''
  color: "silver",
};
//Accessing Properties, key's value
spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Active Mission": true,
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
  "Secret Mission": "Discover life outside of Earth.",
};
//we use a dot .  first way
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;
console.log(crewCount + "\n" + planetArray);
//Bracket Notation [] , second way
let propName = "Active Mission";
let isActive = spaceship["Active Mission"];
console.log(spaceship[propName]);
//add new key-value pairs to an object or change an existing property
//even if they are const, they will accept the changes
//to change a value
spaceship.color = "glorious gold";
//to add a key-value
spaceship.numEngines = 3;
//to delete a key-value
delete spaceship["Secret Mission"];
console.log(spaceship);
//_____________________________Methods______________________
//syntax of function
let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";
let alienShip = {
  retreat: function () {
    //old version of defining function
    console.log(retreatMessage);
  },
  takeOff() {
    //ES6
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};
//calling that functions
alienShip.retreat();
alienShip.takeOff();

//_________Nested Objects
//inside the properties of an object, we have other properties that they are also objects....
let spaceship2 = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};
//for favorite food of captain

let capFave = spaceship2.crew.captain["favorite foods"][0];
// to add a value, adding an array of object
spaceship2.passengers = [{ name: "Humaira" }, { name: "Sabrina" }];

let firstPassenger = spaceship2.passengers[0];

console.log(capFave);

console.log(spaceship2);
console.log(firstPassenger);

//Pass By Reference
let spaceship3 = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};
//changing the value with a function
let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};
//adding a value with a function
let remotelyDisable = (obj) => {
  obj.disabled = true;
};
//calling the functions
greenEnergy(spaceship3);
remotelyDisable(spaceship3);

console.log(spaceship3);
//___________________________Looping Through Objects___________________
//we use for ... in
let spaceship4 = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};
//to print each member of crew's name
for (let crewMember in spaceship4.crew) {
  console.log(`${crewMember}: ${spaceship4.crew[crewMember].name}`);
}

//to print each member of crew's name and degree
for (let crewMember in spaceship4.crew) {
  console.log(
    `${spaceship4.crew[crewMember].name}: ${spaceship4.crew[crewMember].degree}`
  );
}
