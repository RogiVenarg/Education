let gpElement=document.getElementsByClassName("rezults");

for (var i = 0; i < gpElement.length; i++){
	gpElement[i].addEventListener("click", function(){
		this.classList.add("MyNewclass");
	})	
}

let gpExamples = document.getElementsByClassName("forExampe");

// 1 задание
class myMarker{
	constructor(color){
		this.color = color;
		this.quant = 200;
	}
	print = function(myStr){
		let i;
		let answer;
		
		answer = '<p><span style = "color: #' + this.color + ';">';
		for (i = 0; i < myStr.length; i++){
			if (this.quant == 0) answer += '</span>';
			answer += myStr[i];
			if (myStr[i] !== " ") this.quant--;
		}
		if (this.quant <= 0) this.quant = 0;
		else answer += '</span>';
		answer += '</p>'
		return answer;
	}
}
class myFillMarker extends myMarker{
	fillMe = function (){
		this.quant = 200;
	}
}

let gpMarker = new myMarker("ff0000");
let universalMarker = new myFillMarker("0000ff");

function Zadanie1(){
	let str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus," +
	"sequi, aperiam, officia doloremque dolore illo repellendus delectus magnam " +
	"porro commodi debitis voluptate repellat dignissimos labore cum eaque quis " +
	"libero iure et modi dolores!"
	let markerStr1 = gpMarker.print(str);
	let markerStr2 = gpMarker.print(str);
	let markerStr3 = universalMarker.print(str);
	universalMarker.fillMe();
	let markerStr4 = universalMarker.print(str);
	gpExamples[0].innerHTML = '<p><b>Простой маркер</b></p>' + markerStr1 + 
				markerStr2 + '<p><b>Заполняемый маркер</b></p>' + markerStr3 + markerStr4;
}

// 2 задание
class ExtendedDate extends Date{
	dateInString = function(){
		let myDay = this.getUTCDate();
		let myMonth = this.getUTCMonth();
		let str;
		
		if (myDay==10) str = "десятое";
		else if (myDay==11) str = "одиннадцатое";
		else if (myDay==12) str = "двенадцатое";
		else if (myDay==13) str = "тринадцатое";
		else if (myDay==14) str = "четырнадцатое";
		else if (myDay==15) str = "пятнадцатое";
		else if (myDay==16) str = "шестнадцатое";
		else if (myDay==17) str = "семнадцатое";
		else if (myDay==18) str = "восемнадцатое";
		else if (myDay==19) str = "девятнадцатое";
		else if (myDay==20) str = "двадцатое";
		else if (myDay==30) str = "тридцатое";
		else if (myDay==31) str = "тридцать первое";
		else {
			if ((myDay>20) && (myDay<30)) str = "двадцать ";
			if (myDay%10==1) str = "первое";
			else if (myDay%10==2) str = "второе";
			else if (myDay%10==3) str = "третье";
			else if (myDay%10==4) str = "четвертое";
			else if (myDay%10==5) str = "пятое";
			else if (myDay%10==6) str = "шестое";
			else if (myDay%10==7) str = "седьмое";
			else if (myDay%10==8) str = "восьмое";
			else if (myDay%10==9) str = "девятое";
		}
		str += " ";
		switch (myMonth){
			case 0: str += "января"; break;
			case 1: str += "февраля"; break;
			case 2: str += "марта"; break;
			case 3: str += "апреля"; break;
			case 4: str += "мая"; break;
			case 5: str += "июня"; break;
			case 6: str += "июля"; break;
			case 7: str += "августа"; break;
			case 8: str += "сентября"; break;
			case 9: str += "октября"; break;
			case 10: str += "ноября"; break;
			case 11: str += "декабря";
		}
		return str + " (UTC)";
	}
	lastOrFuture = function(){
		let today = new Date();
		
		if (this.getUTCFullYear() < today.getUTCFullYear()) return false;
		if (this.getUTCMonth() < today.getUTCMonth()) return false;
		if (this.getUTCDate() < today.getUTCDate()) return false;
		return true;
	}
	whatEar = function() {
		let year = this.getUTCFullYear()
		if (year%400 == 0) return true;
		else if (year%100 == 0) return false;
		else if (year%4 == 0) return true;
		return false;
	}
	nextData = function(){
		let myNextData = new Date(this.getTime()+24*60*60*1000);
		return myNextData;
	}
}
let gpData = new ExtendedDate();
function Zadanie2(){
	console.log (gpData);
	alert("Созданный объект - " + gpData +
	";\n1) Вывод даты текстом - " + gpData.dateInString() +
	";\n2) Проверка прошедшая ли дата - " + gpData.lastOrFuture() +
	";\n3) Проверка на високосный год - " + gpData.whatEar() +
	";\n4) Следующая дата - " + gpData.nextData() + ".");
}

// 3 задание
// класс описывающий работника
class Employee {
	constructor(name, sername, job){
		this.name = name;
		this.sername = sername;
		this.job = job;
	}
	toString = function(){
		let str = "";
		
		str += this.name + " ";
		str += this.sername + " - ";
		str += this.job + " ";
		return str;
	}
}
//Массив работников
let workers = [];
workers[0] = new Employee("Игорь", "Гранев", "Администратор");
workers[1] = new Employee("Максим", "Гранев", "Продавец-консультант");
workers[2] = new Employee("Олег", "Яковлев", "Продавец-консультант");
workers[3] = new Employee("Матрена", "Козицкая", "Товаровед");
//Класс генрации html кода таблицы
class EmpTable  {
	constructor(gpArray){
		this.gpArray = gpArray;
	}
	getHtml (){
		let j;
		let i;
		let myHtmlCode = "<table>";
		let myKeys=[];
		
		myHtmlCode += "<tbody>";
		for (i = 0; i<this.gpArray.length; i++){
			//Поиск значений в объекте
			myKeys = Object.values(this.gpArray[i]);
			j = 0;
			do {
				if (myKeys.length <= j) break;
				if ((typeof myKeys[j] == "string") || (typeof myKeys[j] == "number")) j++;
				else myKeys.splice(j, 1);
			} while (true)
				
			//Создание таблицы
			myHtmlCode += "<tr>";
			myHtmlCode += "<td>" + (i+1) + "." + "</td>";
			for (let j=0; j<myKeys.length; j++){
				myHtmlCode += "<td>" + myKeys[j] + "</td>";
			}
			myHtmlCode += "</tr>";
		}
		myHtmlCode += "</tbody></table>";
		return myHtmlCode;
	}
}
function Zadanie3(){
	let myPrimer = new EmpTable(workers);
	gpExamples[1].innerHTML = myPrimer.getHtml();
}

// 4 задание
class StyledEmpTable extends EmpTable {
	getStyles = function(){
		let str = "<style>";
		str += ".gpStyle table{font-family: monoshire; font-size: 1.5rem; color: red;}";
		str += ".gpStyle td{padding: 2px;}";
		str += "</style>";
		return str;
	}
	getHtml(){
		return this.getStyles() + super.getHtml();
	}
}
let myPrimer2 = new StyledEmpTable(workers);
function Zadanie4(){
	gpExamples[2].innerHTML = myPrimer2.getHtml();
}