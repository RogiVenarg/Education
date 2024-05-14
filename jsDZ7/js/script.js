let gpElement=document.getElementsByClassName("rezults");

for (var i = 0; i < gpElement.length; i++){
	gpElement[i].addEventListener("click", function(){
		this.classList.add("MyNewclass");
	})	
}

// 1 задание
class pokupka {
	#article = Math.floor(100000000 * Math.random());
	constructor(name, needQuantity, buy){
		this.name = name;
		this.needQuantity = Number(needQuantity);
		this.buy = buy;
		
		this.toString = function(){
			let str;
			
			str = this.name + " - ";
			str += (this.buy == false) ? "осталось купить " : "куплено ";
			str += this.needQuantity + " ед.";
			return str;
		}
	}
}
//Создание списка продуктов
let mySpisok = [];
mySpisok[0] = new pokupka("Хлеб", 2, false);
mySpisok[1] = new pokupka("Молоко", 1, true);
mySpisok[2] = new pokupka("Яйца", 10, false);
mySpisok[3] = new pokupka("Кофе", 1, false);
mySpisok[4] = new pokupka("Огурцы", 3, false);

//Сортировка покупок в списке
function mySpisokSort(gpSpisok){
	let gpElement;
	let quantityElements = gpSpisok.length;
	
	for (var i=0; i < quantityElements; i++){
		if (gpSpisok[i].buy == true){
			gpElement = gpSpisok[i];
			gpSpisok.splice(i, 1);
			gpSpisok[quantityElements-1] = gpElement;
		}
	}
}
function Zadanie1_1(){
	let str;

	mySpisokSort(mySpisok);
	str = "Список покупок.\n"
	for (var i = 0; i < mySpisok.length; i++){
		str += mySpisok[i] + ";\n";
	}
	alert(str);
}
function Zadanie1_2(){
	let str;  			let gpQuantity;
	let index1;
	let newSpisok=[];
	
	//Ввод + проверка ввода данных
	do{
		str = prompt("Для добавления продукта в список покупок введите название продукта"+
						" и его количество\nДанные введите в формате: НАЗВАНИЕ-КОЛИЧЕСТВО", 
						"Помидоры-2");
		index1 = str.indexOf("-");
		if (index1 == -1) {
			alert("Вы ввели данные не в том формате.\nПопробуйте еще раз.");
			continue;
		} 
		gpQuantity = str.substr(index1 + 1);
		str = str.substr(0, index1);
		gpQuantity = Number(gpQuantity);
		if (isNaN(gpQuantity) || (gpQuantity < 1) || (gpQuantity % 1 !== 0)){
			alert("Вы неорректно ввели количество продукта.\nИспоьзуйте положительные"+
					" целые числа.\nПопробуйте еще раз.");
			continue;
		}
		break;
	} while (true)
	// Добавлеие покупки
	mySpisokSort(mySpisok);
	newSpisok = mySpisok.filter(item => item.name == str);
	switch (newSpisok.length){
		case 0:
			mySpisok.push(new pokupka(str, gpQuantity, false));
			break;
		case 1:
			index1 = mySpisok.indexOf(newSpisok[0]);
			if	(mySpisok[index1].buy == false) mySpisok[index1].needQuantity += gpQuantity;
			else mySpisok.push(new pokupka(str, gpQuantity, false));
			break;
		case 2:
			index1 = mySpisok.indexOf(newSpisok[0]);
			if (mySpisok[index1].buy == true) index1 = mySpisok.indexOf(newSpisok[1]);
			if	(mySpisok[index1].buy == true) {
				return alert("Произошла критическая ошибка чтения данных со списка."+
								"\nВыполнение программы остановлено.");
			}
			mySpisok[index1].needQuantity += gpQuantity;
			break;
		default:
			return alert("Произошла критическая ошибка чтения данных со списка."+
							"\nВыполнение программы остановлено.");
	}
	//Оповещение о выполнени
	alert("Введенный Вами продукт " + str + " в кол-ве " + gpQuantity + 
			" ед. успешно добавлен в список покупок как спланированный к покупке продукт.");
}
function Zadanie1_3(){
	let str;
	let newSpisok=[];
	let myIndex1; let myIndex2;
	let i;
	
	mySpisokSort(mySpisok);
	str = prompt("Введите название купленного продукта.", "Яйца");
	
	newSpisok = mySpisok.filter(item => item.name == str);
	switch (newSpisok.length) {
		case 0: // Название продукта в списке покупок не нашлось
			return alert("Невозможно отметить несуществующий продукт как купленный."+
							"\nВыполнение программы остановлено.");
		case 1: // Нашелся один товар с введенным названием
			myIndex1 = mySpisok.indexOf(newSpisok[0]);
			if (newSpisok[0].buy == false) {
				if (newSpisok[0].needQuantity == 1) mySpisok[myIndex1].buy = true;
				else {
					mySpisok[myIndex1].needQuantity--;
					mySpisok.push(new pokupka(str, 1, true));
				}
			}
			else return alert("Указанный Вами продукт уже куплен."+
								"\nВыполнение программы остановлено.");
			break;
		case 2: // Нашлось два товара с введенным названием
			if ((newSpisok[0].buy == false) && (newSpisok[1].buy == true)){
				myIndex1 = mySpisok.indexOf(newSpisok[0]);
				myIndex2 = mySpisok.indexOf(newSpisok[1]);
			}
			else return alert("Произошла критическая ошибка чтения данных со списка."+
								"\nВыполнение программы остановлено.");
			
			mySpisok[myIndex2].needQuantity++;
			if (newSpisok[0].needQuantity == 1)	mySpisok.splice(myIndex1, 1);
			else mySpisok[myIndex1].needQuantity--;
			break;
		default: // Нашлось более двух товаров с введенным названием (ЭТО НЕВОЗМОЖНО!!!)
			return alert("Произошла критическая ошибка чтения данных со списка."+
							"\nВыполнение программы остановлено.");
	}
	//Оповещение о выполнени
	alert("Одна единица продукта " + str + " куплена успешно.");
}

// 2 задание
class myTovar{
	#article = Math.floor(100000000 * Math.random());
	constructor(name, needQuantity, cost){
		this.name = name;
		this.needQuantity = Number(needQuantity);
		this.cost = Number(cost);
		
		this.toString = function(){
			let str;
			
			str = this.name + " - ";
			str += this.needQuantity + " ед., цена за ед. - ";
			str += this.cost + " руб.";
			return str;
		}
		
	}
}
let tovarniiChek = [];
tovarniiChek[0] = new myTovar("Хлеб", 2, 50);
tovarniiChek[1] = new myTovar("Молоко", 1, 100);
tovarniiChek[2] = new myTovar("Яйца", 20, 20);
tovarniiChek[3] = new myTovar("Кофе", 1, 300);
tovarniiChek[4] = new myTovar("Огурцы", 3, 150);

function Zadanie2_1(){
	let chek = "Чек:\n";
	let i;
	
	for (i = 0; i < tovarniiChek.length; i++){
		chek += tovarniiChek[i] + "\n";
	}
	alert(chek);
}
function Zadanie2_2(){
	let itogSum = 0; 
	let i;
	
	for (i = 0; i < tovarniiChek.length; i++){
		itogSum += tovarniiChek[i].cost * tovarniiChek[i].needQuantity;
	}
	alert("Общая сумма покупки составляет - " + itogSum + " руб.");
}
function Zadanie2_3(){
	let maxCost = []; 
	let index = [];
	let str;
	let i;
	
	maxCost[0] = 0;
	for (i = 0; i < tovarniiChek.length; i++){
		if (maxCost[0] < (tovarniiChek[i].cost * tovarniiChek[i].needQuantity)) {
			if (maxCost.length > 1){maxCost = []; index = [];}
			maxCost[0] = tovarniiChek[i].cost * tovarniiChek[i].needQuantity;
			index[0] = i;
		}
		else if (maxCost[0] == (tovarniiChek[i].cost * tovarniiChek[i].needQuantity)){
			maxCost[maxCost.length] = tovarniiChek[i].cost * tovarniiChek[i].needQuantity;
			index[index.length] = i;
		}
	console.log(i, maxCost, index);
	}
	console.log("Итог: ", maxCost, index);
	//Вывод инфомации
	if (maxCost.length > 1){
		str = "Самые дорогие покупки в чеке:\n"
		for (i = 0; i < maxCost.length; i++){
			str += tovarniiChek[index[i]] + ";\n";
		}
		str = str.substr(0, str.length-3) + ".\nОбщие цены каждой из данных покупок" + 
				" составляют - " +	maxCost[0] + " руб.";
	}
	else str = "Самая дорогая покупка в чеке.\n" + tovarniiChek[index[0]] + 
				"\nОбщая цена покупки составляет " + maxCost[0] + " руб.";
	alert(str);
}
function Zadanie2_4(){
	alert(24);
}

// 3 задание
function Zadanie3_1(){
	alert(31);
}


// 4 задание
function Zadanie4_1(){
	alert(41);
}
function Zadanie4_2(){
	alert(42);
}
function Zadanie4_3(){
	alert(43);
}
function Zadanie4_4(){
	alert(44);
}
function Zadanie4_5(){
	alert(45);
}