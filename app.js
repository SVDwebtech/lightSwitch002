const button = document.querySelector(".switch");
const bulb = document.querySelector(".bulb");
const room = document.querySelector(".room");

room.classList.add("darkRoomColorToggle");
button.addEventListener("click", () => {
	bulb.classList.toggle("lightSwitchColorToggle");
	room.classList.toggle("darkRoomColorToggle");
});
