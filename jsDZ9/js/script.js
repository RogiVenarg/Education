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
class HtmlElement {
	#myAtributes = [];
	#myStyle = [];
	#myChildTag = [];
	
	constructor(nameOfTag, autoClose, myTxt){
		this.nameOfTag = nameOfTag;
		this.autoClose = autoClose;
		this.myTxt = myTxt;
	}
	//---=== Атрибуты ===---
	get myAtributes(){
		let str = "";
		
		for (let i = 0; i < this.#myAtributes.length; i++){
			if (i !== 0) str += " ";
			str += this.#myAtributes[i];
		}
		return str;
	}
	set myAtributes(val){
		if ((val.length == 0) || (val.length > 2)) return undefined;
		else this.#myAtributes[this.#myAtributes.length] = val[0] + '="' + val[1] + '"';		
	}
	delMyAtribut = function(ind){
		console.log(ind);
		ind = Number(ind);
		console.log(ind, this.#myAtributes.length - 1);
		if ((isNaN(ind)) || (ind < 0) || (ind > this.#myAtributes.length - 1)) return undefined;
		else this.#myAtributes.splice(ind, 1);
	}
	pushMyAtribut = function(name, val){
		this.#myAtributes.push(name + '="' + val + '"');
	}
	//---=== Стили ===---
	get myStyle(){
		let str = 'style="';
		
		for (let i = 0; i < this.#myStyle.length; i++){
			if (i !== 0) str += " ";
			str += this.#myStyle[i];
		}
		str = str + '"';
		return str;
	}
	set myStyle(val){
		if ((val.length == 0) || (val.length > 2)) return undefined;
		else this.#myStyle[this.#myStyle.length] = val[0] + ': ' + val[1] + ';';		
	}
	delMyStyle = function(ind){
		ind = Number(ind);
		if ((isNaN(ind)) || (ind < 0) || (ind > this.#myStyle.length - 1)) return undefined;
		else this.#myStyle.splice(ind, 1);
	}
	pushMyStyle = function(name, val){
		this.#myStyle.push(name + ': ' + val + ';');
	}
	
	
	//---=== Дочерние ===---
	delMyChildTag = function(ind){
		ind = Number(ind);
		if ((isNaN(ind)) || (ind < 0) || (ind > this.#myChildTag.length - 1)) return undefined;
		else this.#myChildTag.splice(ind, 1);
	}
	pushMyChildTag = function(obj){
		if (typeof obj !== 'object') return undefined;
		this.#myChildTag.push(obj);
	}
	unshiftMyChildTag = function(obj){
		if (typeof obj !== 'object') return undefined;
		this.#myChildTag.unshift(obj);
	}
	
	//---=== getHtml() ===---
	getHtml = function(){
		let str = "<";
		let i;
		str += this.nameOfTag + " " + this.myStyle + " " + this.myAtributes + ">" + this.myTxt;
		
		// str += "str вложенных тэгов";
		
		for (i = 0; i < this.#myChildTag.length; i++){
			str += this.#myChildTag[i].getHtml();
		}
		
		if (!this.autoClose) str += "</" + this.nameOfTag + ">";
		return str;
	}
}

let tagA = new HtmlElement("a", false, "More...");
tagA.myAtributes = ["href", "https://www.lipsum.com/"];
tagA.pushMyAtribut("target", "_blank");
let tagP = new HtmlElement("p", false, '"Lorem Ipsum is simply dummy text ' + 
			`of the printing and typesetting industry. Lorem Ipsum has been ` + 
			`the industy's standart dummy text ever since the 1500s, when an ` + 
			`unknown printer took a galley of type and scrambled it to make ` + 
			`a type specimen book."`);
tagP.pushMyStyle("text-align", "justify");
tagP.pushMyChildTag(tagA);
let tagImg = new HtmlElement("img", true, "");
tagImg.pushMyStyle("width", "100%");
tagImg.pushMyAtribut("scr", "lipsum.jpg");
tagImg.pushMyAtribut("alt", "Lorem Ipsum");
let tagH3 = new HtmlElement("h3", false, "What is Lorem Ipsum?");
let tagDiv2 = new HtmlElement("div", false, "");
tagDiv2.pushMyStyle("width", "300px");
tagDiv2.pushMyStyle("margin", "10px");
tagDiv2.pushMyChildTag(tagImg);
tagDiv2.pushMyChildTag(tagP);
tagDiv2.unshiftMyChildTag(tagH3);
let tagDiv1 = new HtmlElement("div", false, "");
tagDiv1.pushMyAtribut("id", "wrapper");
tagDiv1.pushMyStyle("display", "flex");
tagDiv1.pushMyChildTag(tagDiv2);
tagDiv1.pushMyChildTag(tagDiv2);

function Zadanie2(){
	let newWinWid = window.innerWidth * 0.7;
	let newWinHei = window.innerHeight * 0.7;
	let newWinLeft = (window.innerWidth - newWinWid) / 2  ;
	let newWinTop = (window.innerHeight - newWinHei)/ 2 ;
	let newWindow = window.open("", null ,"popup = true, width = " + newWinWid +
					", height = " + newWinHei +", left = " + newWinLeft +", top = "+newWinTop);
	newWindow.document.write(tagDiv1.getHtml());
	newWindow.alert("Изображения в задании нету, поэтому оно не загружено :)")
}

// 3 задание
class CssClass {
	#myStyle = [];
	constructor (name){
		this.name = name;
	}
	pushMyStyle = function(name, val){
		let str = name + ": " + val + ";\n"
		this.#myStyle.push(str);
	}
	delMyStyle = function(ind){
		ind = Number(ind);
		if ((isNaN(ind)) || (ind < 0) || (ind > this.#myStyle.length - 1)) return undefined;
		else this.#myStyle.splice(ind, 1);
	}
	getCss = function(){
		let str = "."
		let i;
		str += this.name + "{\n";
		for (i = 0; i < this.#myStyle.length; i++){
			str += this.#myStyle[i];
		}
		str += "}";
		return str;
	}
}

let myNewClassCSS = new CssClass("wrapper");
myNewClassCSS.pushMyStyle("display", "flex");
myNewClassCSS.pushMyStyle("margin", "5px");

function Zadanie3(){
	let str = "Первоначальный объект созданнй на основе CSS класса:\n";
	str += myNewClassCSS.getCss();
	myNewClassCSS.pushMyStyle("width", "50%");
	str += "\n\nПосле добавления нового стиля:\n";
	str += myNewClassCSS.getCss();
	myNewClassCSS.delMyStyle(1);
	str += "\n\nПосле удаления второго стиля:\n";
	str += myNewClassCSS.getCss();
	alert(str);
}

// 4 задание

function Zadanie4(){
	alert("У тебя не плохо получается 4");
}