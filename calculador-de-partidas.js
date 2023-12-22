
let nome_do_heroi = "Mulher Maravilha";

let vitorias = 10;

let derrotas = 5; 

let saldo_vitorias = calcular_saldo(vitorias, derrotas);

let nivel;

if (saldo_vitorias < 10) {
    nivel = "Ferro";
  } else if (saldo_vitorias >= 11 && saldo_vitorias <= 20) {
    nivel = "Bronze";
  } else if (saldo_vitorias >= 21 && saldo_vitorias <= 50) {
    nivel = "Prata";
  } else if (saldo_vitorias >= 51 && saldo_vitorias <= 80) {
    nivel = "Ouro";
  } else if (saldo_vitorias >= 81 && saldo_vitorias <= 90) {
    nivel = "Diamante";
  } else if (saldo_vitorias >= 91 && saldo_vitorias <= 100) {
    nivel = "Lendário";
  } else if (saldo_vitorias >= 101) {
    nivel = "Imortal";
  }

let mensagem = `O herói tem saldo de ${saldo_vitorias} e está no nível ${nivel}`;

console.log(mensagem);

function calcular_saldo(parametro_um, parametro_dois) {
    return parametro_um - parametro_dois;
}