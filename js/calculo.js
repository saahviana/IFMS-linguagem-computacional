function calculo(x,y){
    if (x==='' || y===''){
        return('Preencha os dois campos');
    }
    soma=parseInt(x)+parseInt(y);  
    CalculoString = ("A Soma é igual a "+soma+"<br />");

    subtrcao=x-y;
    CalculoString += ("A subtração é igual a "+subtrcao+"<br />");

    divisao=x/y;
    CalculoString += ("A divisão é igual a "+divisao+"<br />");

    multiplicacao=x*y;
    CalculoString += ("A multiplicação é igual a "+multiplicacao);

    return CalculoString
}