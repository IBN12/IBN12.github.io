// Final Fantasy 9 Details
const finalFantasy9Details = document.getElementById("demo1");
finalFantasy9Details.innerHTML = "Final Fantasy IX is a 2000 role-playing video game developed and published by Square for the PlayStation video game console."
document.getElementById("demo2").style.fontsize = "25px";
document.getElementById("demo2").style.display = "none";
document.getElementById("demo2").style.display = "block";

// Parasite Eve Details
// Will add content to the parasite eve section
// when the button is clicked.
const parasiteEveDetails = `Parasite Eve is a 1998 action role-playing horror
video game developed and published by Square. The game is a sequel to the novel
Parasite Eve, written by Hideaki Sena; it is also the first game in the Parasite
Eve video game series.`
function addParasiteEveContent(){
    document.getElementById("parasite_eve").innerHTML = parasiteEveDetails;
}

// Parsite Eve 2 Details
// Will add content to the parasite eve 2 section
// when the button is clicked. 
const parasiteEve2Details = `Parasite Eve 2 is an action role-playing survival horror 
video game released for the PlayStation. The game was developed by Square, published
in Japan in 1999 and in both North America and, unlike the previous game,
in PAL regions in 2000.`
function addParasiteEve2Content(){
    document.getElementById("parasite_eve_2").innerHTML = parasiteEve2Details;
}

// Chrono Trigger Details
// Will add content to the chrono trigger section
// when the button is clicked.
const chronoTriggerDetails = `Chrono Trigger is a 1995 role-playing video game developed
and published by square. It was originally released for the Super Nintendo Entertainment
System as the first game in the Chrono series.`
function addChronoTriggerContent(){
    document.getElementById("chrono_trigger").innerHTML = chronoTriggerDetails;
}




// document.write()
// For testing purposed, it is convenient to use document.write().
// let a = 33;
// let b = 2;
// let result;
// result = a * b;
// document.write(`${a} * ${b} = ${result}`);

// window.alert()
// This alert box will display data.
// window.alert(result);




