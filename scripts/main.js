var products = document.getElementsByClassName("product");

const productsList = Array.from(products);

productsList.forEach(function(product) {
	product.addEventListener("mouseover", function() {
		product.getElementsByClassName("info-popup")[0].classList.add("active");
		console.log("In");
	});

	product.addEventListener("mouseout", function() {
		product.getElementsByClassName("info-popup")[0].classList.remove("active");
		console.log("Out");
	});
});