
/*Codigo del cuadrado*/

// console.group("Cuadrados");
// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");


function perimetroCuadrado(lado){
    return lado * 4;
} 
perimetroCuadrado();

// console.log("El perimetro del cuadrado miden: " + perimetroCuadrado+"cm");

function areaCuadrado(lado){
    return lado * lado;
} 
areaCuadrado();
// console.log("El área del cuadrado miden: " + areaCuadrado+ "cm^2");

console.groupEnd();

console.group("Triangulos");
/*Codigo del triangulo*/

// const ladoTraingulo1 = 6;
// const ladoTraingulo2 = 6;
// const baseTriangulo = 4;


// console.log("Los lados del Triangulo miden: " + ladoTraingulo1 + "cm "+ ladoTraingulo2 + "cm "+ baseTriangulo + "cm ");

// const alturaTriangulo = 5.5;
// console.log("La altura del Triangulo miden: " + alturaTriangulo+"cm");

function perimetroTriangulo (lado1,lado2,base){
     return lado1 + lado2 + base;
} 

perimetroTriangulo();

// console.log("El perimetro del Triangulo miden: " + perimetroTriangulo+"cm");

function areaTriangulo(base,altura ){
    return (base * altura) / 2;
} 

areaTriangulo();
// console.log("El área del cuadrado miden: " + areaTriangulo+ "cm^2");

console.groupEnd();


console.group("Circulo");
/*Codigo del circulo*/

// const radioCirculo = 4;
function diametroCirculo(radio){
    return radio * 2;
}
 const pi = Math.PI;


// console.log("El radio del circulo mide: " + radioCirculo+"cm");


//Circunferencia 
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
} 
perimetroCirculo();
// console.log("El perimetro del circulo mide: "+perimetroCirculo+"cm");

//Area

function areaCirculo(radio){
   return (radio*radio) * pi;
} 
// console.log("El área del circulo mide: "+areaCirculo+"cm^2");
areaCirculo();
console.groupEnd();



//aqui interactuamos con el html conectamos
//Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    
    const perimetro_cuadrado = perimetroCuadrado(value);
    alert(perimetro_cuadrado);
}
function calcularAreaCuadrado(){
    document.getElementById("InputCuadrado")
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    
    const area_cuadrado = areaCuadrado(value);
    alert(area_cuadrado);
}


//Triangulo
function calcularPerimetroTriangulo(){
    const input_triangulo1 = document.getElementById("InputTrianguloLado1")
    const value_triangulo1 = Number(input_triangulo1.value);
    const input_triangulo2 = document.getElementById("InputTrianguloLado2")
    const value_triangulo2 = Number(input_triangulo2.value);
    const input_triangulo_base = document.getElementById("InputTrianguloBase")
    const value_triangulo_base = Number(input_triangulo_base.value);
    const perimetro_triangulo = perimetroTriangulo(value_triangulo1,value_triangulo2,value_triangulo_base);
    alert(perimetro_triangulo);
}


function calcularAreaTriangulo(){
    document.getElementById("InputTriangulo")
    const input_triangulo_base = document.getElementById("InputTrianguloBase")
    const value_triangulo_base = Number(input_triangulo_base.value);
    const input_triangulo_altura = document.getElementById("InputTrianguloAltura")
    const value_triangulo_altura = Number(input_triangulo_altura.value);
    
    const area_triangulo = areaTriangulo(value_triangulo_base,value_triangulo_altura);
    alert(area_triangulo);


    
}


// function calcularAreaTriangulo(){
//     const input1 = document.getElementById("InputTriangulo1");
//     const value1 = Number(input1.value);
//     const input2 = document.getElementById("InputTriangulo2");
//     const value2 = Number(input2.value);
//     const base = document.getElementById("InputBaseTriangulo");
//     const value3 = Number(base.value);
//     const area = areaTriangulo(value1,value2,value3);
//     alert("El area del triangulo es: " + area);
// }
