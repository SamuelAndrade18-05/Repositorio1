let personagem;
let mar;
let terra;
let x;
let y;
let altura;
let largura;
let andarX = 0
let andarY = 0
const tamanho = 64;
const velocidade = 64;
let botao;
let start;



//Funcao SETUP efetua apenas uma vez ao iniciar o programa
function setup() {
    createCanvas(576, 576);
    personagem = loadImage('nadador.png')
    mar = loadImage('ponto.png')
    terra = loadImage('areia.png')

}





//Funcao desenho, fica em Loop durante o exercício do programa, até que o programa encerrar
function draw() {

    if (andarX < 0) {
        andarX = 0
    }

    if (andarX > tamanho * 8) {
        andarX = 512
    }

    if (andarY < 0) {
        andarY = 0
    }

    if (andarY > tamanho * 8) {
        andarY = 512
    }

    // Ao invés de desenhar a imagem do plano de fundo várias vezes, se faz com a função FOR.
    // A funcao FOR: 1 - você determina o valor da variável | 2 - você coloca uma condição | 3 - e coloca o "++" como forma de incremento, ou seja, somando um por um até terminar a condição

    for (x = 0; x < 9; x++) {
        for (y = 0; y < 9; y++) {
            image(mar, 64 * x, 64 * y, tamanho, tamanho);
        }
    }

    image(personagem, andarX, andarY, tamanho, tamanho);

    if (andarX === tamanho * 8 && andarY === tamanho * 8) {
        // rect é pra criar retangulo
        rect(160, 160, 256, 220)

        // textSize é pro tamanho da fonte, e text é pra exibir texto 
        textSize(12)
        text('PARABÉNS!', 256, 200)
        text('AGORA O NADADOR VAI SOBREVIVER!', 170, 256)
        // criar botão
        botao = createButton('Reiniciar Jogo')
        botao.position(240, 300)
        // finalizar o jogo
        noLoop()

        // resetar o jogo
        botao.mousePressed(reset)

    }
    image(terra, tamanho * 8, tamanho * 8, tamanho, tamanho);
}



function reset() {
    andarX = 0
    andarY = 0
    botao.remove()
    loop()
}



//executa sempre quando uma tecla for pressionada
function keyPressed() {
    if (keyIsDown(UP_ARROW)) {
        andarY -= velocidade
    }

    if (keyIsDown(DOWN_ARROW)) {
        andarY += velocidade
    }

    if (keyIsDown(LEFT_ARROW)) {
        andarX -= velocidade
    }

    if (keyIsDown(RIGHT_ARROW)) {
        andarX += velocidade
    }


}