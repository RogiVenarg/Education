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

function Zadanie2(){
	alert("2 работает");
}

function Zadanie3(){
	alert("3 работает");
}

function Zadanie4(){
	alert("4 работает");
}

function Zadanie5(){
	alert("5 работает");
}

function Zadanie6(){
	alert("6 работает");
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