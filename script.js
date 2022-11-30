const logo = document.querySelector("#LogoNatal")



addEventListener("scroll", () => {
    console.log(window.scrollY)

    if(window.scrollY > 80) {
        logo.src = "./centralizado-acho.png"
        logo.style.height = "8.8vh"
        logo.style.marginBottom = "0rem"

    } else {
        logo.src = "./centralizado-acho.png"
        logo.style.height = "20vh"
    }
})