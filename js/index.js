
// EX 1

function trocaDeCor() {
    let cor = document.querySelector('#cor').value;
    console.log(cor);

    let fundo = document.querySelector('#corpo');

    if (cor == '') {
        fundo.style.backgroundColor = '#FFFFFF';
    } else {
        fundo.style.backgroundColor = cor;
    }
}

document.querySelector('#botao-trocar-cor').addEventListener('click', trocaDeCor);


// EX 2


function notaBimestral() {
    let aluno = document.querySelector('#aluno').value;
    let avMensal = parseFloat(document.querySelector('#nota-avaliacao-mensal').value);
    let avBimestral = parseFloat(document.querySelector('#nota-avaliacao-bimestral').value);
    let avContinua = parseFloat(document.querySelector('#nota-avaliacao-continua').value);

    console.log(aluno, avMensal, avBimestral, avContinua);

    if (aluno != '' && !Number.isNaN(avMensal) && !Number.isNaN(avBimestral) && !Number.isNaN(avContinua)) {

        let tabelaNotas = document.querySelector('#tabela-notas tbody');
        let novaLinha = document.createElement('tr');
        console.log(novaLinha);

        //Coluna 1 - Aluno
        let colunaAluno = document.createElement('td');
        colunaAluno.textContent = aluno;
        console.log(colunaAluno);

        //Coluna 2 - Avaliação Mnesal
        let colunaAvMensal = document.createElement('td');
        colunaAvMensal.textContent = avMensal;
        console.log(colunaAvMensal);

        //Coluna 3 - Avaliação Bimestral
        let colunaAvBimestral = document.createElement('td');
        colunaAvBimestral.textContent = avBimestral;
        console.log(colunaAvBimestral);

        //Coluna 4 - Avaliação Continua 
        let colunaAvContinua = document.createElement('td');
        colunaAvContinua.textContent = avContinua;
        console.log(colunaAvContinua);

        //Coluna 5 - Nota Bimestral
        let soma
        let ColunaNotaBi = document.createElement('td')
        soma = avMensal + avBimestral + avContinua;
        ColunaNotaBi.textContent = soma;

        console.log(ColunaNotaBi);

        // Coluna 6 - Aituação da nota
        let ColunaSituNota = document.createElement('td');
        if (soma < 70) {
            ColunaSituNota.classList.add('text-danger');
            ColunaSituNota.textContent = 'Abaixo da Média';

        } else {
            ColunaSituNota.classList.add('text-success');
            ColunaSituNota.textContent = 'Acima da Média';

        }

        //Colocar as colunas dentro da linha
        novaLinha.appendChild(colunaAluno);
        novaLinha.appendChild(colunaAvMensal);
        novaLinha.appendChild(colunaAvBimestral);
        novaLinha.appendChild(colunaAvContinua);
        novaLinha.appendChild(ColunaNotaBi);
        novaLinha.appendChild(ColunaSituNota);

        //Colocar a linha dentro do corpo da tabela
        tabelaNotas.appendChild(novaLinha);

        console.log(novaLinha);
    }
}

document.querySelector('#botao-cadastrar-notas').addEventListener('click', notaBimestral);


// Ex 3


function impNum() {
    let nI = parseInt(document.querySelector('#numero-inicial').value);
    let nF = parseInt(document.querySelector('#numero-final').value);

    console.log(nI, nF);

    if (!Number.isNaN(nI) && !Number.isNaN(nF)) {

        if (nI < nF) {
            let corpoTabela = document.querySelector('#tabela-numeros tbody');
            corpoTabela.innerHTML = '';

            for (let i = nI; i <= nF; i++) {

                let novaLinha = document.createElement('tr');

                let colunaNumero = document.createElement('td');
                colunaNumero.textContent = i;

                let colunaParImpar = document.createElement('td');
                if (i % 2 === 0) {
                    colunaParImpar.textContent = 'Número Par';
                } else {
                    colunaParImpar.textContent = 'Número Impar';
                }

                let colunaAntecessor = document.createElement('td');
                colunaAntecessor.textContent = i - 1;

                let colunaSucessor = document.createElement('td');
                colunaSucessor.textContent = i + 1;


                novaLinha.appendChild(colunaNumero);
                novaLinha.appendChild(colunaParImpar);
                novaLinha.appendChild(colunaAntecessor);
                novaLinha.appendChild(colunaSucessor);

                corpoTabela.appendChild(novaLinha);
            }
        } else {
            alert('O Número inicial é maior que o número final');
        }
    } else {
        alert('preencha todos os campos!');
    }

}

document.querySelector('#botao-gerar-numeros').addEventListener('click', impNum);
