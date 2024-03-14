"use strict";
const cep = document.getElementById("cep");
const btnPesquisar = document.getElementById("btnPesquisar");
const saida = document.getElementById("saida");

function obterCEP() {
    return +cep.value;
}

 async function buscarDadosCEP() {
    let urlCEP =  `https://viacep.com.br/ws/${obterCEP()}/json/`;
try {
    const trazerCEP = fetch(urlCEP); 
    const respostas = await trazerCEP;
    const dadosJSON = await respostas.json();
    saida.innerText = apresentarDadosCEP(dadosJSON);
}
catch(err) {
saida.textContent = err;
}

}

function apresentarDadosCEP(obj) {
return (!obj.erro) ? 
        `${obj.logradouro}, ${obj.bairro} - ${obj.uf}` : "CEP não encontrado";
    
    
     
}

btnPesquisar.addEventListener("click", function() {
   saida.textContent = buscarDadosCEP();
   buscarDadosCEP();
   
}
)