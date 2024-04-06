// Основные фнкции задания
// Задание 1
function Zadanie1(){
	var gpChisla=[];
	do{
		// Ввод данных
		do {
			gpStr=prompt("Введите два числа в формате ЧИСЛО-ЧИСЛО.\nНапример: 123-456","");
			if (gpStr==null) return; //Прерывание программы при отмене ввода
			gpChisla=twoNumerInStr(gpStr);
			if (gpChisla=="Ошибка!!!") alert("Вы ввели числа не в том формате. Попробуйте еще раз.");
			else break; 
		} while (true)
		// Вывод результата
		alert("Вы ввели "+gpStr+"\nЗначение исполняемой функции: "+Sravnenie(gpChisla[0],gpChisla[1]));	
	}while(true)
	
}
function Sravnenie(a, b){
	if (a<b) return -1;
	else if (a>b) return 1;
	else return 0;
}

// Задание 2
function gpFactorial(chislo){
	let myFactorial = 1;
	if (chislo!==0){
		for (i=1; i<=chislo; i++){
			myFactorial = myFactorial*i;
		}
	}
	return myFactorial;
}
function Zadanie2(){
	let otvet
	do {
		// Ввод данных
		do {
			gpNum=prompt("Введите натуральное число для вычисления его факториала.","");
			if (gpNum==null) return; //Прерывание программы при отмене ввода
			gpNum=Number(gpNum);
			if (isNaN(gpNum)) alert("Вы ввели не число. Попробуйте еще раз.");
			else if ((gpNum%1!==0) || (gpNum<0)) alert("Вы ввели не натуральное число. Попробуйте еще раз.");
			else {
				otvet = gpFactorial(gpNum);
				break;
			}
		} while (true)
		alert("Вы ввели число "+gpNum+". Факториал данного числа равен - "+otvet);	
	}while(true)
}

// Задание 3
function cifriVChislo (myChislo1, myChislo2, myChislo3){
	return myChislo1*100+myChislo2*10+myChislo3;
}
function Zadanie3(){
	let gpChisla=[];
	let gpStr="";
	do{
		// Ввод данных
		for (i=0; i<3; i++){
			switch (i) {
				case 0: gpStr="первую"; break;
				case 1:	gpStr="вторую"; break;
				case 2: gpStr="третью";
			}
			do{
				gpChisla[i] = prompt("Введите "+gpStr+" цифру.","");
				if (gpChisla[i]==null) return; //Прерывание программы при отмене ввода
				gpChisla[i]=Number(gpChisla[i]);
					
				if (isNaN(gpChisla[i])) alert("Вы ввели не число. Попробуйте еще раз.");
				else if ((gpChisla[i]%1!==0) || (gpChisla[i]<0)) alert("Вы ввели не натуральное число. Попробуйте еще раз.");
				else if (gpChisla[i]>9)  alert("Вы ввели число, а не цифру. Попробуйте еще раз.");
				else break;
			}while (true)
		}
		// Расчет 
			gpOtvet = cifriVChislo(gpChisla[0], gpChisla[1], gpChisla[2]);
		// вывод данных
		alert(`Вы ввели три цифры: ${gpChisla[0]}; ${gpChisla[1]}; ${gpChisla[2]} \nМоя функция преобразовала их в число ${gpOtvet}`);
	}while (true)
}

// Задание 4
function sqrtPr() {
	switch (arguments.length) {
		case 1: return arguments[0]**2;
		case 2: return arguments[0]*arguments[1];
		default: return "Ошибка!!!";
	}
}
function Zadanie4(){
	let gpNum;
	let gpShir;
	let otvet;
	do{
		do{
			gpShir = "";
			gpNum = prompt("Для вычисления площади прямоугольника\n введите его длинну и ширину в формате ЧИСЛО-ЧИСЛО\n\nДля вычисления площади квадрата \nвведите длинну его cтороны в формате ЧИСЛО");
			if (gpNum==null) return; //Прерывание функции
			if (gpNum.indexOf("-")==-1){
				gpNam = Number(gpNum);
				if (isNaN(gpNum) || (gpNum<0)){
					alert("Вы не корректно ввели данные. Попробйте еще раз");
					continue;
				}
				else { 
					otvet = sqrtPr(gpNum);
					break;
				}
			}
			else{
				gpShir = gpNum.substr(gpNum.indexOf("-")+1);
				gpNum = gpNum.substring(0, gpNum.indexOf("-")); 
				gpShir = Number(gpShir);
				gpNum = Number(gpNum);
				if (isNaN(gpShir) || isNaN(gpNum) || (gpShir<=0) || (gpNum<=0)){
					alert("Вы не корректно ввели данные. Попробйте еще раз");
					continue;
				}
				else {
					otvet = sqrtPr(gpShir, gpNum);
					break;
				}
			}
		}while (true)
		alert(`Вы ввели следующие параметры: ${gpNum}; ${gpShir}\nПлощадь равна: ${otvet}`);
	}while (true)
}

// Задание 4
function sovershenoeNumber(myChislo){
	let myArray=[];
	let i;
	let j;
	if ((myChislo<=0) || (myChislo%1!==0)) return " не является";
	else {
		j=0;
		for (i=1; i<myChislo; i++){
			if (myChislo % i==0) {myArray[j]=i; j++;}
		}
		for (i=1; i<j; i++)myArray[0] += myArray[i];
		if (myArray[0]==myChislo) return " является";
		else return " не является";
	}		
}
function Zadanie5(){
	let vivod;
	do {
		// Ввод
		do{
			gpNum=prompt("Введите число для проверки");
			if (gpNum==null) return; // Выход из функции
			gpNum = Number(gpNum);
			if (isNaN(gpNum)) alert("Вы ввели не число. Попробуйте еще раз.");
			else break;
		}while (true)
		// Проверка
		vivod = sovershenoeNumber(gpNum);
		// Вывод ответа
		alert("Введенное Вами число "+gpNum+vivod+ " совершенным.");
	} while (true)
}

// Задание 6

function Zadanie6(){
	let gpArray=[];
	let gpOtvet=[];
	let i; let j;
	do{
		// ввод диапазона
		do{
			gpNum = prompt("Для поиска совершенных чисел введите диапазон поиска в формате ЧИСЛО-ЧИСЛО\nНапример 123-321");
			if (gpNum == null) return //Завершение работы функции
			gpArray=twoNumerInStr(gpNum);
			if (gpArray=="Ошибка!!!") {alert("Диапазон введен не корректно. Попробуйте еще раз."); continue;}
			else if ((gpArray[0]<0) || (gpArray[1]<0) || (gpArray[0]==gpArray[1])) {alert("Диапазон введен не корректно. Попробуйте еще раз."); continue;}
			else break;
		}while(true)
		//Определение мин и мах значения диапазона
		if (gpArray[1]<gpArray[0]) {
			x=gpArray[1];
			gpArray[1]=gpArray[0];
			gpArray[0]=x;
		}
		gpArray[0] = Math.ceil(gpArray[0]);
		gpArray[1] = Math.floor(gpArray[1]);
		//поиск и отбор совершенных чисел
		gpOtvet=[];
		if (gpArray[0]>gpArray[1])j=0;
		else{
			j=0;
			for (i=gpArray[0]; i<=gpArray[1]; i++){
				if (sovershenoeNumber(i)==" является") {
					gpOtvet[j] = i;
					j++;
				}
			}
		}
		//вывод данных
		alert("В введенном Вами диапазоне "+gpNum+" найдено " +j+(str=(j==1)?" совершенное число": " совершенных чисел")+":\n" + (a=(j==0) ? "" : gpOtvet));
	}while(true)
}

function Zadanie7(){
	
}

function Zadanie8(){
	
}

function Zadanie9(){
	
}

function Zadanie10(){
	
}



// Дополнительные фнкции
// Функция принимает текст в формате ЧИСЛО-ЧИСЛО и преобразует в массив из 2-х чисел. Если ошибка то "Ошибка!!!"
function twoNumerInStr (myStr){
	let myVivod=[];
	if (myStr.indexOf("-")==-1) return "Ошибка!!!";
	myVivod[0]=myStr.substring(0, myStr.indexOf("-"));
	myVivod[1]=myStr.substr((myStr.indexOf("-")+1));
	myVivod[0]=Number(myVivod[0]);
	myVivod[1]=Number(myVivod[1]);
	if ((isNaN(myVivod[0])) || (isNaN(myVivod[1]))) return "Ошибка!!!";
	else return myVivod;	
}