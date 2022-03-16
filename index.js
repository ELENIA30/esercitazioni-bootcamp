const items = document.querySelectorAll("ul li");

// Ciclo for classico
for (let i = 0; i < items.length; i++) {
  console.log("ciclo array (nodelist)", i);
}

// con forEach
const cb = (element, index) => {
  // console.log("ciclo array (nodelist)", element, index);
  const text = element.innerHTML;
  // console.log(text);
  element.innerHTML = text.toUpperCase();
  element.style.color = "red";
};

items.forEach(cb);

// ------

const things = [
  "Io sono tuo padre!",
  "guerra nessuno fatto grande",
  "fare o non fare... non c'è provare",
  "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
  "Sto più in alto di te!",
  ".... (cit. Darth Maul)",
  "Eri come un fratello per me! (pianto)",
  
];

const ul = document.querySelector("#dinamica");

// Trasformo "things" in "htmlThings" con .forEach()
// const htmlThings = [];

// things.forEach((e,i) => {
//   htmlThings[i] = '<li>' + e + '</li>';
// })

// Sono la stessa cosa!
// '<li>' + element + '</li>'
// `<li>${element}</li>`

const render = () => {
  const random = Math.ceil(Math.random() * 3);
  const htmlThings = things.map(
    (things) => `<li class="colore${random}">${things}</li>`
  );

  ul.innerHTML = htmlThings.join("");
};

render();

document.querySelector("button").addEventListener("click", () => {
  const random = Math.floor(Math.random() * 1);
  things.push(`"Io sono tuo padre!" ${random}`);
  render();
});

// console.log(htmlThings, things);
// <li>pulire i pavimenti</li>
// ...

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