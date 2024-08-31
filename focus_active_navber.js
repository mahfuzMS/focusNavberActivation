
    const links = document.querySelectorAll(".url a");

    links.forEach(link => {
        link.addEventListener("click", function() {
            links.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
