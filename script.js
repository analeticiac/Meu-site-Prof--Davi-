// FILMES
let filmes = [

    {
    titulo: "Resgate",
    imagem: "Resgate.JPEG",
    descricao: "Em Bangladesh, o mercenário do mercado negro Tyler Rake luta para sobreviver durante a missão para resgatar o filho sequestrado de um chefe do crime internacional."
    }
    
    ];
    
    // SÉRIES
    let series = [
    
    {
    titulo: "O Ringue",
    imagem: "Ringue.JPEG",
    descricao: "A série acompanha Taylor, um jovem lutador de MMA talentoso que sonha com o profissionalismo, mas luta para ser notado. Para pagar dívidas familiares, ele aceita um confronto perigoso contra um rival violento, Ibrahim, buscando a fama e o cinturão do UFC"
    }

    
    ];
    
    function mostrar(){
    
    let listaFilmes = document.getElementById("listaFilmes");
    let listaSeries = document.getElementById("listaSeries");
    
    filmes.forEach(function(f){
    
    listaFilmes.innerHTML += `
    <div class="card">
    <img src="${f.imagem}">
    <h3>${f.titulo}</h3>
    <p>${f.descricao}</p>
    </div>
    `;
    
    });
    
    series.forEach(function(s){
    
    listaSeries.innerHTML += `
    <div class="card">
    <img src="${s.imagem}">
    <h3>${s.titulo}</h3>
    <p>${s.descricao}</p>
    </div>
    `;
    
    });
    
    }
    
    mostrar();

