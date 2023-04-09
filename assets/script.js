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

// Flèches 

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Carousel 

const banner = document.querySelector("#banner");

let slideIndex = 0;

const bannerImage = banner.children.item(0);
const bannerTagLine = banner.children.item(1);
const dotContainer = document.querySelector(".dots");
const dots = dotContainer.children;

// bullet points

for (let i = 0; i < 3; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotContainer.appendChild(dot);
}


function dotSelected() {
	for (let i = 0; i < dots.length; i++) {
		if (i === slideIndex) {
			dots[i].classList.add("dot_selected");
		} else {
			dots[i].classList.remove("dot_selected");
		}
	}

}

// Clic gauche

arrowLeft.addEventListener("click", function () {
	slideIndex--; //diapositive précédente 
	if (slideIndex < 0) {
		slideIndex = slides.length - 1;
	} // infini scroll
	bannerImage.src = "./assets/images/slideshow/" + slides[slideIndex].image; // màj image
	bannerTagLine.innerHTML = slides[slideIndex].tagLine; // màj texte
	dotSelected(); // fonction bullet point
});

// Clic droit

arrowRight.addEventListener("click", function () {
	slideIndex++; // diapositive suivante
	if (slideIndex >= slides.length) {
		slideIndex = 0;
	} // infini scroll
	bannerImage.src = "./assets/images/slideshow/" + slides[slideIndex].image; // màj image
	bannerTagLine.innerHTML = slides[slideIndex].tagLine; // màj texte
	dotSelected(); // fonction bullet point
});

console.log(banner.children.item)