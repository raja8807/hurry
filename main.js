//Functions

function getMonthDifference(startDate, endDate) {

	//let noMonths = endDate.getMonth() - startDate.getMonth() + 12 * (endDate.getFullYear() - startDate.getFullYear());
	let noMonths = 12 - startDate.getMonth() + ((endDate.getFullYear() - startDate.getFullYear() - 1) * 12) + endDate.getMonth();
	return noMonths;
}

function createBoxes(color, number) {

	const wrapper = document.getElementById("wrapper");

	for (let i = 1; i <= number; i++) {
		const box = document.createElement("div");
		box.setAttribute("class", "box" + " " + color);
		box.style.backgroundColor = color;
		wrapper.appendChild(box);
	}
}

function blinkCurrentMonth() {
	let currentMonth = document.getElementsByClassName("yellow");

	if (currentMonth[0].style.backgroundColor == "yellow") {
		currentMonth[0].style.backgroundColor = "red";
		currentMonth[1].style.backgroundColor = "red";
		currentMonth[0].style.transform = "scale(1.2,1.2)"
		currentMonth[1].style.transform = "scale(1.2,1.2)"
	} else {
		currentMonth[0].style.backgroundColor = "yellow";
		currentMonth[1].style.backgroundColor = "yellow";
		currentMonth[0].style.transform = "scale(1,1)"
		currentMonth[1].style.transform = "scale(1,1)"
	}

}

function changeMode() {
	let body = document.querySelector("body")
	if (body.style.backgroundColor != "black") {
		body.style.backgroundColor = "black"
		body.style.color = "white"
		modebtn.style.flexDirection = "row-reverse"
		modebtn.style.border = "3px solid white"
		btnText.innerText = "Dark Mode"
		modeBtnInner.innerHTML = '<i class="fa-regular fa-sun" id="btnIcon" style="color: black; font-size: 30px;" ></i>'
	} else {
		body.style.backgroundColor = "rgba(183, 182, 190, 0.1)"
		body.style.color = "black"
		modebtn.style.flexDirection = "row"
		modebtn.style.border = "3px solid black"
		btnText.innerText = "Light Mode"
		modeBtnInner.innerHTML = '<i class="fa-regular fa-moon" id="btnIcon" style="color: black; font-size: 30px;" ></i>'

	}
}

//Functions End

let birthDate = '1999-9-23';
let retiringDate = '2050-01-01';

// birthDate = prompt("Enter Your Birthday : 'yyyy-mm-dd'");
// let retiringDate = prompt("Enter Your Retirement Date : 'yyyy-mm-dd'");

let blankMonths = new Date(birthDate).getMonth();
//console.log(blankMonths);
createBoxes("grey", blankMonths);

let pastMonths = getMonthDifference(new Date(birthDate), new Date());
//console.log(pastMonths);
createBoxes("red", pastMonths);

createBoxes("yellow", 1);

let remainingMonths = getMonthDifference(new Date(), new Date(retiringDate));
//console.log(remainingMonths);
createBoxes("green", remainingMonths);

//

let hurry = document.getElementById("hurry");
let message = ("hurry! You have only " + remainingMonths + " Months Left!!");
hurry.innerText = message;

setInterval(blinkCurrentMonth, 200);
// setInterval(blinkCurrentMonth, 1000);

let modebtn = document.getElementById("modeBtn")
let modeBtnInner = document.getElementById("modeBtn-inner")
let btnText = document.getElementById("btnText")

modebtn.addEventListener("click", changeMode)



