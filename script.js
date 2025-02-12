document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    
    if (name === "" || email === "" || phone === "") {
        alert("Please fill in all fields!");
        return;
    }
    
    document.getElementById("form-message").classList.remove("hidden");
    setTimeout(() => document.getElementById("form-message").classList.add("hidden"), 3000);
});

