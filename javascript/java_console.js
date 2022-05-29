///////////////////////////////////////////////////////////////////////////////////
// Program: java_console.js
//
// Description: This file is only intended for console
//              programming. Unit testing and learning JavaScript syntax will
//              utilized here.
//
// Date: May-27-2022
///////////////////////////////////////////////////////////////////////////////////


// Prints out Hello World! to the console in the developer tools.
console.log("Hello World!");
console.log("\n");

// Practicing variables:
let x = 33;
let a = 2;
let result;
result = x * a;
console.log(`${x} * ${a} = ${result}`)
console.log("\n");

//Practicing arrays:
const games = ["Parasite Eve", "Parasite Eve 2", "Final Fantasy 9", "Chrono Trigger"]; // array 
for (let i = 0; i < games.length; i++){
    console.log(`game ${i}: ${games[i]}`);
}
console.log("\n");

games.push("Final Fantasy 8");
console.log("New game added...");
for (let i = 0; i < games.length; i++){
    console.log(`game ${i}: ${games[i]}`);
}
console.log("\n");

console.log("|Character 1|");
const character1 = {name:"Isom Brooks-Enge", skill:"Computer Programmer", favorite_game:games[2]};
console.log(`Name: ${character1.name} \nSkill: ${character1.skill} \nFavorite Game: ${character1.favorite_game}`);
console.log("\n");

console.log("|Character 1 Edit|")
character1.favorite_game = games[0];
character1.favorite_anime = "Cowboy Bebop";
console.log(`Name: ${character1.name}
Skill: ${character1.skill} 
Favorite Game: ${character1.favorite_game} 
Favorite Anime: ${character1.favorite_anime}`);
console.log("\n");

// Practicing data types and objects
console.log("|Character 2|")
let length = 16;
let firstName = "Isom";
let z = {Name:"Isom", Skill:"Computer Programmer"}; // objects
console.log(`Name: ${z.Name}
Skill: ${z.Skill}`);
console.log(typeof z);


// Practicing Functions

