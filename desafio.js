//	Código criado para o Desafio - challenge-olympics-myfunctions
// 	   para o processo de seleção para o START DB - programa de estágios da DBServer
//	Mais informações sobre o desafio em https://github.com/dbserver/challenge-olympics-myfunctions
//
//	Criado por Gabriel Lima Brito da Silva em 06 de Agosto de 2021
//

let olympicsMedalTable = [
	{
		id: 1,
		country: 'BRASIL',
		gold: 7,
		silver: 6,
		bronze: 6,
		continent: 'AMERICA DO SUL',
	},
	{
		id: 2,
		country: 'USA',
		gold: 46,
		silver: 37,
		bronze: 17,
		continent: 'AMERICA DO NORTE',
	},
	{
		id: 3,
		country: 'CHINA',
		gold: 26,
		silver: 18,
		bronze: 26,
		continent: 'ASIA',
	},
	{
		id: 4,
		country: 'RUSSIA',
		gold: 19,
		silver: 18,
		bronze: 19,
		continent: 'EUROPA',
	},
	{
		id: 5,
		country: 'REINO UNIDO',
		gold: 27,
		silver: 23,
		bronze: 17,
		continent: 'EUROPA',
	},
	{
		id: 6,
		country: 'ALEMANHA',
		gold: 17,
		silver: 10,
		bronze: 15,
		continent: 'EUROPA',
	},
	{
		id: 7,
		country: 'JAPÃO',
		gold: 12,
		silver: 8,
		bronze: 21,
		continent: 'ASIA',
	},
	{
		id: 8,
		country: 'ARGENTINA',
		gold: 3,
		silver: 1,
		bronze: 0,
		continent: 'AMERICA DO SUL',
	},
	{
		id: 9,
		country: 'ITALIA',
		gold: 8,
		silver: 12,
		bronze: 8,
		continent: 'EUROPA',
	},
	{
		id: 10,
		country: 'QUÊNIA',
		gold: 6,
		silver: 6,
		bronze: 1,
		continent: 'AFRICA',
	},
];

//O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida.
//	 Caso contrario, undefined é retornado.
Array.prototype.customFind = function (predicate) {
	for (const element of this) {
		if (predicate(element)) {
			return element;
		}
	}
	return undefined;
};

// O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída
// e retorna um valor true ou false.
Array.prototype.customSome = function (predicate) {
	for (const element of this) {
		if (predicate(element)) {
			return true;
		}
	}
	return false;
};
//O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
Array.prototype.customFilter = function (predicate) {
	let result = [];
	for (const element of this) {
		if (predicate(element)) {
			result.push(element);
		}
	}
	return result;
};
//O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
Array.prototype.customMap = function (callback) {
	let result = [];
	for (const element of this) {
		let callElement = callback(element);
		result.push(callElement);
	}
	return result;
};

//O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
Array.prototype.customReduce = function (callback, initialValue) {
	let index = 0;

	if (typeof initialValue === 'undefined') {
		if (this[0]) {
			initialValue = this[0];
			index = 1;
		} else {
			throw new TypeError('Reduce of empty array with no initial value');
		}
	}

	let acumulator = initialValue;
	for (index; index < this.length; index++) {
		const element = this[index];
		acumulator = callback(acumulator, element, index, this);
	}
	return acumulator;
};

// Código modelo utilizando filter, map e reduce

const resultFilterMapReduce = olympicsMedalTable
	.filter((i) => i.continent === 'ASIA') // JAPÃO e CHINA
	.map((i) => i.gold) // 26 e 12
	.reduce((total, quantity) => total + quantity); // 38

console.log(
	`Medalhas de Ouro no continente Asiático: ${resultFilterMapReduce}`
);

// Implemente as funções customizadas - customFilter, customMap e customReduce e verique se o retorno é igual ao do código modelo

const resultByCustomFilterMapReduce = olympicsMedalTable
	.customFilter((i) => i.continent === 'ASIA')
	.customMap((i) => i.gold)
	.customReduce((total, quantity) => total + quantity);

console.log(
	`Resultado custom - Medalhas de Ouro no continente Asiático: ${resultByCustomFilterMapReduce}`
);

/* DESAFIOS - CONCLUA AS FUNÇÕES customSome, customFind E UTILIZANDO TODAS AS FUNÇÕES 'CUSTOM' CONCLUA OS DESAFIOS ABAIXO: */

//1 - Crie um algoritmo que encontre o único pais do continente Africano
const paisAfricano = olympicsMedalTable.customFind(
	(object) => object.continent === 'AFRICA'
);

console.log('\n1 - Único País Africano:');
console.log(paisAfricano);

// 2 - Crie um algoritmo que retorne o total de medalhas por país
const medalhasPorPais = olympicsMedalTable.customMap((object) => {
	return {
		country: object.country,
		totalMedals: object.gold + object.silver + object.bronze,
	};
});

console.log('\n2 - Total de medalhas por País:');
console.log(medalhasPorPais);

//3 - Crie um algoritmo para encontrar os países que conquistaram mais que 10 medalhas de ouro
//	Meu algoritmo retorna uma lista com os países que conquistaram mais de 10 medalhas de ouro
const paisesCom10MedalhasOuroNoMinimo = olympicsMedalTable
	.customFilter((object) => object.gold > 10)
	.customMap((object) => object.country);

console.log('\n3 - Países que conquistaram mais que 10 medalhas de ouro:');
console.log(paisesCom10MedalhasOuroNoMinimo);

//4 - Crie um algoritmo para encontrar os países que conquistaram no minímo 30 medalhas (Ouro, Prata e Bronze)

const paisesCom30MedalhasNoMinimo = olympicsMedalTable.customFilter(
	(object) => object.gold + object.silver + object.bronze >= 30
);
//	OU esse, onde utilizei o código que eu ja tinha escrito
// const paisesCom30MedalhasNoMinimo = medalhasPorPais.customFilter((object)=> object.totalMedals >= 30);

console.log('\n4 - Países com no mínimo 30 medalhas:');
console.log(paisesCom30MedalhasNoMinimo);

//5 - Crie um algoritmo para verificar se o continente América do Sul conquistou pelo menos 20 medalhas de ouro
//	Meu algoritmo retorna true se teve mais de 20 medalhas de ouro ou false se teve menos de 20 medalhas de ouro
const paisesComPeloMenos20MedalhasDeOUro =
	olympicsMedalTable
		.customFilter((object) => object.continent === 'AMERICA DO SUL')
		.customMap((object) => object.gold)
		.customReduce((total, quantity) => total + quantity) > 20;

console.log('\n5 - A america do sul conquistou 20 medalhas de ouro?');
console.log(paisesComPeloMenos20MedalhasDeOUro);
