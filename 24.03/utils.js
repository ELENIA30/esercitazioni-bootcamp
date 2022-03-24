

const createCard = (title, desc, imgUrl, price, id) => {
    const divEl = document.createElement("div"); 
    const buttonCard = document.createElement("button");
    const h3El = document.createElement("h3");
    const parDescEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const parPriceEl = document.createElement("p");
   
  
    divEl.classList.add("card");
    parPriceEl.classList.add("price");
    parDescEl.classList.add("description");
    buttonCard.classList.add("button");
  
    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", "img cosi");
    h3El.textContent = title;
    parDescEl.textContent = desc;
    parPriceEl.textContent = price;
    

     

    buttonCard.addEventListener ("click",  () => {

        fetch("https://edgemony-backend.herokuapp.com/movies/" + id, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            },
       
        }).then((data) => {
            location.reload();
            })
            
    });
    
   
  
    divEl.append(imgEl, h3El, parDescEl, parPriceEl,buttonCard);
    document.querySelector(".wrapperMovies").appendChild(divEl);
};
// buttonCard.addEventListener ("click", async () =>{
//     await fetch ("https://fakestoreapi.com/products" + id,)
//     {method: "DELETE"} )
// const result = ("https://fakestoreapi.com/products",) => {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     }
// }



// export { createCard };
  export default createCard;