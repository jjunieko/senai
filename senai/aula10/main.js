let desenvolvedor = [

    {
        nome: "odete",
        idade: 21,
        tecnologias: [{
            back: ["PHP", "JAVA"],
            front: ["JS"],
        }, ],
        projetos: [{
            publicos: ["Ministério dos direitos humanos"],
            privado: ["Apostila Digital"],
        }, ],
        certificados: [{
            back: ["Oracle"],
            front: ["VUe", "ReactJS"],
            devops: ["Kubernetes", "Jenkins"],
        }, ],
        empregado: false,
    },


    {
        nome: "Alberto",
        idade: 25,
        tecnologias: [{
            back: ["PHP", "JAVA", "Python"],
            front: ["JS", "CSS", "HTML"],
        }, ],
        projetos: [{
            publicos: ["Itamarati"],
            privado: ["Documentação Digital"],
        }, ],
        certificados: [{
            back: ["Oracle", "ITIL-4"],
            front: ["VUe", "ReactJS"],
            devops: ["Docker"],
        }, ],
        empregado: true,
    },
    {
        nome: "Diego",
        idade: 30,
        tecnologias: [{
            back: ["PHP", "IA", "DB"],
            front: ["CSS", "Go", "Android"],
        }, ],
        projetos: [{
            publicos: ["Marinha", "exercito"],
            privado: ["Pericia Interna"],

        }, ],

        certificados: [{
            back: ["Oracle", "ITIL-4"],
            front: ["VUe", "ReactJS"],
            devops: ["Docker"],
        }, ],
        empregado: true,
    },
];

desenvolvedor.map((desenv) => {
    console.log("esses são os desenvolvedores: ", desenv);
    console.log(`nome: ${desenv.nome}`);
    console.log(`idade: ${desenv.idade}`);
    console.log(`empragado: ${desenv.empregado}`);
    desenvolvedor.length = 3;
    console.log("numeros de DEVS: ", desenvolvedor.length);



    desenv.tecnologias.map((tecnologia) => {
        tecnologia.back.map((tecnologiaBack) => {
            console.log(`Minhas Tecs: ${tecnologiaBack} `);
            console.log(`Minhas Tecs: ${tecnologia.front} `);
            tecnologia.length = 2;
            console.log("total de Tecnologias pelo DEV: ", tecnologia.length);

        });
        desenv.certificados.map((certificado) => {
            certificado.front.map((certFront) => {
                console.log(`Meus Certificados:  ${certFront} `);
                console.log(`Meus Certificados Devops:   ${certificado.devops} `);
            });
            desenv.projetos.map((projeto) => {
                projeto.publicos.map((projetoPub) => {
                    console.log(`Meus Projetos publicos: ${projetoPub} `);
                    console.log(`Meus Projetos privado: ${projeto.privado} `);
                });
            });
        });
    });

    console.log("----------------------------------------------");

});