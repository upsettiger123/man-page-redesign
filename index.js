burger = document.getElementById("hamburger")
content = document.getElementById("hamburger-content")

burger_icon = true
burger_path = "assets/menu.svg"
collapse_path = "assets/menu-collapse.svg"

burger.addEventListener('click', (event) => {
    content.classList.toggle("hamburger-style")
    if (burger_icon) {
        burger.src = collapse_path;
        burger.style.width = "2rem"
        burger.style.height = "2rem"
    } else {
        burger.src = burger_path;
        burger.style.width = "2.5rem"
        burger.style.height = "2.5rem"
    }
    burger.classList.toggle("collapse-style")
    burger_icon = !burger_icon;
});