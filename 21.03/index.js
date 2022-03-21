

const people =  [
    { 
        nome: 'elenis',
      cognome : 'centamore',
      numero : '2222222',
    },
    { 
        nome: 'elenia',
      cognome : 'centamore',
      numero : '2222222',
    },
    {  
        nome: 'elenia',
       cognome : 'centamore',
       numero : '2222222',
    },
    {   
        nome: 'elenia',
        cognome : 'centamore',
        numero : '2222222',
    },
    {  
        nome: 'elenia',
       cognome : 'ccentamore',
       numero : '2222222',
    },
];
//localStorage.setItem("people",JSON.stringify({people:people}));

const div = document.querySelector("#dinamica");
const render =() => {
    const htmlPeople = people.map ((item) => `<li> ${item.nome}  ${item.cognome} ${item.numero}</li>`);
 
    div.innerHTML = htmlPeople.join("");

};
render()

try {
  people.map((item) => createLiEl(item, ulEl));
} catch (error) {

  const people= JSON.parse(localStorage.getItem("people")).people;
  people.map((item) => createLiEl(item, ulEl));
} finally {
  console.log("FINALLY");
}
const nome = document.querySelector("#nome");
const cognome = document.querySelector("#cognome");
const numero = document.querySelector ("#numero");
const submit = document.querySelector("#submit");
const remove = document.querySelector("#remove");
const removed =[]




 submit.addEventListener ("click", () => {
    people.push(
        { 
            nome: nome.value,
          cognome : cognome.value,
          numero : numero.value,
        }

    );
    console.log(people);
  
    nome.value = "";
    cognome.value = "";
    numero.value = "";

      render ();
 });

remove.addEventListener ("click", () =>{
    people.splice({
      nome:nome.value,
      cognome: cognome.value,
      numero: numero.value,
    })

}); 


 

