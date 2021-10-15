const button = document.querySelector(".switch");
const bulb = document.querySelector(".bulb");
const room = document.querySelector(".room");
const switchOn = document.querySelector(".switchOn");
const switchOff = document.querySelector(".switchOff");

room.classList.add("darkRoomColorToggle");
button.addEventListener("click", () => {
	bulb.classList.toggle("lightSwitchColorToggle");
	room.classList.toggle("darkRoomColorToggle");
	switchOn.classList.toggle("lightSwitchToggleONBtnColor");
	switchOff.classList.toggle("lightSwitchToggleOFFBtnColor");
	switchOn.classList.toggle("switchOn-clip");
	switchOff.classList.toggle("switchOff-clip");
});
