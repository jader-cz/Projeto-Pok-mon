var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){
    
    //Bloqueia o refresh da pagina
    e.preventDefault()
    
    //url da pesquisa
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    //valor do input Name
    let nome = document.getElementById("name")
    
    //concatena a url com o input
    urlForm = urlForm + this.name.value
        

    //transforma os valores em minusculas
    urlForm = urlForm.toLocaleLowerCase()

    //id content
    let resposta = document.getElementById('content')

    //id pokemon
    let imagem = document.getElementById('imgPokemon')

    //resposta em html
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function(data) {
             console.log(data)
             html = 'Nome:' + maiuscula(data.name) + '<br>'
             html = html + 'Type: ' + maiuscula(data.types[0].type.name)
             resposta.innerHTML = html

             imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        //alert(urlForm)

        .catch(function (err) {
           //corrigir este codigo quando digita um texto não esta retornando "pokémon não encontrado"
            
           if (err == ' SyntaxError: Unexpected token N in JSON at position 0'){    
                html = 'Pokémon não encontrado!'
            } else {
                html =  err
            }
            resposta.innerHTML = html
            
        })      
         
});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}