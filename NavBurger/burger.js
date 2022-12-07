function toggleMenu() {
    const navbar = document.querySelector('.navBar')
    const button = document.querySelector(".navButton")

    button.addEventListener("click", () => {
        navbar.classList.toggle('showNav');
    })
}

toggleMenu()