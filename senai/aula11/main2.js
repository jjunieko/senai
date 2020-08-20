function getUser(name) {
    fetch(`https://api.github.com/users/${name}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json);
        });
};

//get user data
getUser('yourUsernameHere');





/**function api(pegarApi) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function adicionar1() {
    var a = resolverDepoisDe2Segundos(20);
    var b = resolverDepoisDe2Segundos(30);
    return x + await a + await b;
}

adicionar1(10).then(v => {
    console.log(v); // exibe 60 depois de 2 segundos.
});

async function adicionar2(x) {
    var a = await resolverDepoisDe2Segundos(20);
    var b = await resolverDepoisDe2Segundos(30);
    return x + a + b;
}

adicionar2(10).then(v => {
    console.log(v); // exibe 60 depois de 4 segundos.
});*/


/**fetch(minhaReq)
    .then((Response) => {
        if (Response.status === 200) {
            return Response.json();

        } else {
            throw new Error("alog deu errado");
        }
    })

.then((Response) => {
    Response.vehicles.map((vehicles) => {
        console.log(vehicles);
    })

})*/