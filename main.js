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


let birthDate = '1999-7-24'


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

createBoxes("red" , pastMonths)

createBoxes("yellow" , 1)



let remainingMonths = getMonthDifference(new Date(), new Date('2050-01-01'))

//console.log(remainingMonths)

createBoxes("green" , remainingMonths)



