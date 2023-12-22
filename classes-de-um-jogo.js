class informacoes {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.correspondencia = [
            ["mago", "guerreiro", "monge", "ninja"],
            ["magia", "espada", "artes marciais", "shuriken"]
        ]
        this.tipo = tipo
        this.ataque = ataque
    }

    descobrir( ) { //função para descobrir a correspondência entre o 'tipo' e o 'ataque'
        for (let j = 0; j < this.correspondencia[0].length; j++) {
            if (this.tipo == this.correspondencia[0][j]) {
                this.ataque = this.correspondencia[1][j]
                break
            }
    }
  }

  atacar( ) {
    console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
  }
}

  let heroi = new informacoes("Feiticeira Escarlate", "30 anos", "mago")

  heroi.descobrir( )

  heroi.atacar( )