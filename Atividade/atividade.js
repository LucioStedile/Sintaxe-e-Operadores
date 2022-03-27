

function resultado(){
    const num1 = Number(prompt('Digite o primeiro número:'));
    const num2 = Number(prompt('Digite o segundo número:'));

    let soma = num1 + num2;

    if(num1 == num2){
        
        if(soma < 10 && soma < 20){
            alert(`Os números ${num1} e  ${num2} são iguais, sua soma é ${soma}, que é menor que 10 e menor que 20. `);
        }else if(soma > 10 && soma < 20){
            alert(`Os números ${num1} e  ${num2} são iguais, sua soma é ${soma}, que é maior que 10 e menor que 20. `);
        }else if(soma > 10 && soma > 20){
            alert(`Os números ${num1} e  ${num2} são iguais, sua soma é ${soma}, que é maior que 10 e maior que 20. `);
        }
    }else{
        if(soma < 10 && soma < 20){
            alert(`Os números ${num1} e  ${num2} não são iguais, sua soma é ${soma}, que é menor que 10 e menor que 20. `);
        }else if(soma > 10 && soma < 20){
            alert(`Os números ${num1} e  ${num2} não são iguais, sua soma é ${soma}, que é maior que 10 e menor que 20. `);
        }else if(soma > 10 && soma > 20){
            alert(`Os números ${num1} e  ${num2} não são iguais, sua soma é ${soma}, que é maior que 10 e maior que 20. `);
        }
    }
}

resultado();