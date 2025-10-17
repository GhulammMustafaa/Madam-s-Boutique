document.addEventListener("DOMContentLoaded", () => {
    const products = [
      {
        id: 1,
        name: "Leather Mid-Heel Sandals",
        category: "Shoes",
        price: "$129.00",
        imgFront: "assets/img/product-1.jpg",
        imgBack: "assets/img/product-2.jpg",
        link: "product.html",
      },
      {
        id: 2,
        name: "Classic Sneakers",
        category: "Shoes",
        price: "$99.00",
        imgFront: "assets/img/product-3.jpg",
        imgBack: "assets/img/product-4.jpg",
        link: "product.html",
      },
      // Add more products as needed
    ];
  
    const productGrid = document.getElementById("product-grid");
  
    products.forEach((product) => {
      const productCard = `
        <div class="col-6 col-md-4 col-lg-3">
          <div class="card mb-4">
            <div class="badge bg-primary text-white card-badge text-uppercase">New</div>
            <div class="card-img">
              <a href="${product.link}" aria-label="View ${product.name}">
                <img
                  src="${product.imgFront}"
                  alt="${product.name} Front View"
                  class="card-img-front"
                />
                <img
                  src="${product.imgBack}"
                  alt="${product.name} Back View"
                  class="card-img-back"
                />
              </a>
              <div class="card-actions">
                <button class="btn btn-sm btn-circle" aria-label="Quick view" data-bs-toggle="modal" data-bs-target="#signInModal">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn-sm btn-circle" aria-label="Add to cart">
                  <i class="fas fa-shopping-cart"></i>
                </button>
                <button class="btn btn-sm btn-circle" aria-label="Add to wishlist">
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-category text-muted">${product.category}</p>
              <p class="card-price fw-bold">${product.price}</p>
            </div>
          </div>
        </div>
      `;
      productGrid.insertAdjacentHTML("beforeend", productCard);
    });

    // Modal form submission handling
    const signInForm = document.getElementById("signInForm");
    signInForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
      const email = signInForm.querySelector('input[type="email"]').value;
      const password = signInForm.querySelector('input[type="password"]').value;

      // Simulate an AJAX request for sign-in
      if (email === "test@example.com" && password === "password") {
        alert("Sign in successful!");
        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('signInModal'));
        modal.hide();
      } else {
        alert("Invalid email or password. Please try again.");
      }
    });

    // Password visibility toggle
    document.querySelectorAll('.password-toggle .fas').forEach(icon => {
      icon.addEventListener('click', function () {
        const input = this.previousElementSibling;
        if (input.type === "password") {
          input.type = "text";
          this.classList.replace("fa-eye", "fa-eye-slash");
        } else {
          input.type = "password";
          this.classList.replace("fa-eye-slash", "fa-eye");
        }
      });
    });
});
