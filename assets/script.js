const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrow_left = document.querySelector(".arrow_left")
const arrow_right = document.querySelector(".arrow_right")
const dots = document.querySelector(".dots")
const bannerImg = document.querySelector(".banner-img")
let dot = `<div class="dot"></div>`;
let imageCounter = 0

for (let i = 0; i < slides.length; i++) {
	dots.innerHTML += dot
}
dots.firstElementChild.classList.add("dot_selected")

function modifierImageText() {
	bannerImg.src = "./assets/images/slideshow/" + slides[imageCounter].image
	bannerImg.nextElementSibling.innerHTML = slides[imageCounter].tagLine
}

arrow_left.addEventListener("click", () => {
	let dot_selected = document.querySelector(".dot_selected")
	if (dot_selected.previousElementSibling != null) {
		dot_selected.previousElementSibling.classList.add("dot_selected")
		imageCounter--
	} else {
		dots.lastElementChild.classList.add("dot_selected")
		imageCounter = slides.length - 1
	}
	dot_selected.classList.remove("dot_selected")
	modifierImageText()
})
arrow_right.addEventListener("click", () => {
	let dot_selected = document.querySelector(".dot_selected")
	if (dot_selected.nextElementSibling != null) {
		dot_selected.nextElementSibling.classList.add("dot_selected")
		imageCounter++
	} else {
		dots.firstElementChild.classList.add("dot_selected")
		imageCounter = 0
	}
	dot_selected.classList.remove("dot_selected")
	modifierImageText()
})






