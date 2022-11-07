// Generatore password

// Chiedere nome

let yourName = prompt("Ciao! Crea la tua password a partire dal tuo nome");

console.log(yourName);

// Chiedere il cognome

let surName = prompt ("Ora inserisci il tuo cognome");

console.log(surName);


// Chiedere il colore preferito

let favoriteColor = prompt("Qual è il tuo colore preferito?")

console.log(favoriteColor);


// Numero password

const passwordNumber = 21

console.log(21)

// Password completa

let Password = yourName + surName + favoriteColor + passwordNumber;

console.log (Password)


document.getElementById("title").innerHTML = `Congratulazioni ${yourName}, la tua password è :${Password}`;