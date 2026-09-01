// DISPLAY CURRENT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const message =
            document.getElementById("message").value;


        const whatsappNumber = "2348061270431";


        const text =
            "Hello Francist Global Enterprises.\n\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Message: " + message;


        const whatsappLink =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(text);


        window.open(
            whatsappLink,
            "_blank"
        );

    });

}


// WHATSAPP PRODUCT ORDER

function orderProduct(productName) {

    const whatsappNumber = "2348061270431";

    const message =
        "Hello Francist Global Enterprises.\n\n" +
        "I am interested in: " +
        productName +
        ".\n\n" +
        "Please send me more information, available options and price.";

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.location.href = whatsappURL;
}


// PRODUCT FILTER

function filterProducts(category, button) {

    const products =
        document.querySelectorAll(".product-item");

    const buttons =
        document.querySelectorAll(".filter-btn");


    // Show or hide products

    products.forEach(function(product) {

        if (
            category === "all" ||
            product.classList.contains(category)
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });


    // Update active button

    buttons.forEach(function(btn) {

        btn.classList.remove("btn-dark");
        btn.classList.add("btn-outline-dark");
        btn.classList.remove("active");

    });


    button.classList.remove("btn-outline-dark");
    button.classList.add("btn-dark");
    button.classList.add("active");

}