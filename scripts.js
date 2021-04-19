var valorDolarTexto = prompt ("Quanto custa o PS5 nos EUA (apenas o valor)?")
var valorDolarNumero = parseFloat(valorDolarTexto)
var valorReal = valorDolarNumero * 5.52
var valorRealDecimal = valorReal.toFixed(2)
alert ("Logo, o PS5 em real custa " + valorRealDecimal)
 
