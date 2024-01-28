//*selecionar vários elementos, o JS vai pegar todos os elementos correspondentes ao seletor 
//*pegando toda a seção de 'duvidas' 

var elementosDuvida = document.querySelectorAll('.duvida')

//
elementosDuvida.forEach( function (duvida) {
     duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
     })
})



