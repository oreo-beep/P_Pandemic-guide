function IMC(elEvento){
    elEvento.preventDefault();

    var Edad = document.querySelector("#Edad").value;
    var peso = document.querySelector("#PesoA").value;
    var altura =document.querySelector("#Altura1").value;
    var boton = document.querySelector("#boton");
    var respuestas = document.querySelector("#respuestas");
    

    var formula = peso/(altura*altura);
    

    // Medidas de un adulto.

   if(formula < 18.5){
        respuestas.innerHTML = '<p class =Pri_imc >  Bajo peso - IMC  '  +  formula.toFixed(1) + '</p> ' + 
        ' <img src="https://i.imgur.com/RmybYQp.png" alt="" class="img_imc_1"> <p class="info_1"> Quieres leer recomendaciones </p>  <div class="list_1"> <STYLE>A {text-decoration: none;} </STYLE> <a href="recomendacion3.html"> Leer más </a> </div> <img src="img/curva-blue.svg" alt="" class="for_1_imc"> ';
    } else if (formula >18.5 & formula< 24.9){
        respuestas.innerHTML = '<p class =Pri_imc_2 > Peso normal - IMC  '  +  formula.toFixed(1) + '</p> ' + 
        ' <img src="https://i.imgur.com/pvH70y0.png" alt="" class="img_imc_2"> <p class="info_2"> ¿Quiéres leer recomendaciones </br> para seguir así? </p> <div class="list_2"> <STYLE>A {text-decoration: none;} </STYLE> <a href="recomendacion1.html"> Leer más </a> </div> <img src="img/curva-blue.svg" alt="" class="for_2_imc"> ';

    }else if (formula > 25 & formula < 29.9){
        respuestas.innerHTML = '<p class =Pri_imc_3 > Sobrepeso - IMC  '  +  formula.toFixed(1) + '</p> ' +  
        ' <img src="https://i.imgur.com/RmybYQp.png" alt="" class="img_imc_3"> <p class="info_3"> Quieres leer recomendaciones </p> <div class="list_3"> <STYLE>A {text-decoration: none;} </STYLE> <a href="recomendacion2.html"> Leer más </a> </div> <img src="img/curva-blue.svg" alt="" class="for_3_imc"> ';

    }else if (formula > 30 & formula < 39.9){
        respuestas.innerHTML =  '<p class =Pri_imc_4 > Obesidad- IMC  '  +  formula.toFixed(1) + '</p> ' + 
        ' <img src="https://i.imgur.com/PRvJ6h1.png" alt="" class="img_imc_4"> <p class="info_4"> Quieres leer recomendaciones </p> <div class="list_3"> <STYLE>A {text-decoration: none;} </STYLE> <a href="recomendacion4.html"> Leer más </a> </div> <img src="img/curva-blue.svg" alt="" class="for_4_imc"> ';

    }else if (formula >=40){
        respuestas.innerHTML = '<p class =Pri_imc_5 > Obesidad extrema - IMC  '  +  formula.toFixed(1) + '</p> ';

    }    
}

var boton = document.querySelector("#boton");
boton.addEventListener("submit",IMC)

