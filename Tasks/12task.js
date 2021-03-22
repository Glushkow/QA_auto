

//1-2.Создать структуру данных типа Set
let currencySet = new Set();

currencySet.add('BYN')
currencySet.add('RUR')
currencySet.add('EUR')

//3.Добавляем несколько элементов в новый Set через add
currencySet.add('AUD').add('DKK').add('UAH').add('BYN').add('EUR')

//1-2.Выводим уникальные значения Set
currencySet.forEach(function(value){console.log(value)})

//4.Проверяем методом has наличие валюты BYN

console.log('Set ' + currencySet + ' has BYN value ' + 'is '+ currencySet.has('BYN'))

//4.Удаляем валюту UAH и проверяем наличие через has
currencySet.delete('UAH')
console.log('Set ' + currencySet + ' has UAH value ' + 'is '+ currencySet.has('UAH'))

//5. Вывод случайного значения из currencyset
let currencyArray = Array.from(currencySet)
let Chance = require('chance')
let chance = new Chance()
let pick = chance.pickone(currencyArray)
console.log(pick)



