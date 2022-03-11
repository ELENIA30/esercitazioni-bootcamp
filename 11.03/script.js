/*
ESERCIZI SULLO SCOPE ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!! Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'. */

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log? // RISPOSTA:
 
const PI = 3.14;

console.log(PI);

if (PI >= 3) { console.log(PI); } 
//  Risposta 3.14 perchè è l'unica costante e nell'if diciamo di chiamarla se la condizione  (<=3) è verificata, e lo è

// Es. 2: Dato il seguente, qual'è il risultato dei console.log? // RISPOSTA:

var favColour = "violet"; let monthsInAYear = 12;

 if (true) { var favColour = "violet"; console.log("Il mio colore preferito è:", favColour); }

  console.log("Ci sono", monthsInAYear, "mesi in un anno.");
// "violet" nel rpimo perchè var è una globale e 12nel secondo perchè let è fuori dallo scope di if

// Es. 3: Dato il seguente, qual'è il risultato dei console.log? // RISPOSTA:

 function makePizza(moreIngredients) { let theSecond = "Sugo di pomodoro freschissimo"; // { ... } console.log(theSecond + ", " + moreIngredients); return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!) }

if (true) { makePizza("rucola, prosciutto crudo e scaglie di grana."); console.log("Il secondo ingrediente necessario: ", theSecond);}

// niente perchè manca una } credo......
