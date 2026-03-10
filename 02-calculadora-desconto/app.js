'use strict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('normal', 'bom', 'otimo')
    
    }

function calcularDesconto(){
    const precoOriginal = document.getElementById('preco-original')
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')

    resultado = precoOriginal*(desconto/100)

    removerClasses()

    if(desconto > 0 && desconto <5.01){
        resultado.textContent = (`O valor com desconto é: ${resultado}`)
        resultado.classList.add ('normal')
    }
    else if(desconto > 5 && desconto <10.01){
        resultado.textContent = (`O valor com desconto é: ${resultado}`)
        resultado.classList.add ('bom')
    }else{
        resultado.textContent = (`O valor com desconto é: ${resultado}`)
        resultado.classList.add ('otimo')
    }

}