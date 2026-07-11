const cartProducts = document.querySelector(".cartProducts");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

render(); 

function render(){

    cartProducts.innerHTML="";

    cart.forEach((product)=>{

        cartProducts.innerHTML += `

        <div class="product">

            <img src="${product.img}">

            <h2>${product.name}</h2>

            <p>${product.price}$</p>

            <button onclick="deleteCart('${product.id}')">

            Delete

            </button>

        </div>

        `;

    });

}

function deleteCart(id){

    cart = cart.filter((item)=> item.id != id);

    localStorage.setItem("cart",JSON.stringify(cart));

    render();

} 

