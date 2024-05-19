let gpElement=document.getElementsByClassName("rezults");

for (var i = 0; i < gpElement.length; i++){
	gpElement[i].addEventListener("click", function(){
		this.classList.add("MyNewclass");
	})	
}

// 1 задание
function strStatistic(myStr){
	const regLet = /[a-zA-Zа-яА-Я]/; const regNum = /\d/;
	let qLet = 0; let qNum = 0; let qOther;
	let i;
	
	for (i = 0; i < myStr.length; i++){
		if (regLet.test(myStr[i])) qLet++;
		else if (regNum.test(myStr[i])) qNum++;
	}
	qOther = myStr.length - qLet - qNum;
	return "количество букв - " + qLet + ";\nколичество цифр - " + qNum + 
			";\nколичество других знаков - " + qOther + ".";
}
function Zadanie1(){
	let str;
	
	str = prompt("Для сбора статистики введите текст.", "1. Пробный текст.");
	if (str == null) return;
	
	alert("По результатам анализа введенного Вами теста:\n" +
			str + "\nПолучены следующие результаты:\n" + strStatistic(str));
}

// 2 задание
function nuberInTxt(myNum){
	let str = "";
	let myCif;
	
	if (myNum == 0) return "ноль"
	else if ((myNum > 9) && (myNum < 20)){
		switch (myNum){
			case 10: str = "десять "; break;
			case 11: str = "одиннадцать "; break;
			case 12: str = "двенадцать "; break;
			case 13: str = "тринадцать "; break;
			case 14: str = "четырнадцать "; break;
			case 15: str = "пятнадцать "; break;
			case 16: str = "шестнадцать "; break;
			case 17: str = "семнадцать "; break;
			case 18: str = "восемнадцать "; break;
			case 19: str = "девятнадцать "; break;
		}
	}
	else if (myNum > 19){
		myCif = Math.floor(myNum / 10);
		
		switch (myCif){
			case 2: str = "двадцать "; break;
			case 3: str = "тридцать "; break;
			case 4: str = "сорок "; break;
			case 5: str = "пятдесят "; break;
			case 6: str = "шестьдесят "; break;
			case 7: str = "семьдесят "; break;
			case 8: str = "восемьдесят "; break;
			case 9: str = "девяносто "; break;
			default: return "Неверно указано число."
		}
		myNum -= myCif*10
	}
	
	if (myNum < 10){
		switch (myNum){
			case 1: str += "один "; break;
			case 2: str += "два "; break;
			case 3: str += "три "; break;
			case 4: str += "четыре "; break;
			case 5: str += "пять "; break;
			case 6: str += "шесть "; break;
			case 7: str += "семь "; break;
			case 8: str += "восемь "; break;
			case 9: str += "девять "; break;
		}
	}
	return str.substr(0, str.length-1);
}
function Zadanie2(){
	let gpNum;
	gpNum = prompt("Введите двухзначное целое число", "23");
	if (gpNum == null) return;
	gpNum = Number(gpNum);
	if (isNaN(gpNum) || (gpNum < 9) || (gpNum > 100) || (gpNum%1 !== 0)){
		alert("Вы неверно ввели число.");
	}
	else alert("Вы ввели число - " + gpNum + " (" + nuberInTxt(gpNum)+").");
}

// 3 задание
function myIzmenReg(strok){
	let myStr = strok.split("");
	let i;

	strok = "";
	for (i = 0; i < myStr.length; i++){
		if (isNaN(Number(myStr[i])) && !(myStr[i] === " ")){
			if (myStr[i].toUpperCase() === myStr[i]) myStr[i] = myStr[i].toLowerCase();
			else myStr[i] = myStr[i].toUpperCase();
		}
		else myStr[i] = "_";
		strok = strok.concat(myStr[i]);
	}
	return strok;
}

function Zadanie3(){
	let str; let newStr;
	
	str = prompt("Введите текст для изменения регистра символов.", "My, Пример 234?");
	if (str == null) return;
	newStr = myIzmenReg(str);
	alert("В результате изменения регистра введенного Вами текста:\n'" + str + 
			"'\nПолучен следующий текст:\n'" + newStr + "'");
}

// 4 задание
function inCamelCase(myStr){
	let byPath = myStr.split("-");
	let oneSimbol;
	let i;
	
	myStr = byPath[0].toLowerCase();
	for (i = 1; i < byPath.length; i++){
		byPath[i] = byPath[i].toLowerCase();
		oneSimbol = byPath[i][0].toUpperCase();
		byPath[i] = byPath[i].substr(1, byPath[i].length);
		byPath[i] = oneSimbol + byPath[i];
		myStr = myStr.concat(byPath[i]);
	}
	return myStr;
}
function Zadanie4(){
	let str;
	
	str = prompt("Введите название css- стиля с дефисом", "font-size");
	if (str.indexOf("-") == -1) return alert("Вы ввели название не требующее преобразования.\nРезультат - " + str);
	else alert("Просле преобразования веденного Вами CSS стиля: " + str + 
					"\nПолучилось: " + inCamelCase(str));
}

// 5 задание
function inAbr(myStr){
	let str = "";
	let byPath;
	
	do {
		if (myStr.indexOf(" ") == -1) break;
		myStr = myStr.replace(" ", "-")
	} while(true);
	byPath = myStr.split("-");
	
	for (i = 0; i < byPath.length; i++){
		str += byPath[i].substr(0, 1).toUpperCase()
	}
	return str;
}
function Zadanie5(){
	let str;
	
	str = prompt("Введите словосочетание для превращения в абривеатуру", "объектно-ориентированное программирование");
	if (str == null) return;
	if ((str.indexOf("-") == -1) && (str.indexOf(" ") == -1)) return alert("Вы не ввели словосочетание!!!\nРезультат - " + str.substr(0, 1).toUpperCase());
	else alert("Просле преобразования веденного Вами словосочетания: " + str + 
					"\nПолучилось: " + inAbr(str));
}

// 6 задание
function inOneStr(myArr){
	let str = "";
	let i;
	
	for (i = 0; i < myArr.length; i++){str += myArr[i] + " ";}
	return str;
}

function Zadanie6(){
	let str; let strForEnter;
	let stroki = [];
	stroki[0] = "Первая строка."
	stroki[1] = "Вторая строка."
	let i; let ii = 2;
	
	//Ввод данных
	do{
		strForEnter = "";
		for (i = 0; i < ii; i++){strForEnter += stroki[i] + "\n"}
		str = prompt("Для проверки работы функции уже введены две строки:\n" + strForEnter +
			"Введите следующую строку.\n\nНажмите 'ОТМЕНА' для отображения результата.", "Следующая строка.");
		if (str == null) break;
		else {
			stroki[ii] = str;
			ii++;	
		}
	}while (true)
	
	//Преобразование + вывод
	
	strForEnter = "";
	for (i = 0; i < ii; i++){strForEnter += stroki[i] + "\n"}
	alert("Были введены следующие строки:\n" + strForEnter +
			"\nРезультат после объединения:\n" + inOneStr(stroki));
}

// 7 задание
function solvePrimer(str){
	let indexZnak;
	let Znak;
	let firstNumber; let secondNumber;
	
	// Определяем математическую операцию
	if (str.indexOf("+") !== -1) Znak = "+";
	if (str.indexOf("-") !== -1) Znak = "-";
	if (str.indexOf("*") !== -1) Znak = "*";
	if (str.indexOf("/") !== -1) Znak = "/";
	indexZnak = str.indexOf(Znak);
				
	// Определяем введенные числа
	firstNumber = Number(str.substr(0,indexZnak));
	secondNumber = Number(str.substring(indexZnak+1));
	if (isNaN(firstNumber) || isNaN(secondNumber)) return false;
				
	// Вычисление
	switch (Znak) {
		case "+": return firstNumber + secondNumber; 
		case "-": return firstNumber - secondNumber; 
		case "*": return firstNumber * secondNumber; 
		case "/": return firstNumber / secondNumber; 
		default:  return false;
	}
}	
		
function Zadanie7(){
	let str;
	let i = 0;
	
		// Ввод + проверка ввода
		do{
			str = prompt("Мы подготовили для Вас калькулятор способный решать примеры используя" + 
				" простые математические операторы:\nсложение '+', вычитание '-', умножение '*', " + 
				"деление '/'\nДля получения ответа запишите пример в формате ЧИСЛОоператорЧИСЛО", "2+2");
			if (str == null) return;
			if (str.indexOf("+") !== -1) i++;
			if (str.indexOf("-") !== -1) i++;
			if (str.indexOf("*") !== -1) i++;
			if (str.indexOf("/") !== -1) i++;
			
			if (i == 1) break;
			else if (i == 0) {
				alert("Вы не ввели ни одного из предложенных математических операторов."+ 
					"\nПопробуйте еще раз."); 
				continue;
			}
			else{
				alert("Вы ввели более одного из предложенных математических операторов.\n" + 
					"Калькулятор способен выполнять только одну математическую операцию." + 
					"\nПопробуйте еще раз."); 
				continue;
			}
		}while(true)
	if (solvePrimer(str) === false) alert("Вы не корректно ввели данные, вычисления не могут быть проведены");
	else alert("Калкулятор решил Ваш пример:\n " + str + "=" + solvePrimer(str));
}

// 8 задание
function urlInfo(fullURL){
	let protocol;	let domen;		let path;
	let fileName;	let parametr;	let iakor;
	let str = "";
	
	if (fullURL.indexOf(":") !== -1) {
		protocol = fullURL.substr(0, fullURL.indexOf(":"));
		fullURL = fullURL.substr(fullURL.indexOf(":")+3);
	}
	else return false;
	if (fullURL.indexOf("/") !== -1) {
		domen = fullURL.substr(0, fullURL.indexOf("/"));
		fullURL = fullURL.substr(fullURL.indexOf("/")+1);
	}
	else {		
		domen = fullURL;
		fullURL = "";
	}
	if (fullURL.lastIndexOf("/") !== -1) {
		path = fullURL.substr(0, fullURL.lastIndexOf("/"));
		fullURL = fullURL.substr(fullURL.lastIndexOf("/")+1);
	}
	else path = "нет";
	if (fullURL.lastIndexOf("#") !== -1) {
		iakor = fullURL.substr(fullURL.lastIndexOf("#")+1);
		fullURL = fullURL.substr(0, fullURL.lastIndexOf("#"));
	}
	else iakor = "нет";
	if (fullURL.lastIndexOf("?") !== -1) {
		parametr = fullURL.substr(fullURL.lastIndexOf("?")+1);
		fullURL = fullURL.substr(0, fullURL.lastIndexOf("?"));
	}
	else parametr = "нет";
	if (fullURL.length == 0) fileName = "нет";
	else fileName = fullURL;
	
	return "протокол: " + protocol + ";\nдомен: " + domen + ";\nпуть: " + path + 
	";\nимя страницы: " + fileName + ";\nпараметр: " + parametr + ";\nякорь: " + iakor +  ".";
}
function Zadanie8(){
	let str;
	str = prompt("Для получения подробной информации введите URL", 
			"https://market.yandex.ru/product/wave-200tws/1427347415?sku=101434051733&offerid=6xqxeblgzA-6SR9IdcQDfw#myIakorForExample");
	if (str == null) return;
	if (urlInfo(str) === false) alert("Вами некорректно введен URL");
	else alert("Проведен анализ введенного Вами URL:\n" + str + "\nРезультат:\n" + urlInfo(str));
}

// 9 задание
function mySplit(myStr, myRazd){
	return myStr.split(myRazd);
}

function Zadanie9(){
	let str;
	let myRazd;
	let stroki = [];
	let otvet = "";
	let i;
	
	str = prompt("Введите строку в которой текст разделен с помощью разделителя.\nДалее отдельно будет предложено ввести разделитель", "10/08/2020");
	if (str == null) return;
	myRazd = prompt("Введите разделитель который использовался в предидущей строке", "/");
	if (myRazd == null) return;
	
	stroki = mySplit(str, myRazd);
	for (i = 0; i < stroki.length; i++){otvet += '"' + stroki[i] + '", '}
	otvet = otvet.substr(0, otvet.length - 2);
	alert("Вы задали разделить строку: '" + str + "' с помощью разделителя '" + myRazd + "'\nРезультат:\n" + otvet + ".");
}

// 10 задание
function vivodPoMacke(){
	if (arguments.length == 0) return false;
	let parametrs = arguments[0];
	if (parametrs.length == 0) return false;
	let str = parametrs[0];
	let myIndex; let valueIndex;
	let first;   let second;
	
	while (str.indexOf("%") !== -1){
		myIndex = str.indexOf("%");
		valueIndex = 0;
		i = 2;
		do {
			if (str.indexOf("%")+i > str.length) break;
			valueIndex = str.substr(myIndex+i-1, 1);
			if ((Number(valueIndex > 0)) && (Number(valueIndex) < 10)) i++;
			else break;
		} while (true)
		valueIndex = Number(str.substr(myIndex+1, i - 1)); 
		if ((valueIndex < 1) || (valueIndex > parametrs.length-1)) return false;
		first = str.substr(0, myIndex);
		second = str.substr(myIndex+i-1, str.length); 
		str = first + parametrs[valueIndex] + second;
		if (str.length > 10000) return false;//стопор
	}
	return str;
}

function Zadanie10(){
	let str;
	let myParametri = [];
	let otvet;
	
	str = prompt("Функция по заданию готова.\nДля поверки работы Вам предлагается изменить представленный образец," + 
		"при изменении требуется учесть, что для корректной работы возможно:\n" + 
		"1. Изменять начальную фразу (до индексов)\n" + 
		"2. Изменять номера и количество индексов, при этом максимальный номер индекса не должен превышать количество параметров указанных после индексов\n" + 
		"3. Изменять входные параметры после указания индексов, при этом все параметры должны быть разделены между собой запятой.",
		"Today is %3.%2.%4 %1,Monday,10,8,2020");
	if (str == null) return;
	
	myParametri = str.split(",");
	otvet = vivodPoMacke(myParametri);
	
	if (otvet == false) alert("Вывод фразы с указанными Вами параметрами невозможен.");
	else alert("В ходе выполения функции с укказаннными Вами параметрами:\n" + str + 
			"\n" + otvet);
}