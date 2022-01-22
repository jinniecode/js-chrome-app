// variable
const a = 5;
const b = 2;
let myName = "nico";
const amIFat = true;
const amIFat2 = false;
const amIFat3 = null;
let something;

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("Hello " + myName);

myName = 'jinnie';

console.log("your new name is " + myName);
console.log(amIFat);
console.log(amIFat2);
console.log(amIFat3);

console.log(something);

// array - [], push
const dayOfWeek = ["mon" , "tue", "wed", "thu", "fri", "sat", "sun"];

console.log(dayOfWeek);
console.log(dayOfWeek[4]);

dayOfWeek.push("랄랄랄");
console.log(dayOfWeek);

const player = {
	name: 'jinnie',
	points: 13,
	fat: true
}

console.log(player);
player.points = player.points +25;
console.log(player.points)

// update
player.fat = false;
console.log(player);

// add
player.height = 168;
console.log(player);

// function
function sayHello(name) {
	console.log("Hi " + name);
}
sayHello("jin");

const number = {
	plus: function (a, b) {
		console.log("result is a " + a + b);
	}
}
number.plus(3, 6);

const person = {
		otherPerson: function (first, second) {
		console.log("Hi I'm a " + first + " and this is " + second);
	}
}

person.otherPerson("Lang", "Gene");

// recap1 array는 한 종류의 정보 저장
const toBuy = ["tomato", "potato", "pizza"];
console.log(toBuy[2]);
toBuy[2] = "hamburger";
console.log(toBuy)
toBuy.push("meat");
console.log(toBuy);

// recap2 object는 여러 종류의 property 저장 가능, console도 object인 것을 알 수 있음
const play = {
	name: "jin",
	age: 98
};
console.log(play);
// object 수정
play.name = "nico";
console.log(play);
// object 추가
play.hansome = true;
console.log(play.hansome, console);
// function
function minus(gym, library) {
	console.log(gym - library);
}
minus(9, 2);
// function의 인자 수보다 많은 인자(argument) 보내도 인자를 받을 자리가 없는 것 뿐 에러는 안남
//school은 오직 function의 body 안에서만 사용 가능!!
function double(school) {
	console.log(school - 5);
}
double(4,3,5,6,7,8,9,5,1);

const calculator = {
	add: function(a, b) {
		console.log(a * b);
	},
};
calculator.add(5, 3);
// Calculator 구현
const calculator1 = {
	plus: function(a, b) {
		console.log(a + b);
	},
	minus: function(a, b) {
		console.log(a - b);
	},
	times: function(a, b) {
		console.log(a * b);
	}
	divide: function(a, b) {
		console.log(a / b);
	},
	power: function(a, b) {
		console.log(a ** b);
	},
}

calculator1.plus(5, 3);
calculator1.minus(3, 1);
calculator1.divide(9, 4);
calculator1.power(8, 3);

// return
const calculator2 = {
	plus2: function(a, b) {
		return a + b;
	},
	minus2: function(a, b) {
		return a - b;
	},
	times2: function(a, b) {
		return a * b;
	}
	divide2: function(a, b) {
		return a / b;
	},
	power2: function(a, b) {
		return a ** b;
	},
}

const plusResult = calculator2.plus2(3, plusResult);
const minusResult = calculator2.minus2(plusResult, 7);
const timessResult = calculator2. times2(3, minusResult);
const divideResult = calculator2.divide2(timessResult, 7);
const powerResult = calculator2.power2(minusResult, divideResult);