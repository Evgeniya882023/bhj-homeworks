let product = document.querySelectorAll('.product');
let cart = document.querySelector('.cart__products');

product.forEach((elem) => {

	let productPlus = elem.querySelector('.product__quantity-control_inc');
	let productMinus = elem.querySelector('.product__quantity-control_dec');
	let productQuantity = elem.querySelector('.product__quantity-value');
	let productAdd = elem.querySelector('.product__add');
	let quantity = Number(productQuantity.innerText);
	let productId = elem.getAttribute('data-id');
	let productImg = elem.querySelector('.product__image').getAttribute('src');


	productPlus.onclick = function() {
		quantity += 1;
		productQuantity.innerText = quantity;
	}

	productMinus.onclick = function() {
		if (quantity == 1) {
			return false;
		} else {
			quantity -= 1
		}
		productQuantity.innerText = quantity;
	}

	productAdd.onclick = function() {
		addCard(productId, productImg, quantity);
	}
});

let addCard = function(id, img, count) {
	let cartProduct = Array.from(cart.querySelectorAll('.cart__product'));
	let cartIndex = cartProduct.findIndex(elem => id == elem.getAttribute('data-id'))

	if (cartIndex == -1) {
		cart.innerHTML += `
    <div class="cart__product" data-id = ${id}>
    <img class="cart__product-image" src = "${img}">
    <div class="cart__product-count">${count}</div>
    </div>
    `;
	} else {
		cartProduct[cartIndex].querySelector('.cart__product-count').innerText = Number(cartProduct[cartIndex].querySelector('.cart__product-count').innerText) + count
	}
};



