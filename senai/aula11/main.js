console.log("aula 11");



const myRequest = new Request("https://swapi.dev/api/people/");

fetch(myRequest)
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error("Ops! houve um erro em nosso servidor");
        }
    })
    .then((response) => {
        response.results.map((name => {




            console.log("----------------------------------------");
            console.log("RESPONSE API");
            console.log("nomes: ", name.name);
            console.log(`genero ${name.gender}`);
            console.log(`aniversário ${name.birth_year}`);
            console.log(`cor dos olhos ${name.eye_color}`);
            console.log(`veiculos ${name.vehicles}`);
            console.log("----------------------------------------");


            name.vehicles.map((carro) => {
                console.log(`nome do carro: ${carro}`);
                let url = carro.substring(0, carro.length - 1);
                let id = url.substring(url.lastIndexOf("/") + 1);
                console.log(id, "ID");
            });

            name.starships.map((start) => {
                console.log(`OS startships: ${start}`)

            })

        }));
        console.log("----------------------------------------");

    });