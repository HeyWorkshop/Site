console.log("Hello there! 👋🎈")

// Creates the slider for the Team Section
var SPLIDE_OPTIONS = {
	autoplay: true,
	interval: 2100,
	type: "loop",
	perPage: 1
}

document.addEventListener('DOMContentLoaded', function () {
	new Splide('#workshop-team-slider', SPLIDE_OPTIONS).mount();
});

document.addEventListener('DOMContentLoaded', function () {
	new Splide('#workshop-team-core-slider', SPLIDE_OPTIONS).mount();
});