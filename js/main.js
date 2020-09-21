function calcular(){
    // Variavel contendo o Primeiro número (A)
    var valor1 = parseInt(document.getElementById('NumberOne').value, 10);
    // Variavel contendo o Primeiro número (B)
    var valor2 = parseInt(document.getElementById('NumberTwo').value, 10);
    // Formatação numerica em pt-br
    function formtNumber(number){
        return new Intl.NumberFormat('pt-br').format(number);
    }
    // Soma 1 (a + b):
    document.getElementById('result').value = valor1 + valor2;
    // Subtração 1 (a - b):
    document.getElementById('result2').value = valor1 - valor2;
    // Subtração 1 (b - a):
    document.getElementById('result3').value = valor2 - valor1;
    // Multiplicação (a x b)
    document.getElementById('result4').value = valor1 * valor2;
    // Divisão 1(a / b)
    document.getElementById('result5').value = (valor1 / valor2).toFixed(2).toString().replace(".", ",");
    // Divisão 2(b / a)
    document.getElementById('result6').value = (valor2 / valor1).toFixed(2).toString().replace(".", ",");
    // Quadrado de a (a²):
    document.getElementById('result7').value = (valor1**2);
    // Quadrado de b (b²):
    document.getElementById('result8').value = (valor2**2);
    // Divisores inteiros de a:
        var r = [];
        for (var i = 1;i <= valor1; i++) {
        if (valor1 % i === 0) { 
        r.push(i);
        }
        document.getElementById('result9').value = ''+r+''+' ('+r.length+')';
        }
    // Divisores inteiros de b:
        var t = []; 
        for (var i = 1;i <= valor2; i++) {
        if (valor2 % i === 0) { 
        t.push(i); 
        }
        document.getElementById('result10').value = ''+t+''+' ('+t.length+')';
        }
    // Fatorial de a (a!):
        var fatorialA = 1;
        for(var x=1; x<=valor1; x++) {
        fatorialA=fatorialA*x;
        } if (valor1 > 21) {
        fatorialA = 'Número muito grande';
        } document.getElementById('result11').value = (fatorialA); 
    // Fatorial de a (b!):
        var fatorialB = 1;
        for(var x=1; x<=valor2; x++) {
        fatorialB=fatorialB*x;
        } if (valor2 > 21) {
            fatorialB = 'Número muito grande';
        }
        document.getElementById('result12').value = (fatorialB);
}
