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

function Zadanie4(){
	
}

function Zadanie5(){
	
}

function Zadanie6(){
	
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