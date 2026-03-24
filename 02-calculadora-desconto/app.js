'use strict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('normal', 'bom', 'otimo')
    
    }

function calcularDesconto(){
    const precoOriginal = document.getElementById('preco-original').value
    const desconto = document.getElementById('desconto').value
    let valorComDesconto

    valorComDesconto = precoOriginal * (1 - desconto/100)

    removerClasses()

    if(desconto > 0 && desconto <5.01){
        resultado.textContent = (`O valor com desconto é: ${valorComDesconto}`)
        resultado.classList.add ('normal')
    }
    else if(desconto > 5 && desconto <10.01){
        resultado.textContent = (`O valor com desconto é: ${valorComDesconto}`)
        resultado.classList.add ('bom')
    }else{
        resultado.textContent = (`O valor com desconto é: ${valorComDesconto}`)
        resultado.classList.add ('otimo')
    }
   
}
