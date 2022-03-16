const citazioniArray = [
  'Io sono tuo padre!',
  'guerra nessuno fatto grande',
  'fare o non fare... non cè provare',
  'Limperatore non condivide affatto le vostre ottimistiche previsioni!',
  'Sto più in alto di te!',
  '.... (cit. Darth Maul)',
  'Eri come un fratello per me! (pianto)',
];

const button1 = document.querySelector('.button1');

button1.addEventListener('click', generate);

function random(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function generate() {
  const citazioneHtml = document.querySelector('.citazione');

  const randomNumber = random(citazioniArray.length);
  citazioneHtml.innerHTML = citazioniArray[randomNumber];
}




// --------
// Sezione commenti

const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const commentsList = document.querySelector("#comments");

const comments = [];

const renderComments = () => {
  // Versione "separata"
  // const commentItems = comments.map(
  //   (comment) => `<li>
  //     <h4>Utente anonimo (vigliacco)</h4>
  //     <p>${comment}</p>
  //   </li>`
  // );

  // commentsList.innerHTML = commentItems.join("");

  // Versione "one-liner"
  commentsList.innerHTML = comments
    .map(
      (comment) => `<li>
        <h4>Utente anonimo (vigliacco)</h4>
        <p>${comment}</p>
      </li>`
    )
    .join("");
};

submit.addEventListener("click", () => {
  comments.push(input.value);
  input.value = "";
  renderComments();
});

renderComments();