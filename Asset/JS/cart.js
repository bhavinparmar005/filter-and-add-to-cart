
let getDataToLocalstorage = JSON.parse(localStorage.getItem('product'));

getDataToLocalstorage.forEach((val,index) => {
    let container = document.querySelector('.container');

    container.innerHTML += `
        <div class="cart_itam_main">
        <div class="cart_img_main">
          <img src="${val.image}" alt="" />
        </div>
        <div class="cart_item_details">
          <div class="product_brand">
            <h4>Brand Name :-</h4>
            <span> ${val.brand}</span>
          </div>
          <div class="product_details">
            <h4>Titele:-</h4>
            <span
              >${val.title}
            </span>
          </div>

          <div class="product_price">
            <h4>Price:- <span> ${val.price} </span></h4>
          </div>

          <div class="remove_to_cart">
            <button id="remove_to_cart_button_main" onclick="removeToCart(${index})">
              <div class="remove_icon">
                <img src="./Asset/ICON/trash-solid.svg" alt="delet_icon" />
              </div>
              Remove
            </button>
          </div>

          <!-- continue shopping -->

          <div class="continue_soppping_button">
            <a href="./index.html" target="_blank">
             <button id="continue">
                <div class="continue_icon">
                  <img src="./Asset/ICON/thumbs-up-solid.svg" alt="" />
                </div>
                continue shopping
              </button>
            </a>
          </div>
        </div>
      </div>
    
    `
    
    
});

function removeToCart(index){
    getDataToLocalstorage.splice(index,1);
    localStorage.setItem('product',JSON.stringify(getDataToLocalstorage));
    
    window.location.reload()
}

function deletAllDataToLocalStorage(){
// alert("hello")
    localStorage.clear();

    window.location.reload()
}
