function Zadanie1() {
	x=prompt("Как Вас зовут?");
	alert("Привет, "+x+"!");
}
function Zadanie2() {
	x=prompt("В каком году Вы родились?");
	const NowEar = 2024;
	EarOld=NowEar-x;
	alert("Вероятно Вам "+EarOld+" лет(года).");
}
function Zadanie3() {
	x=prompt("Для вычисления периметра квадрата, введите длинну его стороны.");
	alert("Периметр квадрата со стороной "+x+" равен - "+(4*x)+".");
}
function Zadanie4() {
	x=prompt("Для вычисления площади окружности введите ее радиус.");
	alert("Площадь окружности радиусом "+x+" равна - "+(Math.PI*x*x)+".");
}
function Zadanie5() {
	SGoroda=prompt("Для расчета требуемой скорости движения, введите расстояние между городами в км.");
	TGoroda=prompt("Введите требуемое время пути в часах.");
	alert("Для того чтобы преодолеть "+SGoroda+" км за "+TGoroda+" часа(ов), Вам потребуется двигатся со средней скоростью - "+(SGoroda/TGoroda)+" км/ч.");
}
function Zadanie6() {
	x=prompt("Введите количество долларов которые Вы хотите обменять.");
	const Kurs=0.9;
	alert("После обмена "+x+" долларов по курсу - "+Kurs+" евро/доллар, Вы получите "+Math.floor(Kurs*x*100)/100+" евро.");
}
function Zadanie7() {
	x=prompt("Укажите объем флеш-карты в Gb");
	alert("На Вашу флешку, объемом "+x+" Gb поместиться "+Math.floor((x*1024)/820)+" файл(а,ов) объемом 820 Mb.");
}
function Zadanie8() {
	SummDen=prompt("Какова сумма денег в Вашем кошельке?");
	Cena=prompt("Сколько стоит одна шоколадка?");
	alert(" На имеющующиеся у Вас денежные средства ("+SummDen+") \n Вы сможете приобрести "+Math.floor(SummDen/Cena)+" шоколадку(дки, док), стоимостью "+Cena+" каждая. \n После покупки у Вас останется - "+(SummDen % Cena)+".");
}
function Zadanie9() {
	x=prompt("Для перестановки цифр введите любое трехзначное число.");
	FirstChis=Math.floor(x/100);
	SecondChis=Math.floor((x % 100)/10);
	ThirthChis=x-FirstChis*100-SecondChis*10;
	alert("Думаю что ответ будет - "+ThirthChis+SecondChis+FirstChis);
}
function Zadanie10() {
	x=prompt("Для определения четности введите целое число.");
	ZnachenieChetn= !((x % 2)&&1);
	alert("Программа определила четность числа "+x+". Результат - "+ZnachenieChetn+".\n\nРезультат получен без применения условий.");
}
// parity = (x % 2 == 0) ? “even” : “odd”