// Задание 1
function numberInStepen(myNum, myStep){
	if (myStep==0) return 1;
	else return myNum*numberInStepen(myNum,myStep-1);
}
function Zadanie1(){
	let gpOtvet;
	let gpChisla=[];
	let gpStr;
	
	do{
		// Ввод данных
		do {
			gpStr=prompt("Введите число и степень в которую его необходимо возвести.\nДанные введите в формате: ЧИСЛО-СТЕПЕНЬ","");
			if (gpStr==null) return; //Прерывание программы при отмене ввода
			gpChisla=twoNumerInStr(gpStr);
			if (gpChisla=="Ошибка!!!") alert("Вы ввели данные не в том формате. Попробуйте еще раз.");
			else if (gpChisla[1]%1!==0) alert ("Степень, в которую необходимо возвести число, не может быть дробной.")
			else break; 
		} while (true)
	
		gpOtvet = numberInStepen(gpChisla[0],gpChisla[1]);
		// Вывод результата
		alert("Вы запросили число "+gpChisla[0]+" возвести в степень "+gpChisla[1]+"\nОтвет: "+gpOtvet);
	}while(true)
}

// Задание 2
function myNOD(){
	if ((arguments.length !==2) && (arguments.length !==3)){
		alert("Функция так не работает"); 
		return;
	}
	if (arguments.length == 2) return myNOD(arguments[0],arguments[1],arguments[0]);
	if (arguments[0] <= arguments[1]) {
		if ((arguments[1] % arguments[2] ==0) && (arguments[0] % arguments[2] ==0)) return arguments[2];
		else arguments[2]--;
	}
	else [arguments[0], arguments[1]] = [arguments[1], arguments[0]];
	return myNOD(arguments[0],arguments[1],arguments[2]);
}

function Zadanie2(){
	let gpStr;
	let gpChisla=[];
	let gpOtvet;
	
	do{
		// Ввод данных
		do{
			gpStr = prompt("Для нахождения НОД введите два натуральных числа в формате ЧИСЛО-ЧИСЛО", "");
			if (gpStr == null) return //Выход из функции
			gpChisla=twoNumerInStr(gpStr);
			if (gpChisla=="Ошибка!!!") alert("Вы ввели данные не в том формате. Попробуйте еще раз.");
			else if ((gpChisla[0]<=0) || (gpChisla[0]%1 !== 0)) alert("Первое введенное Вами число не является натуральным. Попробуйте еще раз.");
			else if ((gpChisla[1]<=0) || (gpChisla[1]%1 !== 0)) alert("Второе введенное Вами число не является натуральным. Попробуйте еще раз.");
			else break;
		}while (true)
		//нахождение НОД
		gpOtvet=myNOD(gpChisla[0],gpChisla[1]);
		// Вывод ответа
		alert("Вы ввели числа "+gpChisla[0]+" и "+gpChisla[1]+".\nНаибольший общий делитель данных чисел равен: "+gpOtvet);
	}while(true)
}

// Задание 3
function myMaxCif(){
	if (arguments.length==1) return myMaxCif(String(arguments[0]),0)
	if (arguments[0].substr(0,1)==".") {}
	else {
		if (Number(arguments[0].substr(0,1))>arguments[1]) arguments[1]=Number(arguments[0].substr(0,1));
		if (arguments[0].length==1) return arguments[1];
	}
	return myMaxCif(arguments[0].substr(1),arguments[1]);
}
function Zadanie3(){
	let gpStr;
	let gpChislo;
	let gpOtvet;
	
	do{
		// Ввод данных
		do{
			gpStr = prompt("Для поиска максимальной цифры введите любое число.", "");
			if (gpStr == null) return //Выход из функции
			gpStr=Number(gpStr);
			if (isNaN(gpStr)) alert("Вы ввели не число. Попробуйте еще раз.");
			else break;
		}while (true)
		//нахождение максимальной цифры
		gpChislo = (gpStr<0) ? -gpStr : gpStr;
		gpOtvet=myMaxCif(gpChislo);
		// Вывод ответа
		alert("Вы ввели число "+gpStr+".\nМаксимальная цифра в данном числе: "+gpOtvet);
	}while(true)
}

// Задание 4
function myProstoNum(){
	if (arguments.length==1) {
		if ((arguments[0]%1!==0) || (arguments[0]<1)) return "не является";
		else return myProstoNum(arguments[0], arguments[0]-1);
	}
	else {
		if (arguments[1]<=1) return "является";
		else {
			if (arguments[0]%arguments[1]==0) return "не является";
			else return myProstoNum(arguments[0], arguments[1]-1);
		}
	}
}
function Zadanie4(){
	let gpStr;
	let gpOtvet;
	
	do{
		// Ввод данных
		do{
			gpStr = prompt("Введите число для определения простое ли оно.", "");
			if (gpStr == null) return //Выход из функции
			gpStr=Number(gpStr);
			if (isNaN(gpStr)) alert("Вы ввели не число. Попробуйте еще раз.");
			else break;
		}while (true)
		//Определение простое ли число
		gpOtvet=myProstoNum(gpStr);
		// Вывод ответа
		alert("Вы ввели число "+gpStr+".\nДанное число "+gpOtvet+" простым.");
	}while(true)
}

// Задание 5
function myMnozitNum(){
	if (arguments.length==1) return myMnozitNum(arguments[0], 2);
	else{
		if (arguments[0] == arguments[1]) return arguments[0];
		if (arguments[0]%arguments[1]==0) return `${arguments[1]} * ${myMnozitNum((arguments[0]/arguments[1]),2)}`;
		else return myMnozitNum(arguments[0], (arguments[1]+1));
	}
}
function Zadanie5(){
	let gpStr;
	let gpOtvet;
	
	do{
		// Ввод данных
		do{
			gpStr = prompt("Введите натуральное число для определения его множителей.", "");
			if (gpStr == null) return //Выход из функции
			gpStr=Number(gpStr);
			if (isNaN(gpStr)) alert("Вы ввели не число. Попробуйте еще раз.");
			if ((gpStr%1 !==0) || (gpStr < 1)) alert("Вы ввели не натуральное число. Попробуйте еще раз.");
			else break;
		}while (true)
		//Определение множителей натурального числа
		gpOtvet = myMnozitNum(gpStr);
		// Вывод ответа
		alert("Вы ввели число "+gpStr+".\nДанное число имеет следующие множители: "+gpOtvet);
	}while(true)
}

// Задание 6
function myFibonachiNum(){
	if (arguments.length !== 3) return myFibonachiNum(arguments[0],0,1);
	if (arguments[0]==1) return arguments[2];
	else{
		arguments[0]--;
		return myFibonachiNum(arguments[0],arguments[2],arguments[1]+arguments[2]);
	}
}
function Zadanie6(){
	let gpStr;
	let gpOtvet;
	
	do{
		// Ввод данных
		do{
			gpStr = prompt("Введите порядковый номер числа Фибоначи и я скажу что это за число.", "");
			if (gpStr == null) return //Выход из функции
			gpStr=Number(gpStr);
			if (isNaN(gpStr)) alert("Вы ввели не число. Попробуйте еще раз.");
			if ((gpStr%1 !==0) || (gpStr < 1)) alert("Вы ввели не натуральное число. Попробуйте еще раз.");
			else break;
		}while (true)
		//Определение множителей натурального числа
		gpOtvet = myFibonachiNum(gpStr);
		// Вывод ответа
		alert("Вы запросили число с порядковым номером - "+gpStr+".\nДанное число: "+gpOtvet);
	}while(true)
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