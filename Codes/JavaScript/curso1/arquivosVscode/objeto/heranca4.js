console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('testando 123'.reverse())
Array.prototype.first = function () {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c','d'].first())

String.prototype.toString = function () {
    return ' fudeu tudo'
}

console.log('testando 321'.reverse())