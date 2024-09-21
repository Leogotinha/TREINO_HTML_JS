const contador = document.getElementById("contador")
const tabela = document.getElementById("table")
const adiciona = document.getElementById("addButton")
const remove = document.getElementById("removeButton")

function conta(){
    let quantidade_de_linhas = tabela.rows.length
    contador.innerHTML = quantidade_de_linhas
}

conta()

let observador = new MutationObserver(conta);

observador.observe(tabela.tBodies[0],{ childList:true });

adiciona.addEventListener("click", function(){


    let quantidade_de_linhas = tabela.rows.length;
    const linha = table.insertRow(quantidade_de_linhas);
    console.log(linha)

});

