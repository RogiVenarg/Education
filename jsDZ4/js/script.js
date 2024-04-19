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
function cifriVChislo (myChislo1, myChislo2, myChislo3){return myChislo1*100+myChislo2*10+myChislo3;}
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

// Задание 5
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

// задание 7
function vivodCHminSek(){
	let i;
	for (i=0; i<3; i++) {
		// Присвоение значения нулевого значения если аргументы не переданы
		if (arguments[i]==undefined)  arguments[i]=0;
		// Добавление нулей
		if (arguments[i]<10) arguments[i]="0"+arguments[i];
	}
	return '«'+arguments[0]+":"+arguments[1]+":"+arguments[2]+'»';
}
function Zadanie7(){
	let gpStr;
	let gpOtvet;
	let gpTime=[];
	do{
		// Ввод данных
		do{
			gpStr = prompt("Введите время в формате чч-мм-сс");
			if (gpStr==null) return; //Выход из функции
			gpTime = proverkaVvodaTime(gpStr);
			if (gpTime!=="Ошибка!!!") break;
		}while(true)
		// Запуск функции
		gpOtvet = vivodCHminSek(gpTime[0], gpTime[1], gpTime[2]);
		// Вывод данных
		alert("Вы ввели "+gpStr+"\nМоя функция вывела: "+gpOtvet);
	}while(true)
}

// Задание 8
function timeInSekond(){
	// попытка предотвращения некорректного ввода
	arguments[0] = arguments[0] % 24;
	arguments[1] = arguments[1] % 60;
	arguments[2] = arguments[2] % 60;
	//сам расчет
	return (arguments[0]*60+arguments[1])*60+arguments[2];
}
function Zadanie8(){
	let gpStr;
	let gpTime=[];
	let gpOtvet;
	do{
		// Ввод данных
		do{
			gpStr = prompt("Введите время в формате чч-мм-сс");
			if (gpStr==null) return; //Выход из функции
			gpTime=proverkaVvodaTime(gpStr);
			if (gpTime!=="Ошибка!!!") break;
		}while(true)
		// Вычисление секунд
		gpOtvet = timeInSekond(gpTime[0],gpTime[1],gpTime[2]);
		//Вывод ответа
		alert("Вы ввели следующее время: "+gpStr+"\nОт начала дня прошло: "+gpOtvet+" секунд.");
	}while(true)
}

// Задание 9
function raschetTime(myNum){
	let myTime=[];
	myTime[2] = myNum%60;
	myNum = (myNum - myTime[2])/60;
	myTime[1] = myNum %60;
	myTime[0] = (myNum - myTime[1])/60;
	myTime[3] = (myTime[0]>23) ? " (Количество секунд больше чем в одних сутках, результат выведен без учета переполнения)" : undefined;
	myTime[0] = myTime[0] % 24;
	return myTime;
}	
function Zadanie9(){
	let gpStr;
	let gpTime=[];
	let gpOtvet;
	do{
		//Ввод количества секунд
		do {
			gpStr = prompt("Введите количество секунд прошедших с начала дня.");
			if (gpStr==null) return //Выход из функции
			gpStr = Number(gpStr);
			if (isNaN(gpStr)) alert ("Вы ввели не число. Попробуйте еще раз.");
			if ((gpStr%1!==0) || (gpStr<0)) alert("Вы ввели не натуральное число. Попробуйте еще раз.");
			else break;
		} while (true)
		// Вычисление часов/минут/секунд
		gpTime = raschetTime(gpStr);
		//перевод в нужный формат
		gpOtvet=vivodCHminSek(gpTime[0],gpTime[1],gpTime[2]);
		if (gpTime[3]!==undefined) gpOtvet += gpTime[3];
		//Вывод сообщения
		alert("Вы ввели "+gpStr+" секунд\nОт начала дня прошло: "+gpOtvet);
	}while (true)
}

// задание 10
function raznicaTime(myChas1, myMinuta1, mySek1, myChas2, myMinuta2, mySek2){
		let mySekonds;
		let myTime=[];
		// Перевод в секунды + расчет разницы
		mySekonds = timeInSekond(myChas2, myMinuta2, mySek2) - timeInSekond(myChas1, myMinuta1, mySek1);
		if (mySekonds<0) mySekonds += 24*60*60;
		// Вычисление часов/минут/секунд
		myTime = raschetTime(mySekonds);
		//перевод в нужный формат
		return vivodCHminSek(myTime[0],myTime[1],myTime[2]);
}
function Zadanie10(){
	let gpOtvet;
	let gpStr1;	    let gpStr2;
	let gpTime1=[]; let gpTime2=[]; 
	do{
		// Ввод 1 времени
		do {
			gpStr1 = prompt("Первай вариант решения.\n\nДля расчета разницы во времени введите первое время.\nВремя укажите в формате: чч-мм-сс","");
			if (gpStr1==null) return //Выход из Функции
			gpTime1=proverkaVvodaTime(gpStr1);
			if (gpTime1!=="Ошибка!!!") break;
		} while (true)
		// Ввод 2 времени
		do {
			gpStr2 = prompt("Введите второе время в формате: чч-мм-сс", "");
			if (gpStr2==null) return //Выход из Функции
			gpTime2=proverkaVvodaTime(gpStr2);
			if (gpTime2!=="Ошибка!!!") break;
		} while (true)
		//Нужная функция
		gpOtvet = raznicaTime(gpTime1[0],gpTime1[1],gpTime1[2],gpTime2[0],gpTime2[1],gpTime2[2])
		//Вывод ответа
		alert("Разница между "+gpStr1+" и "+gpStr2+" составляет: "+gpOtvet);
	} while(true)
}
// задание 10 Вариант с датой
function raznicaDataTime(myVivod, myOperac, myData1, myTime1, myData2, myTime2){
	//Переводим в секунды
	let myFirstTime = new Date(Date.UTC(myData1[2], myData1[1], myData1[0]));
	let mySecondTime = new Date(Date.UTC(myData2[2], myData2[1], myData2[0]));
	myFirstTime = myFirstTime.getTime();
	mySecondTime = mySecondTime.getTime();
	myFirstTime += timeInSekond(myTime1[0], myTime1[1], myTime1[2]) * 1000;  //функция из предыдущего задания
	mySecondTime += timeInSekond(myTime2[0], myTime2[1], myTime2[2]) * 1000; //функция из предыдущего задания
	
	//Вычисления в секундах в зависимости от параметра
	myFirstTime = (myOperac<0) ? mySecondTime-myFirstTime : myFirstTime+mySecondTime;
	
	//Перевоим секунды в два массива
	let myData = new Date(myFirstTime);
	let myVivodData = [myData.getUTCFullYear(), myData.getUTCMonth(), myData.getUTCDate()];
	mySecondTime = new Date(Date.UTC(myVivodData[0], myVivodData[1], myVivodData[2])).getTime();
	myFirstTime -= mySecondTime;
	let myTime = raschetTime(myFirstTime/1000);	//функция из предыдущего задания
	myVivodData[0] -= 1970;
	
	//Выводим нужное значение разницы во времени
	if (myVivodData[2]<10) myVivodData[2]="0"+myVivodData[2];
	if (myVivodData[1]<10) myVivodData[1]="0"+myVivodData[1];
	while (String(myVivodData[0]).length < 4) {myVivodData[0] = "0"+myVivodData[0];}
	if (myVivod==0) return vivodCHminSek(myTime[0], myTime[1], myTime[2]); //функция из предыдущего задания
	else if (myVivod==1) {
		for (i=0; i<3; i++) {if (myTime[i]<10) myTime[i]="0"+myTime[i];}
		return '«'+myVivodData[2]+'.'+myVivodData[1]+'.'+myVivodData[0]+' '+myTime[0]+":"+myTime[1]+":"+myTime[2]+'»\n(Формат: ДД.ММ.ГГГГ ЧЧ:ММ:СС)';
	}
	else return "Я не знаю что вывести."
}
function Zadanie10New(){
	let gpOtvet;
	let gpStr1=[];	    let gpStr2=[];
	let gpData1=[];     let gpData2=[]; 
	let gpTime1=[];     let gpTime2=[]; 
	
	do{
		// Ввод 1 даты
		do {
			gpStr1[0] = prompt("Второй вариант решения.\n\nДля расчета разницы введите первую дату.\nДату укажите в формате: ДД-ММ-ГГГГ:чч-мм-сс","10-10-2010:20-20-20");
			if (gpStr1[0]==null) return //Выход из Функции
			if (gpStr1[0].indexOf(":") == -1) {
				alert("Неверный формат ввода даты.\nВы не ввели разделительный символ - ':'");
				continue;
			}
			gpStr1[1] = gpStr1[0].substr(0, gpStr1[0].indexOf(":"));
			gpStr1[2] = gpStr1[0].substr(gpStr1[0].indexOf(":")+1);
			gpData1=proverkaVvodaDati(gpStr1[1]);
			gpTime1=proverkaVvodaTime(gpStr1[2]);
			if ((gpTime1!=="Ошибка!!!") || (gpData1!=="Ошибка!!!")) break;
		} while (true)
			
		// Ввод 2 даты
		do {
			gpStr2[0] = prompt("Введите вторую дату в формате: ДД-ММ-ГГГГ:чч-мм-сс", "11-11-2011:22-22-22");
			if (gpStr2[0]==null) return //Выход из Функции
			if (gpStr2[0].indexOf(":") == -1) {
				alert("Неверный формат ввода даты.\nВы не ввели разделительный символ - ':'");
				continue;
			}
			gpStr2[1] = gpStr2[0].substr(0, gpStr2[0].indexOf(":"));
			gpStr2[2] = gpStr2[0].substr(gpStr2[0].indexOf(":")+1);
			gpData2=proverkaVvodaDati(gpStr2[1]);
			gpTime2=proverkaVvodaTime(gpStr2[2]);
			if ((gpTime2!=="Ошибка!!!") || (gpData2!=="Ошибка!!!")) break;
		} while (true)
			
		//Нужная функция
		// первый параметр определяет что выводится (0- только время)(1 - если дата и время)
		//второй параметр определяет что считается (-1 - разница между датами) (1 + сумма дат)
		gpOtvet = raznicaDataTime(1 , -1, gpData1, gpTime1, gpData2, gpTime2); 
		//Вывод ответа
		alert("Разница между "+gpStr1[0]+" и "+gpStr2[0]+"\n составляет: "+gpOtvet+"\n\nДля получения другого результата поменяйте аргументы функции.");
	} while(true)
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

// Функция принимает строку и проверяет формат ввода времени, возвращает либо ошибку либо массив из часов минут и секунд
function proverkaVvodaTime(myStr){
	let myTime=[];
	if (myStr.indexOf("-")==-1) {
		alert("Вы должны ввести не менее двух разделительных знаков: -");
		return "Ошибка!!!";
	}
	myTime[0]=myStr.substring(0, myStr.indexOf("-"));
	myTime[1]=myStr.substr(myStr.indexOf("-")+1);
	if (myTime[1].indexOf("-")==-1) {
		alert("Вы должны ввести не менее двух разделительных знаков: -");
		return "Ошибка!!!";
	}
	myTime[2]=myTime[1].substr(myTime[1].indexOf("-")+1);
	myTime[1]=myTime[1].substring(0, myTime[1].indexOf("-"));
	for (i=0; i<3; i++) myTime[i]=Number(myTime[i]);
	if (isNaN(myTime[0]) || isNaN(myTime[1]) || isNaN(myTime[2])){
		alert("Вы не корректно ввели значения часов, минут или секунд");
		return "Ошибка!!!";
	}
	if ((myTime[0]%1!==0) || (myTime[1]%1!==0) || (myTime[2]%1!==0) || (myTime[0]<0) || (myTime[1]<0) || (myTime[2]<0) || (myTime[0]>23) || (myTime[1]>59) || (myTime[2]>59)){
		alert("Вы не корректно ввели значения часов, минут или секунд. Используйте натуральные числа в пределах: 0-23 для часов и 0-59 для минут и секунд.");
		return "Ошибка!!!";
	}	
	else return myTime;
}

// Функция принимает строку и проверяет формат ввода даты, возвращает либо ошибку либо массив из дня, месяца, года
function proverkaVvodaDati(myStr){
	let myDate=[];
	let maxDay;
	// разделение на подстроки
	if (myStr.indexOf("-")==-1) {
		alert("Вы должны ввести не менее двух разделительных знаков: -");
		return "Ошибка!!!";
	}
	myDate[0]=myStr.substring(0, myStr.indexOf("-"));
	myDate[1]=myStr.substr(myStr.indexOf("-")+1);
	if (myDate[1].indexOf("-")==-1) {
		alert("Вы должны ввести не менее двух разделительных знаков: -");
		return "Ошибка!!!";
	}
	myDate[2]=myDate[1].substr(myDate[1].indexOf("-")+1);
	myDate[1]=myDate[1].substring(0, myDate[1].indexOf("-"));
	// Проверка на корректность вводаданных
	for (i=0; i<3; i++) myDate[i]=Number(myDate[i]);
	if (isNaN(myDate[0]) || isNaN(myDate[1]) || isNaN(myDate[2])){
		alert("Вы не корректно ввели значения часов, минут или секунд");
		return "Ошибка!!!";
	}
	if ((myDate[0]%1!==0) || (myDate[1]%1!==0) || (myDate[2]%1!==0) || (myDate[0]<=0) || (myDate[1]<=0)|| (myDate[0]>31) || (myDate[1]>12)){
		alert("Вы не корректно ввели значения даты. Используйте натуральные числа в пределах: 1-31 для дней, 1-12 для месяцев и любое целое число для года.");
		return "Ошибка!!!";
	}
	
	// Вычисление максимального дня во введенном месяце
	if (myDate[1]==2) {
		// Високосность года
		if (myDate[2] % 400 == 0) maxDay=29;
		else if ((myDate[2] % 4 == 0) && !(myDate[2] % 100 ==0)) maxDay=29;
		else maxDay=28;
	} 
	else maxDay = ((myDate[1]==4) || (myDate[1]==6) || (myDate[1]==9) || (myDate[1]==11))? 30 : 31;
	
	// Проверка на количество дней в месяце
	if (myDate[0] > maxDay) {
		alert("В данном месяце меньше дней чем Вы ввели.");
		return "Ошибка!!!";
	}
	else return myDate;
}