function Zadanie1(){
	// ввод и проверка введенных данных
	do {
		diapazonChisel = prompt("Для автоматического суммирования ведите диапазон целых чисел в формате: ЧИСЛО-ЧИСЛО\nНапример: 123-321");
		indexRazdel=-1;
		for (i=0;i<diapazonChisel.length;i++){
			if (diapazonChisel[i]=="-"){ 
				indexRazdel=i;	
				i=diapazonChisel.length;
				break;
			}
		}
		if (indexRazdel==-1) {alert("Вы указали диапазон не в том формате. Попробуйте еще раз."); continue;}
		else if (indexRazdel==0) {alert("Вы не указали первое число диапазона. Попробуйте еще раз."); continue;}
		else if (indexRazdel==(diapazonChisel.length-1)) {alert("Вы не указали второе число диапазона. Попробуйте еще раз."); continue;}
		pervoeChislo = +diapazonChisel.substring(0,indexRazdel);
		vtoroeChislo = +diapazonChisel.substr(indexRazdel+1);
		if (isNaN(pervoeChislo)) {alert("Вы некорректно указали первое число диаппазона. попробуйте еще раз."); continue;}
		else if (isNaN(vtoroeChislo)) {alert("Вы некорректно указали второе число диаппазона. попробуйте еще раз."); continue;}
		else {break;}
	} while (true)

	// Расчет суммы целых чисел
	pervoeChislo=Math.ceil(pervoeChislo);
	vtoroeChislo=Math.floor(vtoroeChislo);
	if (vtoroeChislo<pervoeChislo) {
		i=pervoeChislo;
		pervoeChislo=vtoroeChislo;
		vtoroeChislo=i;
	}
	if (pervoeChislo==vtoroeChislo){summaChisel=pervoeChislo}
	else{
		summaChisel=0;
		for (i=pervoeChislo;(i<=vtoroeChislo); i++){
			summaChisel += i;
		}
	}
	
	// Вывод ответа
	alert("Сумма всех целых чисел в диаппазоне "+diapazonChisel+" (включая целые числа диапазона) равна - "+summaChisel);
}



function Zadanie2(){
	// Ввод и проверка введенных данных
	do {
		vvodimoeZnachenie = prompt("Для нахождения наибольшего общего делителя ведите два числа разделив их знаком '-'\nНапример: 123-321");
		razdelIndex=-1;
		for (i=0;i<vvodimoeZnachenie.length;i++){
			if (vvodimoeZnachenie[i]=="-") {
				razdelIndex=i;
				break;
			}
			console.log(i);
		}
		if ((razdelIndex==0)||(razdelIndex==vvodimoeZnachenie.length)||(razdelIndex==-1)) {alert("Вы не корректно ввели числа. Попробуйте еще раз"); continue;};
		firstNumber = +vvodimoeZnachenie.substring(0,razdelIndex);
		secondNumber = +vvodimoeZnachenie.substr(razdelIndex+1);
		if (isNaN(firstNumber)||isNaN(secondNumber)) {alert("Вы некорректно ввели числа. Попробуйте еще раз."); continue;}
		else if ((firstNumber % 1 !== 0)||(secondNumber % 1 !== 0)) {alert("Для корректной работы программы введите два целых числа."); continue;}
		else break;
	} while(true)
		
	// Вычисление НОД
	menshee = (firstNumber<secondNumber) ? firstNumber : secondNumber;
	NOD=0;
	for (i = menshee;i>0;i--){
		if ((firstNumber % i == 0)&&(secondNumber % i == 0)) {
			NOD=i;
			break;
		}
	}
	console.log(firstNumber,secondNumber,menshee);
	console.log(NOD);
	// Вывод ответа
	if (NOD == 1) alert("Наибольшим общим делителем для введенных Вами чисел ("+firstNumber+", "+secondNumber+") является - 1. \nЧисла взаимно простыею");
	else alert("Наибольшим общим делителем для введенных Вами чисел ("+firstNumber+", "+secondNumber+") является - "+NOD);
}



function Zadanie3(){
	let deliteli=[];
	
	// Ввод + проверка введенных данных
	do {
		x = +prompt("Введите число для нахождения его делителей числа.");
		if (isNaN(x)) {alert("Вы ввели не число. Попробуйте еще раз."); continue;}
		else if (x % 1 !== 0) {alert("Введите целое число."); continue;}
		else break;
	}while (true)
		
	// Нахождение делителей
	deliteli[0] = 1;
	j = 1;	
	for (i=2;i<x; i++){
		if (x % i == 0) {
			deliteli[j] = i;
			j++;
		}		
	}
	deliteli[j] = x;
	
	// Вывод ответа
	alert("Для введенного Вами числа ("+x+") найдено "+deliteli.length+" делителя(ей).\nНайденные делители: "+deliteli);
}



function Zadanie4(){
	// Ввод + проверка ввода данных
	do{
		x = +prompt("Введите число для подсчета имеющихся в нем цифр.");
		if (isNaN(x)) {alert("Вы ввели не число. Попробуйте еще раз."); continue;}
		else break;
	}while(true)
	

	// Оределение количества цифр
	kolvoCifr = (x<0) ?  -1 : 0;
	if (x % 1 !== 0) kolvoCifr--;
	x = x.toString();
	kolvoCifr = kolvoCifr + x.length;

	// Вывод результата
	alert("В веденном Вами числе ("+x+") имеется - "+kolvoCifr+" цифр(ы).");
}



function Zadanie5(){
	// Ввод + проверка ввода
	x="";
	vvodDannih: do{
		x = prompt("Введите 10 чисел используя разделительный символ пробела \nНапример: 1 2 3 4 5 6 7 8 9 10", x);
		chisla = x.split(" ");
		console.log(chisla);
		if (chisla.length < 10) {alert("Вы ввели недостаточное количество значений."); continue vvodDannih;}
		else if (chisla.length > 10) {alert("Вы ввели значений больше чем требуется."); continue vvodDannih;}
		for (i=0;i<10;i++){
			chisla[i] = Number(chisla[i]);
			if  (isNaN(chisla[i])) {alert("Введенное Вами "+(i+1)+" значение - не является числом. Повторите ввод еще раз."); continue vvodDannih;}
		}
		break;
	}while(true)
	console.log(chisla);

	// подсчет
	polozit=0; otricat=0; nulevie=0;
	chetnie=0; neChetnie=0; neCelie=0;
	for (i=0;i<10;i++){
		if (chisla[i]<0) otricat++;
		else if (chisla[i]>0) polozit++;
		else nulevie++
		if (chisla[i] % 1 == 0){
			if (chisla[i] % 2 == 0) chetnie++;
			else neChetnie++
		}
		else
			neCelie++
	}	
	
	// Вывод результатов
	alert("Мы потрудились за Вас и вычислили, что в введенных Вами числах:\n\n"+x+"\n\n"+otricat+" отрицательных чисел;\n"+polozit+" положительных чисел;\n"+nulevie+" чисел равны нулю;\n\n"+chetnie+" четных чисел;\n"+neChetnie+" нечетных чисел;\n"+neCelie+" дробных чисел.");
}



function Zadanie6(){
	maincicle: do{
		// Ввод + проверка ввода
		do{
			indexZnak=0; 
			Znak=0;
			str = prompt("Мы подготовили для Вас калькулятор способный решать примеры используя простые математические операторы:\nсложение '+', вычитание '-', умножение '*', деление '/'\nДля получения ответа запишите пример в формате ЧИСЛОоператорЧИСЛО\nНапример: 2+2","");
			// Определяем математическую операцию и разделяем числа
			if (str == null) break maincicle;
			if (str.indexOf("+") !== -1) {indexZnak=str.indexOf("+"); Znak="+";}
			if (str.indexOf("-") !== -1) {
				if (Znak==0) {indexZnak=str.indexOf("-"); Znak="-";}
				else {alert("Вы ввели более одно математического оператора. Попробуйте еще раз."); continue;}
			}
			if (str.indexOf("*") !== -1){ 
				if (Znak==0) {indexZnak=str.indexOf("*"); Znak="*";}
				else {alert("Вы ввели более одно математического оператора. Попробуйте еще раз."); continue;}
			}
			if (str.indexOf("/") !== -1) {
				if (Znak==0) {indexZnak=str.indexOf("/"); Znak="/";}
				else {alert("Вы ввели более одно математического оператора. Попробуйте еще раз."); continue;}
			}
			// Определяем введенные числа
			firstNumber = Number(str.substr(0,indexZnak));
			secondNumber = Number(str.substring(indexZnak+1));
			if (isNaN(firstNumber) || isNaN(secondNumber)) {alert("Вы не корректно ввели числа. Попробуйте еще раз."); continue;}
			break;
		}while(true)
		
		// Вычисление
		switch (Znak) {
			case "+": otvet=firstNumber+secondNumber; break;
			case "-": otvet=firstNumber-secondNumber; break;
			case "*": otvet=firstNumber*secondNumber; break;
			case "/": otvet=firstNumber/secondNumber; break;
		}
		
		// Вывод результата+желаете ли продожить
		alert("У нас получилось решить Ваш пример "+str+"="+otvet);
		prodolzenie=confirm("Желаете решить еще один пример?");	
	}while(prodolzenie)
}



function Zadanie7(){
	// ввод+проверка введенных данных
	do{
		x = +prompt("Введите челое число.");
		if (isNaN(x)) {alert("Вы ввели не число. Попробуйте ще раз."); continue;}
		if (x % 1 !== 0) {alert("Вы ввели не целое число. Попробуйте еще раз."); continue;}
		break;
	}while(true)
		if (x<0) {Znak = "-";  x=String(-x);}
		else {Znak = "";  x=String(x);}
	do{
		kolvo = +prompt("Введите количество цифр на которое надо сдвинуть.");
		if (isNaN(kolvo)) {alert("Вы ввели не число. Попробуйте ще раз."); continue;}
		if (kolvo % 1 !== 0) {alert("Вы ввели не целое число. Попробуйте еще раз."); continue;}		
		if (kolvo < 0) {alert("Невозможно сдвинуть на отрицательное число. Попробуйте еще раз."); continue;}
		if (kolvo < x.length) break;
		else {alert("Невозможно сдвинуть на указанное Вами число цифр, данное количество должно быть меньше количества цифр в числе."); continue;}
	}while(true)
	
	// Сдвиг на нужное число знаков
	otvet = Znak+x.substr(kolvo)+x.substr(0,kolvo);
	
	// Вывод ответа
	alert("В результате сдвига введенного Вами числа "+Znak+x+" на "+kolvo+" знак(а, ов) получится число "+otvet);
}



function Zadanie8(){
	do{
		zelanie=confirm("Сейчас - ПОНЕДЕЛЬНИК.\n\nХотите увидеть следующий день недели?");
		if (zelanie==false) breack;
		i=1;
		do {
			i= i % 7;
			switch (i){
				case 0: {dayOfWeek="ПОНЕДЕЛЬНИК"; break;}
				case 1: {dayOfWeek="ВТОРНИК"; break;}
				case 2: {dayOfWeek="СРЕДА"; break;}
				case 3: {dayOfWeek="ЧЕТВЕРГ"; break;}
				case 4: {dayOfWeek="ПЯТНИЦА"; break;}
				case 5: {dayOfWeek="СУББОТА"; break;}
				case 6: {dayOfWeek="ВОСКРЕСЕНЬЕ"; break;}
			}
			i++;
			zelanie=confirm(dayOfWeek+".\n\nХотите увидеть следующий день недели?");	
		}while(zelanie)
	}while(zelanie)
}



function Zadanie9(){
	// Задаем значения константам
	let str=[];	
	
	// Заполняем строки таблицы умножения
	strTabl="";
	for (j=0;j<10;j++){
		str[j]="";
		for (i=0;i<8;i++){
			dobavka=("| "+(i+2)+"*"+(j+1)+"="+(j+1)*(i+2))
			switch (dobavka.length){
				case 7: {dobavka+="    |";break;}
				case 8: {dobavka+="  |"; break;}
				case 9: dobavka+="|";
			}
			str[j]=str[j]+dobavka;
		}
		strTabl+=str[j]+"\n";
	}
	console.log(str);
	alert("Таблица умножения:\n"+strTabl);
}


function Zadanie10(){
	let minChis=0;let maxChis=100; let tekChis=50;
	soglacie=confirm("Хотите сыграть в игру ''УГАДАЙ ЧИСЛО''?\nВэтой игре Вы загадаете число, а я попытаюсь его отгадать...\n\nИграем?");
	while(soglacie){
		alert("Загадайте любое целое число от "+minChis+" до "+maxChis+".\nКак будите готовы нажмите ОК.")
		
		// Отгадываем число
		do{
			ugadal=confirm("Загаданное Вами число < "+tekChis+" ?");
			if (ugadal == true) maxChis = tekChis;
			else minChis = tekChis;
			if ((maxChis-minChis) == 1) break;
			else tekChis = Math.floor((maxChis+minChis)/2);
		} while(true)
		ugadal=confirm("Загаданное Вами число > "+minChis+" ?");
		if (ugadal == true) tekChis=maxChis;
		else tekChis=minChis;
		
		// Вывод ответа+играем дальше?
		soglacie=confirm("Вы загадали число - "+tekChis+"\n\nСыграем еще раз?");
		minChis=0; maxChis=100; tekChis=50;
	}
}