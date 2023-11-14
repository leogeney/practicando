function sumar(){

    

    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var resultadoElement = document.getElementById('resultado');
    var resultado = parseInt(numero1) + parseInt(numero2);

    resultadoElement.innerHTML = `<p>La suma es: ${resultado}</p>`;
}

function color(color){

    document.getElementById('color').style.backgroundColor = color


}



leo=[
    {name:"leonardo", apellido:"geney", edad:"12"},
    {name:"liliana" , apellido:"lopez", edad:"21"},
    {name:"jose" , apellido:"geney" ,  edad: "23"}


]

const nombres= leo.map(persona => persona.name);
console.log( "nombres" + nombres)
const apellido= leo.map(persona => persona.apellido);
console.log("apellido"+apellido)
const edad= leo.map(persona => persona.edad);
console.log("edad"+edad)


semana = ["lunes", "martes" , "miercoles", "jueves", "viernes","sabado" , "domingo"]

for ( i=0; i<semana.length; i++){

    console.log(semana[i])
}