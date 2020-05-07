//Write header along screen
var hello = document.querySelector("h1");
var helloText = "Hello, my name is Hannah Burke";
var interval;
var i = 0;

//function adds a letter of the text to the html
function type() {
    hello.innerHTML += helloText[i];
    i++;
    if (i == helloText.length) {
        clearInterval(interval);
        document.querySelector("header .down").style.visibility = "visible";
    } //if
} //type

function writeText() {
    interval = setInterval(type, 70);   //Have type function run every 80 ms
} //writeText

//Make wolf and moon appear then change to worlf howling
var moon = document.querySelector(".header-img img");
var header = document.querySelector("header");

/*
var foot = 1;
var steps = -20;
var interval2;

function wolfStep() {
    if (foot == 1) {
        header.style.background = "no-repeat " + steps + "% 90% / 25% url(../images/wolf-step-1.png), radial-gradient(skyblue, black)";
    } //if
    else if (foot == 2) {
        header.style.background = "no-repeat " + steps + "% 90% / 25% url(../images/wolf-step-2.png), radial-gradient(skyblue, black)";
    }
    else if (foot == 3) {
        header.style.background = "no-repeat " + steps + "% 90% / 25% url(../images/wolf-step-3.png), radial-gradient(skyblue, black)";
    }
    else if (foot == 4) {
        header.style.background = "no-repeat " + steps + "% 90% / 25% url(../images/wolf-original.png), radial-gradient(skyblue, black)";
    } //else
    if (foot == 4) {
        foot = 1;
    } //if
    if (steps == 20) {
        clearInterval(interval2);
    } //if
    steps += 5;
    foot++;
} //wolfStep

function walk() {
    interval2 = setInterval(wolfStep, 750);
} //walk
*/

function moonRise() {
    moon.style.visibility = "visible";
    moon.style.opacity = "1";
} //moonRise

function wolfHowl() {
    header.style.background = "no-repeat 14% 90% / 25% url(../images/wolf-howling.png), radial-gradient(skyblue, black)";
} //wolfHowl

//setTimeout(walk, 500);
setTimeout(moonRise, 1000);
setTimeout(wolfHowl, 2500);
setTimeout(writeText, 4000);

//Show hidden Portfolio section when Show More button clicked
var portfolioSection = document.querySelector(".portfolio");
var btn = document.querySelector(".portfolio .btn");
var visibleText = document.querySelector(".portfolio-wrapper");
var invisibleText = document.querySelector(".portfolio .more-content");

//Toggles between displaying and hiding section of code
function show() {
    if (invisibleText.style.display === "none" || invisibleText.style.display === "") {
        console.log("Show More was clicked and display == none (display value = " + invisibleText.style.display + " )");
        portfolioSection.style.height = "200vh"; 
        visibleText.style.height = "40%"; 
        invisibleText.style.display = "block";
        btn.textContent = "Show Less";
    } //if
    else {
        console.log("Show Less was clicked and display != none (display value = " + invisibleText.style.display + " )");
        portfolioSection.style.height = "100vh"; 
        visibleText.style.height = "65%"; 
        invisibleText.style.display = "none";
        btn.textContent = "Show More";
    } //else
} //show

btn.addEventListener("click", show);

//Show hidden About section when Read More button clicked
var aboutSection = document.querySelector(".about");
var btn2 = document.querySelector(".about .btn");
var visibleSection = document.querySelector(".about .row");
var invisibleSection = document.querySelector(".about .more-content");

function show2() {
    if (invisibleSection.style.display === "none" || invisibleSection.style.display === "") {
        aboutSection.style.height = "200vh";
        visibleSection.style.height = "36%";
        invisibleSection.style.display = "block";
        btn2.textContent = "Read Less";
    } //if
    else {
        aboutSection.style.height = "100vh";
        visibleSection.style.height = "62%";
        invisibleSection.style.display = "none";
        btn2.textContent = "Read More";
    } //else
} //show2

btn2.addEventListener("click", show2);
