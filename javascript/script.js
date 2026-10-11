let airport = document.getElementById ("airport");
let checkIn = document.getElementById ("checkIn");
let beach = document.getElementById ("beach");

function sequenceOne () {
    airport.src = "images/airport.jpg";
    checkIn.src = "images/checkIn.jpg";
    beach.src = "images/beach.jpg";
}

function sequenceTwo () {
    airport.src = "images/beach.jpg";
    checkIn.src = "images/checkIn.jpg";
    beach.src = "images/airport.jpg";
}

let Seq1 = document.getElementById("Seq1");
Seq1.addEventListener("click", sequenceOne);
let Seq2 = document.getElementById("Seq2");
Seq2.addEventListener("click", sequenceTwo);

