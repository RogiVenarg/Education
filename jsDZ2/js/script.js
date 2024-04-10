function Zadanie1(){
	x=prompt("Каков Ваш возраст?");
	y="Судя по Вашему возрасту, Вы являетесь "
	if (x>60) y+="пенсионером."
	else if (x>=18) y+="взрослым."
	else if (x>=12) y+="подростком."	
	else if (x<=2) y+="ребенком."
	else y="По условию задания Ваш возраст определить невозможно. \nНо скорее всего Вы еще ребенок. :)"
	alert(y);
	}
	
	
	
function Zadanie2(){
	do{
		x=prompt("Введите цифру от 0 до 9.");
		switch (x){
			case "0": y=")"; break;
			case "1": y="!"; break;
			case "2": y="@"; break;
			case "3": y="3"; break;
			case "4": y="$"; break;
			case "5": y="%"; break;
			case "6": y="^"; break;
			case "7": y="&"; break;
			case "8": y="*"; break;
			case "9": y="("; break;
			default: {
				y=0;
				alert("Что-то пошло не так, возможно вы ввели символ не предусмотренный условием задания.\nПопробуйте еще раз.");
			}
		}
	} while(y==0);
	alert("В английской раскладке клавиатуры, \nна одной клавише с указанной Вами цыфрой ("+x+") расположен спецсимвол - "+y);
}



function Zadanie3(){
	// Ввод данных + проверка их корректности
	y=0;
	do{
		x= +prompt("Введите трехзначное число.");
		if ( ((1000>x)&&(x>99)) || ((-99>x)&&((x>-1000))) && (Math.floor(x)==x) )y=1;
		else if (isNaN(x)) {
			alert("Вы ввели не число. Попробуйте еще раз.");
			continue;
		}
		else {
			alert("Вы ввели не трехзначное число.");
			continue;
		}
	} while(y==0)
		
	// Разделяем число на три цыфры
	x=(x > 0)? x : -x;
	FirstNum=Math.floor(x/100);
	SecondNum=Math.floor((x-FirstNum*100)/10);
	ThirdNum=x-FirstNum*100-SecondNum*10;
		
	// Проверка условия задания+вывод результата
	if ((FirstNum == SecondNum) && (SecondNum == ThirdNum)) alert("В введенном Вами числе совпадают все три цифры.");
	else if (FirstNum == SecondNum) alert("В введенном Вами числе первая и вторая цифра совпадают.");
	else if (SecondNum == ThirdNum) alert("В введенном Вами числе вторая и третья цифра совпадают.");
	else if (FirstNum == ThirdNum) alert("В введенном Вами числе первая и третья цифра совпадают.");
	else alert("В веденном Вами числе не совпадает ни одна цифра.");
}



function Zadanie4(){
	// Ввод + Проверка введенного значения
	do{
		x = +prompt("Введите интересующий Вас год для проверки.");
		if (isNaN(x)) {alert("Для проверки требуется ввести целое число. Попробуйте ввести еще раз."); continue;}
		else if (x % 1 !== 0) {alert("Введите целое число."); continue;}
		else break;
	} while (true)
		
	// определяем високосный ли год + вывод
	y = (x < 0) ? " до н.э." : "";
	x = (x < 0) ? -x : x;
	if (x % 400 == 0) z="високосный.";
	else if ((x % 4 == 0) && !(x % 100 ==0)) z="високосный.";
	else z="не високосный.";
	alert("Введенный Вами "+x+" год"+y+" - "+z);
}



function Zadanie5(){
	// Ввод + Проверка введенного значения
	do{
		x = +prompt("Введите пятиразрядное число.");
		console.log((100000>x),(x>9999),(-9999>x),(x > -100000))
		if (isNaN(x)) {alert("Для проверки требуется ввести целое число. Попробуйте ввести еще раз."); continue;}
		else if (x % 1 !== 0) {alert("Введите целое число."); continue;}
		else if (((100000>x) && (x>9999)) || ((-9999>x) && (x > -100000))) break;
		else {alert ("Вы ввели не пятиразрядное число. Попробуйте еще раз."); continue;}
	} while (true)
	
	// Определение является ли палиндромом + вывод
	Znak = (x < 0) ? "-" : "";
	x = (x < 0) ? -x : x;
	FirstNum = Math.floor(x/10000);
	x = x-FirstNum*10000;
	SecondNum = Math.floor(x/1000);
	x = x-SecondNum*1000;
	ThirdNum = Math.floor(x/100);
	x = x-ThirdNum*100;
	FourthNum = Math.floor(x/10);
	FifthNum = x-FourthNum*10;
	console.log(FirstNum,SecondNum,ThirdNum,FourthNum,FifthNum);
	y = ((SecondNum == FourthNum) && (FifthNum == FifthNum))? " - палиндром." : " - не является палиндромом.";
	alert("Введенное Вами число "+Znak+FirstNum+SecondNum+ThirdNum+FourthNum+FifthNum+y);
}



function Zadanie6(){
	const Keur=0.9, Kuan=0.8, Kazn=0.5
	// Ввод + проверка введенного значения количества обмениваемой валюты
	do{
		Kolvo = +prompt("Введите количество USD подлежащее обмену.");
		if (isNaN(Kolvo)) alert("Введите количество USD в виде положительного числа.");
		else if (Kolvo<0) alert("Введение отрицательных чисел недопустимо. Попробуйте еще раз.");
		else break;
	} while (true)
	
	// Ввод + проверка на возможность обмена в эту валюту
	VvodValut: do {
		Valuta = prompt("Выберите валюту из имеющихся у нас в наличии: EUR, UAN, AZN.\n\nВведите наименование валюты в которую собираетесь перевести Ваши USD сохраняя приведенное выше написание.\nАктуальный курс на текущий момент: EUR/USD - "+Keur+", UAN/USD - "+Kuan+", AZN/USD - "+Kazn);
		switch (Valuta) {
			case "EUR": {Kperev=Keur; break VvodValut;}
			case "UAN": {Kperev=Kuan; break VvodValut;}
			case "AZN": {Kperev=Kazn; break VvodValut;}
			default: alert ("Введенное вами значение не соответствует ни одной из имеющихся валют. Попробуйте еще раз");
		}
	} while(true)
	
	// Вычисление по обменному курсу и вывод значения
	Kolvo=(Kolvo*Kperev).toFixed(2);
	alert("Обмен проведен успешно. \nНа Ваш балланс зачислено "+Kolvo+" "+Valuta);
}



function Zadanie7(){
	const Skidka1=0.03, Skidka2=0.05, Skidka3=0.07; 
	// Ввод суммы покупки + проверка введенныданных
	do {
		SummaPokup=+prompt("Для расчета суммы к оплате, введите сумму для покупки.");
		if (isNaN(SummaPokup)) alert("Введите сумму покупки в виде положительного числа.");
		else if (SummaPokup<0) alert("Введение отрицательных чисел недопустимо. Попробуйте еще раз.");
		else break;
	} while (true)
	
	// Расчет суммы к оплате + вывод
	if (SummaPokup<200) Skidka=0;
	else if (SummaPokup<300) Skidka=Skidka1;
	else if (SummaPokup<500) Skidka=Skidka2;
	else if (SummaPokup=>500) Skidka=Skidka3;
	SummaPokup-=SummaPokup*Skidka;
	SummaPokup=Math.ceil(SummaPokup*100)/100;
	alert("Сумма к оплате: "+SummaPokup+".");
	console.log(SummaPokup, Skidka);
}



function Zadanie8(){
	// Ввод длинны окружности + проверка введенных данных
	do{
		L_Okr = +prompt("Введите длинну окружности.");
		if (isNaN(L_Okr)) alert("Для корректных вычислейний введите длинну окружности в виде положительного числа"); 
		else if (L_Okr<=0) alert("Длинна окружности не может быть меньше или равна нулю.");
		else break;
	} while (true)
		
	// Ввод периметра квадрата + проверка введенных данных
	do{
		P_Kv = +prompt("Введите периметр квадрата.");
		if (isNaN(P_Kv)) alert("Для корректных вычислейний введите периметр квадрата в виде положительного числа"); 
		else if (P_Kv<=0) alert("Периметр не может быть меньше или равен нулю.");
		else break;
	} while (true)
		
	// Вычисление результата + вывод ответа пользователю
	Stor_Kv = P_Kv/4;
	D_Okr = L_Okr/Math.PI;
	str_Otvet = (D_Okr>Stor_Kv)?" не может поместится ":" может поместится ";
	alert("Указанная Вами окружность c длинной окружности - "+L_Okr+str_Otvet+"в квадрат с периметром "+P_Kv+".");
}



function Zadanie9(){
	// Создаем базу с вопросов и ответов к ним
	var Voprosnik=["Сколько будет 2*2=?", "Сколько будет 2+2=?", "Сколько будет 2+2*2=?"];
	var VariantiOtvetov = [4, 6, 8];
	var PravilnieOtveti=[4, 4, 6];
	
	// Задаем вопросы и выставляем оценки
	Ball=0;
	for (i=0;i<3;i++){
		// Задаем вопрос и проверяем корректность введенного ответа
		do{ 
			Otvet = +prompt(Voprosnik[i]+"\n\nВарианты ответов:  "+VariantiOtvetov[0]+",  "+VariantiOtvetov[1]+",  "+VariantiOtvetov[2]);
			if (isNaN(Otvet)) alert("Введите ответ в виде числа");
			else if ((Otvet == VariantiOtvetov[0])||(Otvet == VariantiOtvetov[1])||(Otvet == VariantiOtvetov[2])) break;
			else alert("Выберите один из предложенных вариантов ответа.");
		}while (true);
		// Проверяем являяется ли ответ правильным + ставим баллы
		if (Otvet == PravilnieOtveti[i]) Ball +=2;
	}
	// Вывод количества набранных баллов.
	alert("Вы набрали "+Ball+" балла(ов) из 6 возможных.");
}



function Zadanie10(){
	// Ввод и проверка введенных данных
	do {
		personalData=prompt("Введите любую дату в формате: ГГГГ-ММ-ДД\nПример ввода: 2024-03-25");
		if (personalData==null) {alert("Вы не корректно ввели дату. Попробуйте еще раз."); continue;}
		var V_FormateData = new Date (personalData);
		if ((V_FormateData!=="Invalid Date")&&(personalData.length==10)&&(personalData[4]=="-")&&(personalData[7]="-")) break;
		else alert("Вы не корректно ввели дату. Попробуйте еще раз.");
	} while(true)
		
	
	// Добавление одного дня
		let DataNaVivod = new Date (V_FormateData.valueOf() + 24*60*60*1000);
		
	// Подготовка и вывод дат
	switch(V_FormateData.getMonth()){
		case 0:{myMonth1=" января "; break;}
		case 1:{myMonth1=" февраля "; break;}
		case 2:{myMonth1=" марта "; break;}
		case 3:{myMonth1=" апреля "; break;}
		case 4:{myMonth1=" мая "; break;}
		case 5:{myMonth1=" июня "; break;}
		case 6:{myMonth1=" июля "; break;}
		case 7:{myMonth1=" августа "; break;}
		case 8:{myMonth1=" сентября "; break;}
		case 9:{myMonth1=" октября "; break;}
		case 10:{myMonth1=" ноября "; break;}
		case 11:{myMonth1=" декабря "; break;}
	}
	personalData=V_FormateData.getDay()+myMonth1+V_FormateData.getFullYear()+" года.";
	console.log(personalData);	
	switch(DataNaVivod.getMonth()){
		case 0:{myMonth1=" января "; break;}
		case 1:{myMonth1=" февраля "; break;}
		case 2:{myMonth1=" марта "; break;}
		case 3:{myMonth1=" апреля "; break;}
		case 4:{myMonth1=" мая "; break;}
		case 5:{myMonth1=" июня "; break;}
		case 6:{myMonth1=" июля "; break;}
		case 7:{myMonth1=" августа "; break;}
		case 8:{myMonth1=" сентября "; break;}
		case 9:{myMonth1=" октября "; break;}
		case 10:{myMonth1=" ноября "; break;}
		case 11:{myMonth1=" декабря "; break;}
	}
	sledPersonalData=DataNaVivod.getDay()+myMonth1+DataNaVivod.getFullYear()+" года.";
	console.log(sledPersonalData);
	alert("Дата введенная Вами: "+personalData+"\nДата следующего дня: "+sledPersonalData+"\n\nВозможно это не тот способ который подразумевался, но добавлять к дате время нужно таким способом :)");
}