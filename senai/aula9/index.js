var filme = [{
        nome: "Clube da luta",
        ano: 1900,
        diretor: "VAN DISEL",
        genero: ['suspense', 'comedia', 'drama'],
        sinopse: "filme bem massa",
        faixa_etaria: 18,
        assistir: function(faixa2) {
            alert("vamos assitir o filme " + nome);
        },

    },

    {
        nome: "TITANIC",
        ano: 1900,
        diretor: "DESCONHECIDO",
        genero: ['suspense', 'comedia', 'drama', 'romance'],
        sinopse: "filme bem massa",
        faixa_etaria: 18,
        assistir: function(faixa1) {
            alert("vamos assitir o filme " + nome);
        },

    },

];

filme.map((filme) => {
    console.log(filme, "melhores filmes do ano");
    filme.generos.map((genero) => {
        console.log(genero);
    })
    console.log(ano);
    console.log(faixa_etaria);
});

var preco = [{
    faixa1: "R$ 20,00",
    faixa2: "R$50,00",
    faixa3: "R$100,00"
}];


filme.assistir(preco[index]);