let lista_palavras = ["alema", "russa", "crise", "bomba", "japao", "armas"]

let PALAVRA = ""

function sorteiaPalavra(lista_palavras){
    let tamanho = lista_palavras.length
    let index = Math.floor(Math.random() * tamanho)
    PALAVRA = lista_palavras[index];
}

sorteiaPalavra(lista_palavras)

var jogadaAtual = 1;

function pegaPalavra(){
    if(jogadaAtual == 1){
        let letras = document.getElementById("palavra1");
        let palpite = "";
        for(let i = 0; i < 5; i++){
            palpite = palpite + letras.children[i].value
            if(PALAVRA.includes(letras.children[i].value)){
                letras.children[i].className = "inp-quase"
            }
            if(PALAVRA[i] === letras.children[i].value){
                letras.children[i].className = "inp-acertou"
            }
        }
        if(palpite.length !== 5){
            return false
        } else {
            return palpite
        }
    } else if (jogadaAtual == 2){
        let letras = document.getElementById("palavra2");
        let palpite = "";
        for(let i = 0; i < 5; i++){
            palpite = palpite + letras.children[i].value
            if(PALAVRA.includes(letras.children[i].value)){
                letras.children[i].className = "inp-quase"
            }
            if(PALAVRA[i] === letras.children[i].value){
                letras.children[i].className = "inp-acertou"
            }
        }
        if(palpite.length !== 5){
            return false
        } else {
            return palpite
        }
    } else if (jogadaAtual == 3){
        let letras = document.getElementById("palavra3");
        let palpite = "";
        for(let i = 0; i < 5; i++){
            palpite = palpite + letras.children[i].value
            if(PALAVRA.includes(letras.children[i].value)){
                letras.children[i].className = "inp-quase"
            }
            if(PALAVRA[i] === letras.children[i].value){
                letras.children[i].className = "inp-acertou"
            }
        }
        if(palpite.length !== 5){
            return false
        } else {
            return palpite
        }
    } else if (jogadaAtual == 4){
        let letras = document.getElementById("palavra4");
        let palpite = "";
        for(let i = 0; i < 5; i++){
                palpite = palpite + letras.children[i].value
                if(PALAVRA.includes(letras.children[i].value)){
                    letras.children[i].className = "inp-quase"
                }
                if(PALAVRA[i] === letras.children[i].value){
                    letras.children[i].className = "inp-acertou"
                }
        }
        if(palpite.length !== 5){
            return false
        } else {
            return palpite
        }
    } else if (jogadaAtual == 5){
        let letras = document.getElementById("palavra5");
        let palpite = "";
        for(let i = 0; i < 5; i++){
            palpite = palpite + letras.children[i].value
            if(PALAVRA.includes(letras.children[i].value)){
                letras.children[i].className = "inp-quase"
            }
            if(PALAVRA[i] === letras.children[i].value){
                letras.children[i].className = "inp-acertou"
            }
        }
        if(palpite.length !== 5){
            return false
        } else {
            return palpite
        }
    }
}

function mudarEstadoPalpite(){
    if(jogadaAtual < 5){
        let letras = document.getElementById(`palavra${jogadaAtual}`);
        for(let i = 0; i < 5; i++){
            letras.children[i].disabled = true;
        }
        let letras2 = document.getElementById(`palavra${jogadaAtual+1}`);
        for(let i = 0; i < 5; i++){
            letras2.children[i].disabled = false;
        }
    } else{
        let letras = document.getElementById(`palavra5`);
        for(let i = 0; i < 5; i++){
            letras.children[i].disabled = true;
        }
    }
}

function verificaVitoria(){
    if(jogadaAtual <= 5){
        let palavra = pegaPalavra();
        if(palavra == PALAVRA){
            let botao = document.getElementById("enviar");
            botao.disabled = true
            window.alert("Voc?? ganhou")
        } else if (palavra == false) {
            // let titulo = document.getElementById("titulo");
            // titulo.innerText = "Palavra incompleta"
            window.alert("Palavra incompleta")
        } else {
            mudarEstadoPalpite();
            jogadaAtual = jogadaAtual + 1;
        }
    } else {
        let palavra = pegaPalavra();
        if(palavra == PALAVRA){
            let botao = document.getElementById("enviar");
            botao.disabled = true
            window.alert("Voc?? ganhou")
        } else if (palavra == false) {
            // let titulo = document.getElementById("titulo");
            // titulo.innerText = "Palavra incompleta"
            window.alert("Palavra incompleta")
        } else {
            mudarEstadoPalpite();
            let botao = document.getElementById("enviar");
            botao.disabled = true
            window.alert("Voc?? perdeu! :(")
        }
        
    }
}

function dica(){
    // ["alema", "russa", "crise", "bomba", "japao", "armas"]
    if(PALAVRA === "alema"){
        if(jogadaAtual == 1){
            window.alert("Na????o de uma figura que foi influente na Alemanha")
        } else if (jogadaAtual == 2){
            window.alert("Organizaram a nova estrat??gia de guerra chamada Blitzkrieg, que consistia em ataques r??pidos e eficientes combinados entre tropas terrestres e for??a a??rea. ")
        } else if (jogadaAtual == 3){
            window.alert("Acreditaram pertencer a ra??a ariana, que supostamente justificava sua superioridade sobre os demais povos, levando ao preconceito e persegui????es em massa.")
        } else if (jogadaAtual == 4){
            window.alert("No per??odo da Primeira Guerra, centralizou o pangermanismo, que defendia a uni??o dos povos germ??nicos na Europa Central, contribuindo ?? cria????o da Tr??plice Alian??a.")
        } else if (jogadaAtual == 5){
            window.alert("No final da Segunda Guerra foi divida em suas por????es Ocidental e Oriental. A sua capital teve suas zonas separadas por um muro de 43 km de extens??o altamente monitorado.")
        }
    } else if (PALAVRA === "russa"){
        if(jogadaAtual == 1){
            window.alert("Na????o que implementou o socialismo")
        } else if(jogadaAtual == 2){
            window.alert("Durante a Primeira Guerra, foi obrigada a se retirar por conta das suas crises sociais e revolu????es.")
        } else if(jogadaAtual == 3){
            window.alert('Uma Guerra civil ocorreu internamente entre os "______" brancos e os "______" vermelhos.')
        } else if(jogadaAtual == 4){
            window.alert("Antes da Primeira Guerra, travou uma guerra contra o Jap??o e sofreu uma derrota mesmo em vantagem.")
        } else if(jogadaAtual == 5){
            window.alert("Concomitante a Segunda Guerra, ocasionou a Guerra de Inverno contra a Finl??ndia que pretendia sua independ??ncia, mas tamb??m foram derrotados mesmo em vantagem.")
        }
    } else if (PALAVRA === "crise"){
        if(jogadaAtual == 1){
            window.alert("Situa????o dif??cil que um pa??s pode passar")
        } else if (jogadaAtual == 2){
            window.alert('Ap??s a derrota da Alemanha, o pa??s foi obrigado a assinar o Tratado de Versalhes, que prejudicou imensamente o pa??s e o levou a um per??odo de "_____"')
        } else if (jogadaAtual == 3){
            window.alert('A "_____" dos Balc??s iniciou quando a ??ustria anexou as prov??ncias da B??snia e da Herzegovina. No futuro, esses conflitos ocasionariam no assassinato do seu herdeiro Francisco Ferdinando em 1914.')
        } else if (jogadaAtual == 4){
            window.alert('A "_____" de 1929, tamb??m conhecida como Grande Depress??o, se mostrou especialmente tr??gica ??s na????es europeias. Na Alemanha, contribuiu para a ascens??o nazista.')
        } else if (jogadaAtual == 5){
            window.alert('Ap??s a Segunda Guerra, o pior caso de "_____" inflacion??ria na Hist??ria foi registrado: a infla????o na Hungria alcan??ou o n??vel de 41.900.000.000.000.000%. A Guerra havia acabado com 40% da riqueza do Pa??s e destru??do 80% de sua capital.')
        }
    } else if (PALAVRA === "bomba"){
        if(jogadaAtual == 1){
            window.alert("Algo que gera uma explos??o")
        } else if (jogadaAtual == 2){
            window.alert('A "_____" voadora V-2, desenvolvida durante a Segunda Guerra Mundial pelos nazistas, foi o primeiro m??ssil bal??stico, podendo alcan??ar um raio de 320 km.')
        } else if (jogadaAtual == 3){
            window.alert('A tecnologia utilizada na "_____" voadora V-2 foi reutilizada posteriormente pelos aliados, que contrataram engenheiros alem??es, para a base da constru????o de foguetes na Corrida Espacial.')
        } else if (jogadaAtual == 4){
            window.alert('Os alem??s foram os primeiros a iniciar o desenvolvimento das "______" nucleares, mas os projetos foram encerrados ap??s a Invas??o da Pol??nia em Setembro de 1939.')
        }
        else if (jogadaAtual == 5){
            window.alert('O Projeto Manhattan dos EUA levou a cria????o das primeiras "______" nucleares, com o primeiro teste nuclear "Trinity" ocorrendo em 16 de Julho de 1945.')
        }
    } else if (PALAVRA === "japao"){
        if(jogadaAtual == 1){
            window.alert("Na????o que sofreu com 2 ataques de bombas conhecidos")
        } else if (jogadaAtual == 2){
            window.alert("Lutou aliado a Tr??plice Entente na Primeira Guerra, e ao lado do Eixo na Segunda Guerra.")
        } else if (jogadaAtual == 3){
            window.alert("Ingressou junto aos pa??ses do Eixo na Segunda Guerra Mundial para concretizar seu expansionismo imperialista na ??sia e no Oceano Pac??fico.")
        } else if (jogadaAtual == 4){
            window.alert("Construiu o maior encoura??ado da Hist??ria, o Yamato. Por??m, o poderoso navio disparou seus canh??es contra alvos inimigos em apenas uma batalha.")
        } else if (jogadaAtual == 5){
            window.alert('Como um dos seus ??ltimos esfor??os de guerra, surgiram os pilotos Kamikaze, "Vento Divino", que colidiam seus avi??es com explosivos contra alvos inimigos.')
        }
    } else {
        if(jogadaAtual == 1){
            window.alert("?? utilizado para intimidar o inimigo")
        } else if(jogadaAtual == 2){
            window.alert("Esses instrumentos sofreram uma grande evolu????o principalmente durante as guerras.")
        } else if(jogadaAtual == 3){
            window.alert('A moderniza????o das "_____" ocasionou a modifica????o do combate na Primeira Guerra. As imensas baixas sofridas por artilharia levaram ao combate em campo aberto ser trocado pela luta nas trincheiras.')
        } else if(jogadaAtual == 4){
            window.alert('O desenvolvimento de tanques levou a cria????o de uma nova classe de "_____" que pudesse contra atacar esses blindados, com o exemplo do famoso Panzerfaust.')
        } else if(jogadaAtual == 5){
            window.alert('A Primeira Guerra alcan??ou n??veis de viol??ncia nunca antes vistos pois foi o primeiro conflito em larga escala entre as chamadas "guerras industriais", que destacavam a produ????o de "_____" em massa.')
        }
    }
}

function regras(){
    window.location.href = "regras/regras.html"
}