const cepInput = document.querySelector('#CEP');
const ruaInput = document.querySelector('#rua');
const bairroInput = document.querySelector('#bairro');
const UFInput = document.querySelector('#UF');

const buscaCep = (evento) => {
    const cepDigitado = evento.target.value;

    if(cepDigitado.length != 8){
        //se o cep for difrente de 8 ele nao faz nada
        return;
    }


    fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
    .then((resposta) => {return resposta.json()})
    .then((dados) => {
        ruaInput.value = dados.logradouro;
        bairroInput.value = dados.bairro;
        UFInput.value = dados.uf;
        cepInput.value = dados.cep;
    } )
}

cepInput.oninput = buscaCep;

// fetch('https://viacep.com.br/ws/05867360/json/') //retorna um previl pra linha de baixo
// .then((resposta) => { return resposta.json()}) //retorna os dados pra linha de baixo
// .then((dados) => { console.log(dados) }); //mostra os dados