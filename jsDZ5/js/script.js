// Задание 1
function numberInStepen(myNum, myStep){
	if (myStep==0) return 1;
	else return myNum*numberInStepen(myNum,myStep-1);
}
function Zadanie1(){
	let gpOtvet;
	let gpNum;
	let gpStep;
	
	gpNum = +prompt("Введите число");
	gpStep = +prompt("Введите степень");
	gpOtvet = numberInStepen(gpNum,gpStep);
	alert("1 работает"+gpOtvet);
	
}

function Zadanie2(){
	alert("2 работает");
}

function Zadanie3(){
	alert("3 работает");
}

function Zadanie4(){
	alert("4 работает");
}

function Zadanie5(){
	alert("5 работает");
}

function Zadanie6(){
	alert("6 работает");
}