/*//Functions

function getMonthDifference(startDate, endDate) {

	let noMonths = endDate.getMonth() - startDate.getMonth() + 12 * (endDate.getFullYear() - startDate.getFullYear());

	return noMonths;
}


function createBoxes(color, number) {

	for (let i = 1; i <= number; i++) {
		const wrapper = document.getElementById("wrapper");
		const box = document.createElement("div");
		box.setAttribute("class", color);
		wrapper.appendChild(box);
	}
}

//Functions End


//let birthDate = '1999-7-24'
//let retiringDate = '2030-01-01'

let birthDate = prompt("Enter Your Birthday : 'yyyy-mm-dd'");
let retiringDate = prompt("Enter Your Retirement Date : 'yyyy-mm-dd'");

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

*/