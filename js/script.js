'use strict'

document.addEventListener('click', function (event) {
	let link = event.target;
	if (!link.classList.contains('menu__link')) return;

	let href = link.getAttribute('href');
	if (!href || href == '#') return;

	let target = document.querySelector(href);
	if (!target) return;

	target.scrollIntoView({ behavior: "smooth", block: "start" });
	event.preventDefault();
});

let videoLink = document.querySelector('.watch-video__link');
videoLink.onclick = function (event) {
	event.preventDefault();
	let target = document.querySelector(this.getAttribute('href'));
	target.scrollIntoView({ behavior: "smooth", block: "center" });
}


