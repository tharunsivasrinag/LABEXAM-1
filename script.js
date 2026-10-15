// Demo login: checks that fields are filled, then opens the product page.
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      document.getElementById("loginMessage").textContent = "Login successful! Opening products...";
      window.location.href = "user.html";
    });
  }

  const productForm = document.getElementById("productForm");
  if (productForm) {
    productForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("productName").value.trim();
      const price = Number(document.getElementById("productPrice").value);
      document.getElementById("adminMessage").textContent =
        name + " (₹" + price.toLocaleString("en-IN") + ") added (demo only).";
      productForm.reset();
    });
  }
});

let cartCount = 0;
function addToCart(productName) {
  cartCount++;
  const count = document.getElementById("cartCount");
  if (count) count.textContent = cartCount;
  const message = document.getElementById("cartMessage");
  if (message) message.textContent = productName + " added to cart!";
}
