'use strict'



function removerClasses(){
   
const resultado = document.getElementById('resultado')
resultado.classList.remove('aprovado', 'reprovado', 'recuperacao')
}


function calcularMedia(){
    const notas = ['nota1', 'nota2', 'nota3'].map(id => 
        parseFloat(document.getElementById(id).value)
    )
    const resultado = document.getElementById('resultado')

    if (isNaN(notas) || notas < 0 || notas > 10) {
        resultado.textContent = 'Insira uma nota entre 0 e 10.'
        return false
    }

    const soma = notas[0]+ notas[1]+ notas[2]
    const resultadoMedia = soma / notas.length
    


    removerClasses()

    if(resultadoMedia < 5){
        resultado.textContent = 'Aprovado'
        resultado.classList.add ('aprovado')
    }else if(resultadoMedia > 4 && resultadoMedia.value < 7){
        resultado.textContent = 'Recuperação'
        resultado.classList.add ('recuperacao')
    }else{
        resultado.textContent = 'Reprovado'
        resultado.classList.add ('reprovado')      
    }
}