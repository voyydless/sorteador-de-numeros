function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if (de >= ate){
        alert('Não há como o número inicial ser maior do que o final!');
        return;
    } if (quantidade > (ate - de + 1)){
        alert('A quantidade inserida não deverá ser maior do que o intervalo de números escolhidos!');
        return;
    } else {
        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate);

            while (sorteados.includes(numero)){
                numero = obterNumeroAleatorio(de, ate);
                alert('Tentando obter número inédito');
            }

            sorteados.push(numero);
            alterarStatusBotao();
        }
        
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    }
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    quantidade = document.getElementById('quantidade').value = '';
    de = document.getElementById('de').value = '';
    ate = document.getElementById('ate').value = '';
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}