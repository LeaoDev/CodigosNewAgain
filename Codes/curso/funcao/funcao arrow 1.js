let dobro= function (a) {
    return a * 2
}

dobro = (a) => {
    return a * 2
}

dobro = a  => 2 * a // return implicito

console.log(dobro(2))
let ola =  function() {
    return 'Ola'
}
ola = () => 'Ola'
console.log(ola())