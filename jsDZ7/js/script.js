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
	alert(12);
}
function Zadanie1_3(){
	alert(13);
}

// 2 задание
function Zadanie2_1(){
	alert(21);
}
function Zadanie2_2(){
	alert(22);
}
function Zadanie2_3(){
	alert(23);
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