
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const productCards = document.querySelectorAll(".product-card");
const categoryButtons = document.querySelectorAll(".category-btn");

const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

const menuBtn = document.getElementById("menuBtn");
const navigation = document.querySelector("nav");

let selectedCategory = "all";


// Search and Filter Products

function filterProducts() {

    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    let visibleProducts = 0;


    productCards.forEach(function(card) {

        const productName = card.dataset.name.toLowerCase();

        const category = card.dataset.category.toLowerCase();

        const shopName = card.querySelector(".shop-name")
            .textContent.toLowerCase();

        const shopAddress = card.querySelector(".shop-address")
            .textContent.toLowerCase();


        const matchesSearch =
            productName.includes(searchText) ||
            shopName.includes(searchText) ||
            shopAddress.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;


        if (matchesSearch && matchesCategory) {

            card.style.display = "block";

            visibleProducts++;

        } else {

            card.style.display = "none";

        }

    });


    // Product Count

    resultCount.textContent =
        visibleProducts + " Products";


    // No Products Message

    if (visibleProducts === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


// Search Button

searchBtn.addEventListener("click", function() {

    filterProducts();

});


// Search While Typing

searchInput.addEventListener("input", function() {

    filterProducts();

});


// Category Filter

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        categoryButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        selectedCategory = button.dataset.category;


        filterProducts();

    });

});


// Mobile Menu

menuBtn.addEventListener("click", function() {

    navigation.classList.toggle("show");

});


// Close Menu After Clicking Link

document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("show");

    });

});


// Contact Shop Button

document.querySelectorAll(".contact-btn").forEach(function(button) {

    button.addEventListener("click", function() {

        const shopName = button.dataset.shop;

        alert(
            "Shop Name: " + shopName +
            "\n\nContact details will be available when the backend is connected."
        );

    });

});


// Initial Product Count

filterProducts();
