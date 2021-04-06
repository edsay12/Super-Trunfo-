var cartaPaulo = {
    nome: "Seiya de Pégaso",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    },
    imagem: "https://pht.qoo-static.com/3Dag4Sekj7M_qYJOPGBRvTArxx36OqrE09SO6vdX821P0-cFvbc95V9hDQYPzW7fTg=w512"
};

var cartaRafa = {
    nome: "bulbasaur",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    },
    imagem: "https://th.bing.com/th/id/OIP.6xzQbeBUW9Miao5GNe88nQHaEK?pid=ImgDet&rs=1",

};
var cartaGui = {
    nome: "Lord Dart Vader",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }, imagem: "https://th.bing.com/th/id/OIP.6PTA5TgFYwpJRtszFd68jwHaEJ?pid=ImgDet&rs=1",
};

var cartaLol = {
    nome: "Caitlyn",
    imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}

var cartaNaruto = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var cartaHarry = {
    nome: "Harry Potter",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

var cartaBatman = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}

var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}



var baralho = [cartaPaulo, cartaRafa, cartaGui, cartaLol, cartaNaruto, cartaHarry, cartaBatman, cartaMarvel]

function sortearCarta() {
    var sorteio1 = parseInt(Math.random() * baralho.length)
    
    var sorteio2 = parseInt(Math.random() * baralho.length)
    while (sorteio1 == sorteio2) {
        var sorteio2 = parseInt(Math.random() * baralho.length)
    }
    cartajogador = baralho[sorteio1]

    cartaComputador = baralho[sorteio2]
    exibeCartaJogador(cartajogador)
    
    //var opcoes = document.getElementById("opcoes")
    document.getElementById("btnSortear").disabled = true

    document.getElementById("btnJogar").disabled = false

    baralho.splice(baralho.indexOf(cartajogador), 1);
    baralho.splice(baralho.indexOf(cartaComputador), 1);

};




function exibeCartaJogador(cartajogador) {
    var carta = window.document.getElementById("carta-jogador")
    carta.innerHTML = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'
    carta.style.backgroundImage = `url(${cartajogador.imagem})`

    carta.innerHTML += `<p class="carta-subtitle"> ${cartajogador.nome} </p>`
    for (var c in cartajogador.atributos) {
        carta.innerHTML += `<div class="carta-status"> ${c} ${cartajogador.atributos[c]} <input type="radio" name="atributo" checked value="${c}">  </div> ` + "<br>"

    };
};


jogadorVitorias = 0
computadorVitorias = 0
function atualizarPlacar() {

    var placar = window.document.getElementById("placar")
    placar.innerHTML = `Jogador: ${jogadorVitorias} / ${computadorVitorias} Computador `
}


function quantidadeCartas() {
    var qttd = window.document.getElementById("quantidade-cartas")
    qttd.innerHTML = ` Cartas disponiveis: ${baralho.length}`
    
}


function proximaRodada(){
    document.getElementById("btnSortear").disabled = false
    document.getElementById("btnProximaRodada").disabled = true
    resetaCartaPc()
    resetarCartaUser() 


}

function resetaCartaPc() {
    var carta = window.document.getElementById("carta-maquina")
    carta.style.backgroundImage = ''
    carta.style.backgroundImage = 'url("https://image.freepik.com/fotos-gratis/simbolo-de-ponto-de-interrogacao-feito-de-luz-neon_35913-1237.jpg")'
    for (var c in cartaComputador.atributos) {
        carta.innerHTML = `<img
        src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
        style=" width: inherit; height: inherit; position: absolute;">`

    };



};

function resetarCartaUser() {
    var carta = window.document.getElementById("carta-jogador")
    carta.innerHTML = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'
    carta.style.backgroundImage = ``
    carta.style.backgroundImage = `url("https://image.freepik.com/fotos-gratis/simbolo-de-ponto-de-interrogacao-feito-de-luz-neon_35913-1237.jpg")`

}

function exibeCartaComputador(cartaComputador) {
    var carta = window.document.getElementById("carta-maquina")
    carta.innerHTML = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'
    carta.style.backgroundImage = `url(${cartaComputador.imagem})`
    carta.innerHTML += `<p class="carta-subtitle"> ${cartaComputador.nome} </p>`
    for (var c in cartaComputador.atributos) {
        carta.innerHTML += `<div class="carta-status"> ${c} ${cartaComputador.atributos[c]}</div> `

    };
}

function opcaoSelecionada() {
    var opçao = document.getElementsByName("atributo")
    for (var c = 0; c < opçao.length; c += 1) {
        if (opçao[c].checked) {
            return opçao[c].value

        }
    }
};

function jogar() {
    var atributoSelecionado = opcaoSelecionada()
    var resultado = window.document.getElementById("resultado")



    if (cartajogador.atributos[atributoSelecionado] > cartaComputador.atributos[atributoSelecionado]) {
        jogadorVitorias += 1
        resultado.innerHTML = "<p class='resultado-final'> voce venceu </p>"
    } else if (cartajogador.atributos[atributoSelecionado] < cartaComputador.atributos[atributoSelecionado]) {
        resultado.innerHTML = "<p class='resultado-final'> voce perdeu </p>"
        computadorVitorias += 1
    } else {
        resultado.innerHTML = "<p class='resultado-final'> Empate</p>"
       
    }
    exibeCartaComputador(cartaComputador)
    atualizarPlacar()
    quantidadeCartas()
    document.getElementById("btnJogar").disabled = true
    if (baralho.length == 0){
        document.getElementById("btnProximaRodada").disabled = true
        alert("fim de jogo")
        if(jogadorVitorias >computadorVitorias ){
            resultado.innerHTML = "<p class='resultado-final'> Voce venceu o computador</p>"
        }else if (jogadorVitorias <computadorVitorias){
            resultado.innerHTML = "<p class='resultado-final'> o computador venceu tente denovo</p>"
        }else{
            resultado.innerHTML = "<p class='resultado-final'> Empateeeeeee</p>"
        }
    }else{
        document.getElementById("btnProximaRodada").disabled = false
    }
    




}
