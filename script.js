
const adminBtn = document.querySelector(".singin")

adminBtn.addEventListener("click",()=>{
       window.location.href = "admin.html"
})

const card = document.querySelector(".products1")
const API = `https://69c66873f272266f3eac7bef.mockapi.io/product`

async function getProduct(){
    const respons = await fetch(API) 
    const data = await respons.json()

    render(data)
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
                             <button>Add to cart</button>
                       </div>
        `
      });
}

getProduct();