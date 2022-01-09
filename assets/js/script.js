var jogador1 = {};
var jogador2 = {};
var tabuleiro = [
    [],
    [],
    []
];
var jogada = 1;
var jogoacabou = false;
window.onload = function (){
    $('#choseSimbol').modal({backdrop: 'static', keyboard: false})
}

function choseSimbol(simbol){
    inicioGame(simbol)
}

function resetJogo(){
    inicioGame();
    jogo();
jogador1 = {};
jogador2 = {};
tabuleiro = [
    [],
    [],
    []
];
jogada = 1;
jogoacabou = false;
$('#game .row .col-4.bloco div').empty();
 $('#choseSimbol').modal({backdrop: 'static', keyboard: false})
 $('.alert.alert-secondary ').hide();
 $('.alert.alert-warning').hide()   
}
function showNewGameModal(){
    $('#newGame').modal({backdrop: 'static', keyboard: false})
}

function inicioGame(simbolo){
    $('#choseSimbol').modal('hide')

    if(simbolo==1){
        jogador1.simbolo = 'X';
        jogador2.simbolo = 'O';
    }else if(simbolo==2){
        jogador1.simbolo = 'O';
        jogador2.simbolo = 'X';
    }
    jogo()
    relacionaBotoes()
}

function relacionaBotoes(){
    
    let matrizBotoes = [
        document.querySelectorAll('#game .row.linha1 .col-4.bloco div'),
        document.querySelectorAll('#game .row.linha2 .col-4.bloco div'),
        document.querySelectorAll('#game .row.linha3 .col-4.bloco div')
    ]
    for(let l=0; l<3; l++){
            for(let s=0; s<3; s++){
            matrizBotoes[l][s].onclick = function () {
            if(permisaoJogada(l,s) && !jogoacabou){
                if(jogada == 1){
                    matrizBotoes[l][s].innerText = jogador1.simbolo;
                    matrizBotoes[l][s].style.color = jogador1.simbolo == 'X' ? 'green' : 'red';
                    preencheMatriz(l,s,1);
                    jogoFim()
                    jogada = 2;
                    
                } 
                else{
                    matrizBotoes[l][s].innerText = jogador2.simbolo;
                    matrizBotoes[l][s].style.color = jogador2.simbolo == 'X' ? 'green' : 'red';
                    preencheMatriz(l,s,2);
                    jogoFim()
                    jogada = 1;
                    
                }
            }
            else{
                if(jogoacabou){
                    $('.alert.alert-warning').text('Opção inválida');
                    $('.alert.alert-warning').show();
                    setTimeout(function(){ 
                        $('.alert.alert-warning').hide()    
                    }, 3000);
                }
                else{
                    $('.alert.alert-warning').text('Opção inválida');
                    $('.alert.alert-warning').show();
                    setTimeout(function(){ 
                        $('.alert.alert-warning').hide()    
                    }, 3000);
                    
                }
                
            }
        }
    }
}
}
function jogo(){
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            tabuleiro[i][j] = 'z';
        }
    }
}
function permisaoJogada(m,n){
    if(tabuleiro[m][n]=='z'){
        return true;
    }else{
        return false;
    }
}
function preencheMatriz(m,n,jogador){
    if(permisaoJogada(m,n)){
        tabuleiro[m][n] = (jogador == 1) ? jogador1.simbolo : jogador2.simbolo;
    }
}

function jogoFim() {
    let cont=0;
    for (let i = 0; i < 3; i++) {
        cont = 0;
        for (let j = 0; j < 3; j++) {
            if(tabuleiro[i][j]==jogador1.simbolo){
                cont++;
                if(cont == 3){
                    $('.alert.alert-secondary ').text('Jogador 1 venceu!');
                    $('.alert.alert-secondary ').show();
                   setTimeout(() => {
                        showNewGameModal();    
                    }, 4000);
                    jogoacabou = true;
                    return true;
                }
            }
        }
        
    }

    for (let i = 0; i < 3; i++) {
        cont = 0;
        for (let j = 0; j < 3; j++) {
            if(tabuleiro[i][j]==jogador2.simbolo){
                cont++;
                if(cont == 3){
                    $('.alert.alert-secondary ').text('Jogador 2 venceu!');
                    $('.alert.alert-secondary ').show();
                   setTimeout(() => {
                        showNewGameModal();    
                    }, 4000);
                    jogoacabou = true;
                    return true;
                }
            }
        }
        
    }

    for (let i = 0; i < 3; i++) {
        cont = 0;
        for (let j = 0; j < 3; j++) {
            if(tabuleiro[j][i]==jogador1.simbolo){
                cont++;
                if(cont == 3){
                    $('.alert.alert-secondary ').text('Jogador 1 venceu!');
                    $('.alert.alert-secondary ').show();
                   setTimeout(() => {
                        showNewGameModal();    
                    }, 4000);
                    jogoacabou = true;
                    return true;
                }
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        cont = 0;
        for (let j = 0; j < 3; j++) {
            if(tabuleiro[j][i]==jogador2.simbolo){
                cont++;
                if(cont == 3){
                    $('.alert.alert-secondary ').text('Jogador 2 venceu!');
                    $('.alert.alert-secondary ').show();
                   setTimeout(() => {
                        showNewGameModal();    
                    }, 4000);
                    jogoacabou = true;
                    return true;
                }
            }
        }
    }

    cont = 0;
    for(let i=0; i < 3; i++){
        if(tabuleiro[i][i]==jogador1.simbolo){
            cont++;
            if(cont == 3){
                $('.alert.alert-secondary ').text('Jogador 1 venceu!');
                    $('.alert.alert-secondary ').show();
                   setTimeout(() => {
                        showNewGameModal();    
                    }, 4000);
                jogoacabou = true;
                return true;
            }
        }
    }

    cont = 0;
    for(let i=0; i < 3; i++){
        if(tabuleiro[i][i]==jogador2.simbolo){
            cont++;
            if(cont == 3){
                $('.alert.alert-secondary ').text('Jogador 2 venceu!');
                    $('.alert.alert-secondary ').show();
                   setTimeout(() => {
                        showNewGameModal();    
                    }, 4000);
                jogoacabou = true;
                return true;
            }
        }
    }

    cont = 0;
    for (let i = 0, j = 2; i < 3 && j>=0; i++, j--) {
        if(tabuleiro[i][j]==jogador1.simbolo){
                cont++;
                if(cont == 3){
                    $('.alert.alert-secondary ').text('Jogador 1 venceu!');
                    $('.alert.alert-secondary ').show();
                   setTimeout(() => {
                        showNewGameModal();    
                    }, 4000);
                    jogoacabou = true;
                    return true;
                }
            }
        
    }

    cont = 0;
    for (let i = 0, j = 2; i < 3 && j>=0; i++, j--) {
        if(tabuleiro[i][j]==jogador2.simbolo){
                cont++;
                if(cont == 3){
                    $('.alert.alert-secondary ').text('Jogador 2 venceu!');
                    $('.alert.alert-secondary ').show();
                   setTimeout(() => {
                        showNewGameModal();    
                    }, 4000);
                    jogoacabou = true;
                    return true;
                }
            }
        
    }

    return !velha() ? false: true;
}

function velha(){
    let result = true;
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(tabuleiro[i][j] == 'z'){
                result = false;
            }
        }
    }
    if(result){
        $('.alert.alert-warning').text('Velha!');
                    $('.alert.alert-warning').show();
                    setTimeout(() => {
                        setTimeout(() => {
                        showNewGameModal();    
                    }, 4000);    
                    }, 4000);
                    
        jogoacabou = true;
    }

    return result;
}