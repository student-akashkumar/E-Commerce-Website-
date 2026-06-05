
// Search Product

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    const filter = this.value.toLowerCase();

    const products = document.querySelectorAll(".category-box");

    products.forEach(product => {

        const productName = product
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (productName.includes(filter)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});



