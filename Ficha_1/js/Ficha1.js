'use strict';
/* ========================= A) ========================== */
let n1=3;
let n2=6;
let n3;
console.log(n1+n2); 
 // 1) 9
console.log(n1+"n3");
 // 2) 3n3
console.log(n1+"5");
 // 3)35
console.log(n1+"n2");
 // 4)3n2
console.log(n1+n3);
 // 5) NaN
console.log(n3);
 // 6) undefined
console.log(`Variavel n1*n2 = ${n1*n2} ( n1=${n1} e n2=${n2})`); //7)  n1*n2 = 18 ||  n1 = 3 e n2 = 6
n3=n1+n2;
console.log(n3);
 //8) 9
n3=n1+"---"+n2;
console.log(n3);
 //9) 3---6
n3="6";
console.log(n1+n3);
 // 10) 36
console.log(n2===n3);
 // 11) False
 //True ou False ?
console.log(n2==n3);
 // 12 True
 //True ou False ?
console.log(n2!==n3);
 // 13 True
 //True ou False ?
console.log(n2!=n3);
 // 14 False
 //True ou False ?
console.log(n1++);
 // 15 3
console.log('n1='+n1);
 // 16 n1 = 4
n1=4;
console.log(++n1);
 // 17 5
console.log('n1='+n1);
 // 18 n1 = 5

 /* ========================= B) ========================== */

 let variavel;
variavel = '3' + 2;
console.log(variavel) // 32
variavel = '3' + true; 
console.log(variavel); // 3true
variavel = '3' + undefined;
console.log(variavel); //3undefined
variavel = '3' + null;
console.log(variavel); //3null

/* ========================= C) ========================== */

/*
const disciplina;
disciplina="Linguagens Script";
console.log(disciplina); */ 

// Dá um erro porque a variavél foi declarada como constante e de seguida foi feita uma tentativa de mudar a variável, ao ser
// considerado um constante não é possível haver alteração no seu valor

/* ========================= D) ========================== */

let uc='Linguagens';
uc+='Script';
console.log('Disciplina:'+uc +'- 2 semestre');

// Disciplina; LinguagensScript- 2 semestre

/* ========================= E) ========================== */

const nome1='Nuno'
const nome2='Ricardo'
const resultado = `Os nomes são ${nome1} e ${nome2}`
console.log(resultado);
console.log(resultado+' e Filipe');

// Os nomes são Nuno e Ricardo

// Os nomes são Nuno e Ricardo e Filipe

/* ========================= 2 ========================== */

/* ========================= A) ========================== */

const num1=5;
const num2=10;
const num3=7; 

/*const num1=parseInt(prompt("Especifique o numero 1: "));
const num2=parseInt(prompt("Especifique o numero 2: "));
const num3=parseInt(prompt("Especifique o numero 3: ")); */

if (num1 > num2 && num1 > num3){
    console.log('O maior entre num1,num2 e num3 é num1');
}

else if (num2 > num1 && num2 > num3){
    console.log('O maior entre num1,num2 e num3 é num2');
}

else if (num3 > num1 && num3 > num2){
    console.log('O maior entre num1,num2 e num3 é num3');
}

/* ========================= B) ========================== */

/*let numbaixo=parseInt(prompt("Especifique o numero 1: "));
const numalto=parseInt(prompt("Especifique o numero 2: "));
var soma = 0;

        
while (numbaixo != numalto){
    soma += numbaixo;
    numbaixo++;
}
console.log(`A Soma total é ${soma}`); */

/* ========================= C) ========================== */

/*
let numatezero;
var sumatorio = 0;

do{
    numatezero = parseInt(prompt("Especifique o numero 1: "));
    sumatorio += numatezero;
}    
while (numatezero != 0)
    

console.log(`A Soma é ${sumatorio}`); */

/* ========================= 3 ========================== */

/* ========================= A) ========================== */

/*
let str = 'Linguagens Script';
function fazQualquerCoisa() {
console.log(str);  Liguangens Script
}
fazQualquerCoisa(); */



/* ========================= B) ========================== */
 /*
let str = 'Linguagens';
function fazQualquerCoisa() {
str = 'Script';
}
console.log(str); Linguagens
fazQualquerCoisa(); 
console.log(str); Script */

/* ========================= C) ========================== */

/*
function fazQualquerCoisa() {
    str = 'Script';
    }
    fazQualquerCoisa();
    console.log(str);  Funciona se tiver comentado, mas menos segura o código*/

/* ========================= D) ========================== */

    /*
    function fazQualquerCoisa() {
        let str = 'Script';
        }
        fazQualquerCoisa();
        console.log(str);  não conhece a variável pois foi declarada dentro de uma função*/

/* ========================= E) ========================== */
    
    /*
        let str = 'Linguagens';
        function fazQualquerCoisa() {
        let str2 = ' Script';
        console.log(str+str2); Linguagens Script 
        }
        fazQualquerCoisa();
        console.log(str+str2); não reconhece o str2 */

/* ========================= F) ========================== */
    /*
        let str = 'Linguagens';
        function fazQualquerCoisa() {
            let str2 = ' Script';
            if (str.length > str2.length) {
                let dim="Primeira é maior!"
                console.log(dim);  imprime este
            }
            else if (str.length === str2.length) {
                let dim="São iguais!"
                console.log(dim);
            }
            else {
                let dim="Segunda é maior!"
                console.log(dim);
            }
            console.log(str+str2+"-"+dim); dá erros porque dim foi declarado dentro de blocos
        }
        fazQualquerCoisa(); 
    */

/* ========================= G) ========================== */
    /*
    var str = 'Linguagens';
    function fazQualquerCoisa() {
        var str2 = ' Script';

        if (str==='Linguagens') {
            var dim='ok';
            console.log("->"+dim); ->ok
        }

        console.log(str+str2+"- "+dim); Linguagens Script- ok

    }
        fazQualquerCoisa();
        console.log(str+str2);  não reconhece str2 por estar dentro de uma função
    */

/* ========================= H) ========================== */

//console.log(str)
//var str ->let str; passa a dar erro que não foi inicializada

/* ========================= I) ========================== */

//console.log(str)
//var str='Linguagens Script';-> let str='Linguagens Script'; passa a dar erro que não foi inicializada

/* ========================= J) ========================== */

/*
    str='Linguagens Script';
    console.log(str) 
    var str -> let str;  em var dá print e em let não 
*/

/* ========================= K) ========================== */

/*
function fazQualquerCoisa() {
    console.log(str);
}
    fazQualquerCoisa();
    var str = 'Linguagens'; -> let str = 'Linguagens'; passa de undefined para não foi inicializada
*/

/* ========================= K) ========================== */

/*
var str="Linguagens"
function fazQualquerCoisa() {
    str2="Script"
    console.log(str2); dá print de Script
    var str2;
}
    fazQualquerCoisa();
    console.log(str2); não reconhece devido a estar dentro da função
*/

/* ========================= M) ========================== */

/*
function mensagem() {
    let nome='José';
    console.log(`Olá ${nome}`); // Olá José
}
    mensagem();
    mensagem('Maria');
    mensagem('Maria','Jose','Vieira');
*/

/* ========================= N) ========================== */

/*
mensagem();
function mensagem() {
    let nome='José';
    console.log(`Olá ${nome}`); dá run da função na mesma
}
*/

/* ========================= O) ========================== */

/*
function mensagem(nome='!') {
    console.log(`Olá ${nome}`); Olá Cristiana
    }
    mensagem();
    mensagem('Maria');
    mensagem('Jose');
    mensagem('Cristiana','Areias');
*/

/* ========================= P) ========================== */

/*
1)
let n = 50
if (true) {
    let n = 2
    console.log(n) 2
}
console.log(n); 50

2)
let n = 50
if (true) {
    console.log(n); 50
    n = 2
    console.log(n) 2
}
console.log(n); 2


let n = 50
if (true) {
    console.log(n);
    let n = 2
    console.log(n)
}
console.log(n);

diz que foi usada antes de ser declarada
*/

/* ========================= 4 ========================== */

/* ========================= A) ========================== */
function compara(numero1,numero2) {
    return numero1 === numero2
}
   compara(2,2);

function compara1(numero3,numero4) {
    return numero3 === numero4 ? true : false
}
   compara1(2,2); 
   
   console.log(compara(2,2));
   console.log(compara1(2,2));

/* ========================= B) ========================== */
function parouimpar(num_test) {
    if (num_test % 2 == 0){
        console.log('O número é par');
    }
    else{
        console.log('O número é impar');
    }
}

parouimpar(2);

/* ========================= C) ========================== */

function obtemQuadrado(numparaquadrado){
    console.log(numparaquadrado * numparaquadrado);
}

obtemQuadrado(2);
obtemQuadrado(9);
obtemQuadrado(10);

/* ========================= D) ========================== */

function areaRetangulo(numcomprimento,numlargura){

    numlargura !== undefined ? console.log(numcomprimento * numlargura) : console.log(numcomprimento * numcomprimento)
}

areaRetangulo(5,10);
areaRetangulo(10,20);
areaRetangulo(5);

/* ========================= E) ========================== */

function contaVogais(stringavaliar){
    let numvogais = 0;
    let nova_string = stringavaliar.toLowerCase();
    for (var i = 0; i < stringavaliar.length; i++) {
        if (nova_string[i] == "a" || nova_string[i]== "e" || nova_string[i] == "i" || nova_string[i] == "o" || nova_string[i] == "u"){
            numvogais++;
        }
      }
    return numvogais;
}
console.log(contaVogais("Ola")); //2
console.log(contaVogais("Linguagens Script")); //5

/* ========================= 5 ========================== */

/* ========================= A) ========================== */

const palavras=['angular','bootstrap','javascript','vue','svelte','react'];

for (var i = 0; i < 6 ; i++){
    console.log(palavras[i]);
}

/* ========================= B) ========================== */

function ImprimeArray(strings){
    for (var i = 0; i < 6 ; i++){
        console.log(strings[i]);
    }
}

ImprimeArray(palavras);

/* ========================= C) ========================== */
for (var i of palavras ) {
    console.log(i);
    }

/* ========================= D) ========================== */

palavras.forEach(imprimeArray1);
function imprimeArray1(index) {
    console.log(index);
}

/* ========================= E) ========================== */

const palavras1=['angular','bootstrap','javascript','vue','svelte','react'];

palavras1[palavras1.length] = "backbone";

for (var i of palavras1 ) {
    console.log(i);
    }

/* ========================= F) ========================== */

palavras1.push("ember"); //mete no final do array
palavras1.unshift("css"); //mete no inicio do array

for (var i of palavras1 ) {
    console.log(i);
    }

/* ========================= G) ========================== */

palavras1.pop(); //retira o ultima elemento
palavras1.shift(); //retira o ultima elemento

for (var i of palavras1 ) {
    console.log(i);
    }

/* ========================= H) ========================== */
palavras1.sort(); // sort por ordem alfabética

for (var i of palavras1 ) {
    console.log(i);
    }

/* ========================= H) ========================== */
    const palavras2=['css','html'];
    const palavras3=['angular','bootstrap','javascript'];
    const palavras4=['vue','svelte','react']; 
    console.log('---INICIO----');
    function fazQualquerCoisa(...arr) { // não é erro
        for (let i=0; i <arr.length;i++) {
            for (let j=0; j<arr[i].length;j++)
                console.log(arr[i][j]); // junta os arrays
        }
        console.log('---FIM-----');
    }
    fazQualquerCoisa(palavras2);
    fazQualquerCoisa(palavras2,palavras3);
    fazQualquerCoisa(palavras2,palavras3, palavras4);

/* ========================= J) ========================== */

function somatorio() { // não é erro
    var result = 0;
    for ( var i = 0; i < arguments.length;i++){
        result += arguments[i];
    }
    return result;
}
console.log(somatorio(1,2,3,4,1));
console.log(somatorio(1,5,5));
console.log(somatorio(11));

/* ========================= ou ========================== */

function somatorio1(...numeros) { // não é erro
    var result1 = 0;
    for ( var i = 0; i < numeros.length;i++){
        result1 += numeros[i];
    }
    return result1;
}
console.log(somatorio1(1,2,3,4,1));
console.log(somatorio1(1,5,5));
console.log(somatorio1(11));

/* ========================= K) ========================== */

let vogais = ['a','e','i','o','u'];
let letras = vogais;
letras.push('X');
console.log(vogais); // Escreve apenas vogais ou vogais + X ? vogais + X
console.log(letras); // Escreve apenas vogais ou vogais + X ? vogais + X
let letra ='Z';
let letraZ = letra;
letra='Y';
console.log(letra); // Escreve Z ou Y? Y
console.log(letraZ); // Escreve Z ou Y? Z

/* ========================= L) ========================== */

const original=['angular','bootstrap','javascript','vue','svelte','react'];

const arr_final = original.map((currElement, index) => {
    return "[" + index + "]" +currElement; //equivalent to list[index]
  });
  console.log(arr_final);

  const arr_final1 = original.map(function(currentValue, index) {
    return "[" + index + "]" + currentValue; //equivalent to list[index]
  });
  console.log(arr_final1);
  
/* ========================= M) ========================== */

const arr_final2 = original.filter((frase) => {
    return frase.length < 7;
});
console.log(arr_final2);
 
const arr_final3 = original.reduce((frase,a_verificar) => {
    if (a_verificar.length < 7) {
        return a_verificar;
    }
  });
  console.log(arr_final3);