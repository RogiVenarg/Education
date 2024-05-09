let gpElement=document.getElementsByClassName("rezults");

for (var i = 0; i < gpElement.length; i++){
	gpElement[i].addEventListener("click", function(){
		this.classList.add("MyNewclass");
	})	
}

// 1 задание
let avto = {
	id: "123456",
	proizvod: "BMW",
	model: "X6",
	yearCreate: "2024",
	middleSpeed: "60",
	
	info: function(){ 
		let myInfo = "Я автомобиль " + this.proizvod + " " + this.model + ".\nПроизведен в " + 
			this.yearCreate + " году.\nСредняя скорость по российским дорогам составляет " + this.middleSpeed+" км/ч.";
		console.log(myInfo);
		alert(myInfo);
	},
	
	timeToDrive: function (way){
		let myTime = way / this.middleSpeed;
		console.log(myTime);
		return myTime += Math.floor(myTime / 4);
	}
}
		
function Zadanie1_1(){
	avto.info();
}
function Zadanie1_2(){
	let gpWay;
	gpWay = prompt("Для подсчета времени движения, введите расстояние в километрах.","202.5");
	if (gpWay == null) return; //Выход из функции
	gpWay = Number(gpWay);
	if (isNaN(gpWay) || (gpWay <= 0)) alert("Вы ввели не корректное значение расстояния, вычисление времени невозможно.");
	else alert("Для преодоления "+gpWay+" км потребуется "+avto.timeToDrive(gpWay)+" часов.");
}

// 2 задание
function Zadanie2_1(){
	alert("2У тебя получилось.")
}
function Zadanie2_2(){
	alert("2У тебя получилось.")
}
function Zadanie2_3(){
	alert("2У тебя получилось.")
}
function Zadanie2_4(){
	alert("2У тебя получилось.")
}
function Zadanie2_5(){
	alert("2У тебя получилось.")
}

// 3 задание
function Zadanie3_1(){
	alert("3У тебя получилось.")
}
function Zadanie3_2(){
	alert("3У тебя получилось.")
}
function Zadanie3_3(){
	alert("3У тебя получилось.")
}
function Zadanie3_4(){
	alert("3У тебя получилось.")
}