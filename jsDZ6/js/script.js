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
class drobnoeChislo {
	constructor(chislitel, znamenatel){
		this.chislitel = (znamenatel < 0) ? -chislitel : chislitel;
		this.znamenatel = (znamenatel < 0) ? -znamenatel : znamenatel;

		this.valueOf = function(){
			return [this.chislitel, this.znamenatel];
		}
		this.toString = function(){
			return this.chislitel + "/" + this.znamenatel;
		}
		this.resultIzNull = function () {
			this.znamenatel = null;
			this.chislitel = null;
		}
		
		this.summa = function(){
			let kolArg = arguments.length;
			let i = 0;
			let chislo = [];
			
			if (kolArg == 0) return this.resultIzNull();
			else if (kolArg > 1) {
				this.chislitel = 0;
				this.znamenatel = 1;
			}
			
			while (i < kolArg){
				chislo = arguments[i].valueOf();
				if (chislo.length == 2){
					if (isNaN(Number(chislo[0]))) return this.resultIzNull();
					else if (isNaN(Number(chislo[1])) || (chislo[1] == 0)) return this.resultIzNull();
					else {
						if (this.znamenatel == chislo[1]) this.chislitel += chislo[0];
						else {
							chislo[0] = chislo[0] * this.znamenatel
							this.znamenatel = this.znamenatel * chislo[1];
							this.chislitel = this.chislitel * chislo[1];
							this.chislitel += chislo[0];
						}
					}
				}
				else return this.resultIzNull();
				i++;
			}
			this.sokratit();
		}
		
		this.vichest = function(){
			let kolArg = arguments.length;
			let i = 1;
			let chislo = [];
			
			if (kolArg == 0) return this.resultIzNull();
			else if (kolArg == 1) {
				chislo = [-arguments[0].valueOf()[0], arguments[0].valueOf()[1]]
				this.summa(chislo);
			}
			else {
				this.summa([0,1], arguments[0].valueOf());
			}
			if ((this.chislitel == null) || (this.znamenatel == null)) return;
			while (i < kolArg){
				chislo = [-arguments[i].valueOf()[0], arguments[i].valueOf()[1]]
				this.summa(chislo);
				if ((this.chislitel == null) || (this.znamenatel == null)) return;
				i++;
			}
			this.sokratit();
		}
		
		this.proisv = function (){
			let kolArg = arguments.length;
			let i = 0;
			let chislo = [];
			
			if (kolArg == 0) return this.resultIzNull();
			else if (kolArg > 1) {
				this.chislitel = 1;
				this.znamenatel = 1;
			}
			while (i < kolArg){
				chislo = arguments[i].valueOf();
				if (chislo.length == 2){
					if (isNaN(Number(chislo[0]))) return this.resultIzNull();
					else if (isNaN(Number(chislo[1])) || (chislo[1] == 0)) return this.resultIzNull();
					else {
						this.chislitel = this.chislitel * chislo[0];
						this.znamenatel = this.znamenatel * chislo[1];
					}
				}
				else return this.resultIzNull();
				i++;
			}
			this.sokratit();
		}
		
		this.razdelit = function (){
			let kolArg = arguments.length;
			let i = 1;
			let chislo = [];
			
			if (kolArg == 0) return this.resultIzNull();
			else if (kolArg == 1) {
				if ((arguments[0].valueOf()[0] == 0) || (arguments[0].valueOf().length !== 2)) return this.resultIzNull();
				chislo[0] = (arguments[0].valueOf()[0]<0) ? -arguments[0].valueOf()[1] : arguments[0].valueOf()[1];
				chislo[1] = (arguments[0].valueOf()[0]<0) ? -arguments[0].valueOf()[0] : arguments[0].valueOf()[0];
				this.proisv(chislo);
			}
			else {
				if ((arguments[0].valueOf()[0] == 0) || (arguments[0].valueOf().length !== 2)) return this.resultIzNull();
				this.proisv([1, 1], arguments[0].valueOf());
			}
			if ((this.chislitel == null) || (this.znamenatel == null)) return;
			while (i < kolArg){
				if ((arguments[i].valueOf()[0] == 0) || (arguments[i].valueOf().length !== 2)) return this.resultIzNull();
				chislo[0] = (arguments[i].valueOf()[0]<0) ? -arguments[i].valueOf()[1] : arguments[i].valueOf()[1];
				chislo[1] = (arguments[i].valueOf()[0]<0) ? -arguments[i].valueOf()[0] : arguments[i].valueOf()[0];
				this.proisv(chislo);
				i++
			}
			this.sokratit();
		}
		
		this.sokratit = function() {
			let chislo;
			let i;
			
			if (this.chislitel<0) chislo = (-this.chislitel<this.znamenatel) ? -this.chislitel : this.znamenatel;
			else chislo = (this.chislitel<this.znamenatel) ? this.chislitel : this.znamenatel;
			i = 2;
			while (i<=chislo){
				if ((this.chislitel % i == 0) && (this.znamenatel % i == 0)){
					this.chislitel = this.chislitel / i;
					this.znamenatel = this.znamenatel / i;
					chislo = chislo / i;
					i = 2;
				}
				else i++
			}
		}
	}
}

// Для всех заданий с дробями
let drobi = [new drobnoeChislo(-1, 2), new drobnoeChislo(5, 3)];
let kolvoDrobei = drobi.length;

// let drob1 = new drobnoeChislo(1, 2);
// let drob2 = new drobnoeChislo(5, 3);

function Zadanie2_1(){
	let str;
	
	drobi[kolvoDrobei] = new drobnoeChislo(1, 1);
	kolvoDrobei++;
	// Выполняет сложение двух (n) объектов-дробей и помещает результат в третий объект-дробь
	drobi[kolvoDrobei - 1].summa(drobi[0], drobi[1]);
	str = "Сумма двух объектов-дробей (" + drobi[0] + ", "  + drobi[1] + ") равна " + drobi[kolvoDrobei - 1] + ".\nСумма текущего объекта-дроби (" + drobi[0];
	
	// Выполняет сложение текущего объекта дроби с другим объектом дробъю
	drobi[0].summa(drobi[1]); 
	str += ") c другим обьектом-дробью (" + drobi[1] + ") равна " + drobi[0];
	alert(str);
}
function Zadanie2_2(){
	let str;
	
	drobi[kolvoDrobei] = new drobnoeChislo(1, 1);
	kolvoDrobei++;
	// Выполняет вычитание из первого объекта-дроби второго объекта-дроби и помещает результат в третий объект-дробь
	drobi[kolvoDrobei - 1].vichest(drobi[0], drobi[1]);
	str = "При вычитании из объекта-дроби (" + drobi[0] + ") другого объекта-дроби ("  + drobi[1] + ") получен ответ " + drobi[kolvoDrobei - 1] + ".\nПри вычитании из текущего объекта-дроби (" + drobi[0];
	
	// Выполняет вычитание из текущего объекта дроби другого объекта-дроби
	drobi[0].vichest(drobi[1]); 
	str += ") другого обьекта-дроби (" + drobi[1] + ") получен ответ " + drobi[0];
	alert(str);
}
function Zadanie2_3(){
	let str;
	
	drobi[kolvoDrobei] = new drobnoeChislo(1, 1);
	kolvoDrobei++;
	// Выполняет умножение объектов-дробей и помещает результат в третий объект-дробь
	drobi[kolvoDrobei - 1].proisv(drobi[0], drobi[1]);
	str = "При умножении двух объектов-дробей (" + drobi[0] + ", "  + drobi[1] + ") получен ответ " + drobi[kolvoDrobei - 1] + ".\nПри умножении текущего объекта-дроби (" + drobi[0];
	
	// Выполняет умножение текущего объекта дроби с другим объектом-дробью
	drobi[0].proisv(drobi[1]); 
	str += ") с другим обьектом-дробью (" + drobi[1] + ") получен ответ " + drobi[0];
	alert(str);
}
function Zadanie2_4(){
	let str;
	
	drobi[kolvoDrobei] = new drobnoeChislo(1, 1);
	kolvoDrobei++;
	// Выполняет деление первого объекта-дроби на второй объект-дробь и помещает результат в третий объект-дробь
	drobi[kolvoDrobei - 1].razdelit(drobi[0], drobi[1]);
	str = "При делении объекта-дроби (" + drobi[0] + ") на объект-дробь ("  + drobi[1] + ") получен ответ " + drobi[kolvoDrobei - 1] + ".\nПри делении текущего объекта-дроби (" + drobi[0];
	
	// Выполняет деление текущего объекта-дроби на другой объект-дробь
	drobi[0].razdelit(drobi[1]); 
	str += ") на другой обьект-дробь (" + drobi[1] + ") получен ответ " + drobi[0];
	alert(str);
}
function Zadanie2_5(){
	let str;
	
	drobi[kolvoDrobei] = new drobnoeChislo(-18, 90);
	kolvoDrobei++;
	
	str = "Объект-дробь (" + drobi[kolvoDrobei-1] + ") сокращена до ";
	drobi[kolvoDrobei-1].sokratit();
	str += drobi[kolvoDrobei-1] + "."
		
	alert(str);
}

// 3 задание
class myTime {
	constructor(hour, min, sec){
		this.hour = ((this.hour < 0) || (this.min < 0) || (this.sec < 0)) ? null : (hour + Math.floor((min+Math.floor(sec/60))/60))% 24;
		this.min = ((this.hour < 0) || (this.min < 0) || (this.sec < 0)) ? null : (min+Math.floor(sec/60)) % 60;
		this.sec = ((this.hour < 0) || (this.min < 0) || (this.sec < 0)) ? null : sec % 60;
		
		this.resultIzNull = function () {
			this.hour = null;
			this.min = null;
			this.sec = null;
		}
		this.timeInSecond = function(hour, min, sec){
			return hour*3600 + min*60 + sec
		}
		this.timeInFormat = function(seco){
			while (seco<0) {seco += 24*3600}
			seco = seco % (24*3600);
			// while (seco>=24*3600) {seco -= 24*3600}
				
			this.hour = Math.floor(seco / 3600) % 24;
			seco -= this.hour * 3600;
			this.min = Math.floor(seco / 60);
			this.sec = seco - this.min*60;
		}
		
		this.toString = function(){
			let str;
			str = (this.hour < 10) ? "0" + this.hour + ":" : this.hour + ":";
			str = (this.min < 10) ? str + "0" + this.min + ":" : str + this.min + ":";
			str = (this.sec < 10) ? str + "0" + this.sec : str + this.sec;
			return str;
		}
		
		this.addSecond = function(dopSec){
			if ((isNaN(Number(dopSec))) || (dopSec == (dopSec % 1))) this.resultIzNull();
			else {
				dopSec = Number(dopSec);
				this.timeInFormat(this.timeInSecond(this.hour, this.min, this.sec) + dopSec);
			}
		}
		this.addMinuts = function(dopMin){
			if ((isNaN(Number(dopMin))) || (dopMin == (dopMin % 1))) this.resultIzNull();
			else {
				dopMin = Number(dopMin);
				this.timeInFormat(this.timeInSecond(this.hour, this.min, this.sec) + dopMin*60);
			}
		}
		this.addHours = function(dopHour){
			if ((isNaN(Number(dopHour))) || (dopHour == (dopHour % 1))) this.resultIzNull();
			else {
				dopHour = Number(dopHour);
				this.timeInFormat(this.timeInSecond(this.hour, this.min, this.sec) + dopHour*3600);
			}
		}
	}
}
//Для всех заданий со временем
let Time1 = new myTime(23, 122, 123);

function Zadanie3_1(){
	alert('Текущее время в формате ЧЧ:MM:CC - "' + Time1 + '"');
}
function Zadanie3_2(){
	let str;
	let gpSec = prompt("Введите количество секунд на которое нужно изменить время.", 100);
	
	str = "После добавления " + gpSec + " сек к " + Time1;
	Time1.addSecond(gpSec);
	str += " время изменено на " + Time1;
	alert(str);
}
function Zadanie3_3(){
	let str;
	let gpMin = prompt("Введите количество минут на которое нужно изменить время.", 100);
	
	str = "После добавления " + gpMin + " мин к " + Time1;
	Time1.addMinuts(gpMin);
	str += " время изменено на " + Time1;
	alert(str);
}
function Zadanie3_4(){
	let str;
	let gpHour = prompt("Введите количество часов на которое нужно изменить время.", 25);
	
	str = "После добавления " + gpHour + " часов к " + Time1;
	Time1.addHours(gpHour);
	str += " время изменено на " + Time1;
	alert(str);
}