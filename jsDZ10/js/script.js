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
class HtmlElement {
	#myAtributes = [];
	#myStyle = [];
	#myChildTag = [];
	
	constructor(nameOfTag, autoClose, myTxt){
		this.nameOfTag = nameOfTag;
		this.autoClose = autoClose;
		this.myTxt = myTxt;
	}
	//---=== Методы атрибутов ===---
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
	pushMyAtribut = function(name, val){this.#myAtributes.push(name + '="' + val + '"')}
	//---=== Методы стилей ===---
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
	pushMyStyle = function(name, val){this.#myStyle.push(name + ': ' + val + ';')}
	
	
	//---=== Методы с дочерними эл. ===---
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
		for (i = 0; i < this.#myChildTag.length; i++){str += this.#myChildTag[i].getHtml()}
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
class HtmlBlock {
	constructor (myHTML, myCSS){
		this.myHTML = ((typeof myHTML == 'object') && (myHTML instanceof HtmlElement)) ? myHTML : undefined;
		this.myCSS = [];
		this.myCSS[0] = ((typeof myCSS == 'object') && (myCSS instanceof CssClass)) ? myCSS : undefined;
	}
	getCode = function(){
		let str;
		let i;
		
		if (this.myCSS !== undefined){
			str = "<style>\n";
			for (i = 0; i < this.myCSS.length; i++){str += this.myCSS[i].getCss()} + "\n";
			str += "</style>\n";
		}
		if (this.myHTML == undefined) return;
		else str += this.myHTML.getHtml()
		return str;
	}
	pushCSS = function(newCSS){
		let i;
		
		if ((typeof newCSS == 'object') && (newCSS instanceof CssClass)) {
				this.myCSS.push(newCSS);
		}
	}
	delCSS = function(ind){
		let i;
		ind = Number(ind);
		if ((isNaN(ind)) || (ind < 0) || (ind > this.myCSS.length - 1)) return undefined;
		else this.myCSS.splice(ind, 1);
	}
}
//Создание классов
let myBlockCSSWrap = new CssClass("wrap");
myBlockCSSWrap.pushMyStyle("display", "flex");
let myBlockCSSBlock = new CssClass("block");
myBlockCSSBlock.pushMyStyle("width", "300px");
myBlockCSSBlock.pushMyStyle("margin", "10px");
let myBlockCSSImg = new CssClass("img");
myBlockCSSImg.pushMyStyle("width", "100%");
let myBlockCSSText = new CssClass("text");
myBlockCSSText.pushMyStyle("text-align", "justify");
//Создание стилей
let myBlockTagA = new HtmlElement("a", false, "More...");
myBlockTagA.myAtributes = ["href", "https://www.lipsum.com/"];
myBlockTagA.pushMyAtribut("target", "_blank");
let myBlockTagP = new HtmlElement("p", false, '"Lorem Ipsum is simply dummy text ' + 
			`of the printing and typesetting industry. Lorem Ipsum has been ` + 
			`the industy's standart dummy text ever since the 1500s, when an ` + 
			`unknown printer took a galley of type and scrambled it to make ` + 
			`a type specimen book."`);
myBlockTagP.pushMyAtribut("class", "text");
myBlockTagP.pushMyChildTag(myBlockTagA);
let myBlockTagImg = new HtmlElement("img", true, "");
myBlockTagImg.pushMyAtribut("class", "img");
myBlockTagImg.pushMyAtribut("scr", "lipsum.jpg");
myBlockTagImg.pushMyAtribut("alt", "Lorem Ipsum");
let myBlockTagH3 = new HtmlElement("h3", false, "What is Lorem Ipsum?");
let myBlockTagDiv2 = new HtmlElement("div", false, "");
myBlockTagDiv2.pushMyAtribut("class", "block");
myBlockTagDiv2.pushMyChildTag(myBlockTagImg);
myBlockTagDiv2.pushMyChildTag(myBlockTagP);
myBlockTagDiv2.unshiftMyChildTag(tagH3);
let myBlockHTML = new HtmlElement("div", false, "");
myBlockHTML.pushMyAtribut("id", "wrapper");
myBlockHTML.pushMyAtribut("class", "wrap");
myBlockHTML.pushMyChildTag(myBlockTagDiv2);
myBlockHTML.pushMyChildTag(myBlockTagDiv2);
//Создание нужного объекта
let myBlock = new HtmlBlock(myBlockHTML, myBlockCSSWrap);
myBlock.pushCSS(myBlockCSSBlock);
myBlock.pushCSS(myBlockCSSImg);
myBlock.pushCSS(myBlockCSSText);

function Zadanie4(){
	let newWinWid = window.innerWidth * 0.7;
	let newWinHei = window.innerHeight * 0.7;
	let newWinLeft = (window.innerWidth - newWinWid) / 2  ;
	let newWinTop = (window.innerHeight - newWinHei)/ 2 ;
	let newWindow = window.open("", null ,"popup = true, width = " + newWinWid +
					", height = " + newWinHei +", left = " + newWinLeft +", top = "+newWinTop);
	newWindow.document.write(myBlock.getCode());
	newWindow.alert("Изображения в задании нету, поэтому оно не загружено :)");
}