
let productlar = []

const adminBtn = document.querySelector(".singin")
const cardBtn = document.querySelector(".cardBtn")

 const home = document.getElementById("home")
 home.addEventListener("click",()=>{
    window.location.href = "index.html"
 })
 
cardBtn.addEventListener("click",()=>{
  window.location.href = "card.html"
})

adminBtn.addEventListener("click",()=>{
       window.location.href = "admin.html"
})

const card = document.querySelector(".products1")
const API = `https://69c66873f272266f3eac7bef.mockapi.io/product`

async function getProduct(){
    const respons = await fetch(API) 
    productlar = await respons.json()

    render(productlar)
}

function render(products){
      card.innerHTML = ""

      products.forEach((product) => {
        card.innerHTML += `
                                 <div class="product">
                             <img src="${product.img}" alt="">
                             <div class="price">
                                <b>${product.name}</b>
                                <p>$${product.price}</p>
                             </div>
                             <p>${product.information}</p>
                             <button onclick ="addtoCard(${product.id})">Add to cart</button>
                       </div>
        `
      });
}
function addtoCard(id){
     const Product = productlar.find((item) =>  item.id == id)
      
     let cart = JSON.parse(localStorage.getItem("cart")) || []
      
     cart.push(Product)

     localStorage.setItem("cart",JSON.stringify(cart))


}
getProduct();