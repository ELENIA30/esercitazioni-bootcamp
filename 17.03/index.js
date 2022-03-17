const movies= [
    "Deadpool",
    "Dune",
    "Grosso guaio a Chinatown",
    "V per vendetta",
    "Pulp Fiction",
    "Signore degli anelli",
    "Scarface",
    "Sharknado (1,2,3,4,5 e 6)",
    "Blade Runner",
];
const ul =document.querySelector ("#dinamica");

const render =() => {
    const htmlMovies = movies.map((element) => `<li>${element}</li>` );
    ul.innerHTML = htmlMovies.join ("");
};
render ();



submit.addEventListener("click", () => {
    const input = document.querySelector("input").value;//devo specificare input

    const matching = movies.filter((element) => element.toLowerCase().includes(input.toLowerCase()) ); //lower cosi vede tutto
    ul.innerHTML = `<li>${matching}</li>`;
    const result = []

 
});








