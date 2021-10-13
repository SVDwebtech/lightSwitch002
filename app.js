const button = document.querySelector(".switch");
const bulb = document.querySelector(".bulb");

button.addEventListener("click", () => {
	bulb.classList.toggle("lightSwitchColorToggle");
});
