// Page Loader Spinnper
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

// Barras
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
accordionItemHeaders.forEach(accordionItemHeader => {
 	 accordionItemHeader.addEventListener("click", event => {
		accordionItemHeader.classList.toggle("active");
		const accordionItemBody = accordionItemHeader.nextElementSibling;
		if(accordionItemHeader.classList.contains("active")) {
		accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
		}
		else {
		accordionItemBody.style.maxHeight = 0;
		}
  	});
});

// Dark Mode / Day Mode
var body = document.getElementById("body");
var bt = document.querySelector(".bt");
var bt2 = document.querySelector(".bt2");
var header = document.querySelector("header");
var wave = document.querySelector(".wave");

function dark() {
	body.style.backgroundColor = "#4e4e4e";
    body.style.color = "#fff";
    header.style.background = "linear-gradient(160deg, #0ca6fd 58%, #0c60fd 100%)"
	wave.style.fill = "#4e4e4e";
};
function day() {
	body.style.backgroundColor = "#fff";
	body.style.color = "#000";
    header.style.background = "linear-gradient(160deg, #0ca6fd 58%, #0cfdd5 100%)"
	wave.style.fill = "#fff";
};