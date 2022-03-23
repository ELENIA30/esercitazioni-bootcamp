import {
    createCard,
    formatMaxText,
    getApidata,
} from "./utils.js";

// getApidata("https://fakestoreapi.com/products").then((data) => {
//     data.map((product) => {
//         createCard(product.title,
//          formatMaxText(product.description),
//             product.image,
//             product.price + "$"
//         );
//     });
// });

// const getProducts = async () => {
//     const res = await fetch(`https://fakestoreapi.com/products/`);
//     const data = await res.json();
//     return data;
// }
const renderProducts = async () => {
    const products = await getApidata(`https://fakestoreapi.com/products/`);
    products.map((product) => {

        // cardEls.forEach((card) => {
        //     card.addEventListener("click",
        //     () => 
        //     (card.innerHTML = `<p style="padding: 20px">${product.description}</p>`));
        // });
        const card =createCard(product.title,
            formatMaxText(product.description),
            product.image,
            product.price + "$"
        );


        const newcard = document.querySelectorAll(".card");
        //cardEls.forEach((card,index,array) => {
            //console.log(card,index,array);
        newcard.forEach((card) => { 
            console.log(card);
            card.addEventListener("click", (e) =>{
                card.textContent =  formatMaxText(product.description)
        
            });
        
            
        });



           
    });

}
 await renderProducts();
const cards = document.querySelectorAll(".card");
//console.log(cards);
cards.forEach((card) => {
        card.addEventListener("click",
        (e) => {
            card.classList.add ("hidden");
            
        }
        
    
    )})
// const somma = (a,b) => a+b;
// console.log(somma(3,4));
// const lamiasomma = somma(3,4)
// console.log(lamiasomma);


   