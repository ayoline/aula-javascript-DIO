var nome = "Anderson P Soares";
var idade = 36;
var frase = "japão é o mehor time do munDo"
var lista = ["maça", "pera", "laranja"]

function clicou() {
    document.getElementById("obrigado").innerHTML = "obigado por clicar!";
    alert("Obrigado por clicar aqui");
}

function redirecionar() {
    window.open("http://www.github.com");
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar o texto");
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui"
}

function load() {
    console.log("página carregada");
}

function change(elemento) {
    console.log(elemento.value)
}

lista.push("uva");

alert(nome + " tem " + idade + " anos");
console.log(nome + " " + idade);
console.log(frase.replace("japão", "brasil").toUpperCase());
console.log(lista);
console.log(lista[1]);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

var fruta2 = { nome: "maçã", cor: "vermelha" }
console.log(fruta2);
console.log(fruta2.nome);

var fruta3 = [{ nome: "maçã", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]
console.log(fruta3);

var idade2 = prompt("qual a sua idade? ");
if (idade2 >= 18) {
    alert("maior de idade")
} else {
    alert("menor de idade")
}

var count = 0;
while (count < 5) {
    console.log(count);
    count++;
};

var count1;
for (count1 = 0; count1 <= 5; count1++) {
    console.log(count1);
}

var d = new Date();
console.log(d);
console.log(d.getDate());

function soma(n1, n2) {
    return n1 + n2;
}
console.log(soma(5, 10));

