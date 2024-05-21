let gpElement=document.getElementsByClassName("rezults");

for (var i = 0; i < gpElement.length; i++){
	gpElement[i].addEventListener("click", function(){
		this.classList.add("MyNewclass");
	})	
}

// 1 задание
class myCircle{
	#id = Math.floor(1000000 * Math.random());
	
	constructor(radius){
		this.radius = radius;
	}
	
	get R(){return this.radius}
	set R(val){
		val = Number(val);
		if (isNaN(val) || (val <= 0)) return "Ошибка";
		else this.radius = val;
	}
	get D(){return 2*this.radius}
	
	L() {return 2 * Math.PI * this.radius}
	S(){return Math.PI * (this.radius ** 2)}	
}

function Zadanie1(){
	let firstCircle = new myCircle(1);
	let num;
	let str;
	
	num = prompt("Введите значение радиуса окружности.", "100");
	if (num == null) return;
	num = Number(num);
	if (isNaN(num) || (num <= 0)) str = "Окружность с указанным Вами радиусом не существует.";
	else {
		firstCircle.R = num;
		str = "Произведен расчет харрактеристик окружности с указанным Вами радиусом\n" + 
		"Радиус - " + firstCircle.R + ";\nДиаметр - " + firstCircle.D +
		";\nПлощадь - " + firstCircle.S() + "\nДлинна окружности - " + firstCircle.L() + ";";
	}
	alert(str);
}

// 2 задание
function Zadanie2(){
	alert("У тебя не плохо получается 2");
}

// 3 задание
function Zadanie3(){
	alert("У тебя не плохо получается 3");
}

// 4 задание

function Zadanie4(){
	alert("У тебя не плохо получается 4");
}