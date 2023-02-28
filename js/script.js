// Effect slide
const btnToggle = document.querySelector(".btn-toggle")
const navSlider = document.querySelector(".nav-slider")
const navSliderLink = document.querySelectorAll(".nav-slider__link")

btnToggle.addEventListener("click", toggleNav)
navSliderLink.forEach(a => a.addEventListener("click", () => toggleNav()))

function toggleNav() {
    btnToggle.classList.toggle("active")
    navSlider.classList.toggle("active")
}

// Change theme
const iconJ = document.querySelector("#iconJ")
const btnTheme = document.querySelector(".nav-fix__btn-theme")

const sun = document.querySelector(".nav-fix__sun")
const moon = document.querySelector(".nav-fix__moon")

const body = document.querySelector("body")
const navFix = document.querySelector(".nav-fix")
const header = document.getElementById("header")
const bloc = document.getElementById("bloc")
const boxContainer = document.querySelectorAll(".box-container")
const footer = document.getElementById("footer")

const modeTxt = document.querySelector(".nav-fix__mode-txt")

if (localStorage.getItem("theme") === "light") {
    lightMode()
} else {
    darkMode()
}

iconJ.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "dark") {
        lightMode()
    } else {
        darkMode()
    }
})

btnTheme.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "dark") {
        lightMode()
    } else {
        darkMode()
    }
})

function darkMode() {
    localStorage.setItem("theme", "dark")

    body.classList.remove("changeTheme")

    sun.classList.remove("hidden")
    moon.classList.add("hidden")
    navSlider.classList.remove("changeColor")
    navFix.classList.remove("changeColor")
    btnToggle.classList.remove("changeColor")
    header.classList.remove("changeColor")
    bloc.classList.remove("changeColor")
    boxContainer.forEach(a => a.classList.remove("changeColor"))
    footer.classList.remove("changeColor")

    modeTxt.textContent = "Light Mode"
}

function lightMode() {
    localStorage.setItem("theme", "light")

    body.classList.add("changeTheme")

    sun.classList.add("hidden")
    moon.classList.remove("hidden")
    navSlider.classList.add("changeColor")
    navFix.classList.add("changeColor")
    btnToggle.classList.add("changeColor")
    header.classList.add("changeColor")
    bloc.classList.add("changeColor")
    boxContainer.forEach(a => a.classList.add("changeColor"))
    footer.classList.add("changeColor")

    modeTxt.textContent = "Dark Mode"
}