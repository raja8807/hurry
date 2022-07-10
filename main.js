/*for (let i = 1; i <= 10; i++){
				const wrapper = document.getElementById("wrapper")
				const para = document.createElement("div");
				para.setAttribute("class", "red")
				wrapper.appendChild(para);
}*/



/*let date = new Date()
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

let currentDate = (year+"-"+month+"-"+day);
console.log("today "+currentDate);*/


//let birthDate = '1999-5-24'




let birthDate = prompt("Enter Your Birthday : 'yyyy-mm-dd'")

let retiringDate = prompt("Enter Your Retirement Date : 'yyyy-mm-dd'")






let blankMonths = new Date(birthDate).getMonth()

//console.log(blankMonths)


function getMonthDifference(startDate, endDate) {


let noMonths =
endDate.getMonth() - startDate.getMonth() +
12 * (endDate.getFullYear()-startDate.getFullYear())

return noMonths
}

let pastMonths = getMonthDifference(new Date(birthDate), new Date())

//console.log(pastMonths)

function createBoxes(color , number){

				for (let i = 1; i <= number; i++){
				const wrapper = document.getElementById("wrapper")
				const box = document.createElement("div");
				box.setAttribute("class", color)
				wrapper.appendChild(box);
}
}

createBoxes("grey" , blankMonths)

createBoxes("red" , pastMonths)

createBoxes("yellow" , 1)



let remainingMonths = getMonthDifference(new Date(), new Date(retiringDate))


let hurry = document.getElementById("hurry")

let message = ("hurry! You have only "+ remainingMonths+" Months Left!!")

hurry.innerText = message;

//console.log(remainingMonths)

createBoxes("green" , remainingMonths)



