function cadastrar(){
    const poke1 = document.getElementById('poke').value;
    
        
    if (!poke1 ){
        document.getElementById('pokemon').innerHTML = 'Infome o nome de pelo menos um pokemon!';
        poke.focus();
		
     }else{ 
            document.getElementById('pokemon').innerHTML = '';
            
            if (poke1) {
                
                const lista = document.querySelector('#adicionados');
                const item = document.createElement('li');
                const botaoLista = document.createElement('button');
                

                item.textContent = poke1;
                botaoLista.textContent = 'Excluir';
                lista.appendChild(item);
                lista.appendChild(botaoLista);        

                botaoLista.addEventListener("click", function() {
                    lista.removeChild(item);
                    lista.removeChild(botaoLista);
                })
                
            }
        }

}
    
window.onload = function(){

}
                          
   
