const addbtn = document.querySelector(".btnadd")
const products = document.querySelector(".products")
const API = `https://69c66873f272266f3eac7bef.mockapi.io/product`
const inputs = document.querySelectorAll("input")

const img = document.getElementById("img");
const name = document.getElementById("name");
const information = document.getElementById("information");
const price = document.getElementById("price");

 const home = document.getElementById("home")
 home.addEventListener("click",()=>{
    window.location.href = "index.html"
 })
const Singin = document.querySelector(".singin")
Singin.addEventListener("click",()=>{
    window.location.href = "admin.html"
})
const cardBtn = document.querySelector(".cardBtn")
cardBtn.addEventListener("click",()=>{
    window.location.href = "card.html"
})

async function getProduct(){
    const respons = await fetch(API)
    const data = await respons.json()
    render(data)
}

function render(product){
        products.innerHTML = ""
        product.forEach(product => {
            
            products.innerHTML += `
                         <div class="product">
                             <img src="${product.img}" alt="">
                             <div class="price">
                                <b>${product.name}</b>
                                <p>$${product.price}</p>
                             </div>
                             <p>${product.information}</p>
                             <button onclick ="editProduct(${product.id})">edite</button>
                             <button onclick = "deleteProduct(${product.id})">Delete</button>
                       </div>
            `
        });
}

addbtn.addEventListener("click", async()=>{

    if(!img.value.trim() || !name.value.trim() || !information.value.trim() || !price.value.trim()){
    alert ("Barcha bo'sh maydonlarni tuldir!")
    return
} else{


    const products1 = {
        img: img.value,
        name: name.value,
        price: price.value,
        information:information.value
    }

    await fetch(API,{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(products1)
    })
}
    getProduct();

    inputs.forEach((input) =>{
        input.value = ""
    })
})

async function deleteProduct(id) {
    await fetch(`${API}/${id}`,{
        method: "DELETE"
    })
    getProduct()
}

getProduct()