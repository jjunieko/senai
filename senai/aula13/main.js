console.log("aula 13");

function corTexto() {
    let h1 = document.querySelector("h1");
    h1.style.color = "red";
    h1.style.fontSize = "100px";
};

function diminuirBotao() {
    let h1 = document.querySelector("h1");
    h1.style.color = "yellow";
    h1.style.fontSize = "20px";
}




function color() {
    let body = document.getElementById("btn");
    body.style.background = "blue";
};


function color2() {
    let body = document.getElementById("btn2");
    body.style.background = "red";
};

function colorFundo() {
    let body = document.querySelector("body");
    body.style.background = "yellow";
};



function add_field() {
    var form = document.getElementsByTagName('form')[0],
        input = document.createElement('textarea');
    input.setAttribute('type', 'textarea');
    input.setAttribute('name', 'item');
    form.appendChild(input);


};


function contador() {
    var count = 0;
    count++;

    if (count <= 10) {
        alert("QWERTY");

    }

};