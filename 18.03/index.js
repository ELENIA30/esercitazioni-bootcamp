const people = [
    "Luke Skywalker - Star Wars",
    "Jack Burton - Grosso guaio a Chinatown",
    "Jhonny Silverhad - Cyberpunk 2077",
    "Bilbo Baggins - Il signore degli anelli",
    "Rick Sanchez - Rick & Morty",
    "Master Chief - Halo",
    "Eleven - Stranger Things",
];

const ul = document.querySelector ("#dinamica");
const input = document.querySelector ("#search-input")

const render =() => {
        const htmlPeople = people.map ((element) =>`<li>${element}</li>` );
        ul.innerHTML = htmlPeople.join("");
};
render ();

submit.addEventListener("click", () => {
    const currentValue = input.value;//devo specificare input

    const matching = people.filter((element) => element.toLowerCase().includes(currentValue.toLowerCase()) ); //lower cosi vede tutto
    ul.innerHTML = matching.map((el) =>`<li>${el}</li>`).join("");
    const result = []

 
});

input.addEventListener("click", () =>{
    const value = input.value;
    render(value);

});

