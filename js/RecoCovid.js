/*Cajas */

var btn_seccion1 = document.querySelector("#From_1");
var btn_seccion2 = document.querySelector("#From_2");
var btn_seccion3 = document.querySelector("#From_3");
var btn_seccion4 = document.querySelector("#From_4");
var btn_seccion5 = document.querySelector("#From_5");
var cajaresultado = document.querySelector("#Cuadro_resultado");
/*Botones */

var seccion1 = document.querySelector("#boton_1_siguiente");
var seccion2 = document.querySelector("#boton_2_siguiente");
var seccion3 = document.querySelector("#boton_3_siguiente");
var seccion4 = document.querySelector("#boton_4_siguiente");
var seccion5 = document.querySelector("#siguiente_resultado");

function caja(){

    btn_seccion1.classList.add("activar");
  
}
caja();

    seccion1.addEventListener("click", function(elEvento){
        elEvento.preventDefault();
        btn_seccion1.classList.remove("activar");
        btn_seccion2.classList.add("activar");
})

    
     seccion2.addEventListener("click", function(elEvento){
            elEvento.preventDefault();
            btn_seccion2.classList.remove("activar");
            btn_seccion3.classList.add("activar");
}) 

   
    seccion3.addEventListener("click", function(elEvento){
         elEvento.preventDefault();
         btn_seccion3.classList.remove("activar");
         btn_seccion4.classList.add("activar");
 })   
 

    seccion4.addEventListener("click", function(elEvento){
        elEvento.preventDefault();
        btn_seccion4.classList.remove("activar");
        btn_seccion5.classList.add("activar");
 }) 

 seccion5.addEventListener("click", function(elEvento){
    elEvento.preventDefault();
    btn_seccion4.classList.remove("activar");
    cajaresultado.classList.add("activar");
}) 

 
function TestCovid(e){
    e.preventDefault();

    
    var contador = 0;
    var porcentaje = 7.69230769231;


    if(document.getElementById('cbox1').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox2').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox3').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox4').checked){
        contador=contador+0;      
    }
    if(document.getElementById('cbox5').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox6').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox7').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox8').checked){
        contador=contador+0;      
    }
    if(document.getElementById('cbox9').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox10').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox11').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox12').checked){
        contador=contador+0;      
    }
    if(document.getElementById('cbox13').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox14').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox15').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox16').checked){
        contador=contador+0;      
    }
    if(document.getElementById('cbox17').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox18').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox19').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox20').checked){
        contador=contador+0;      
    }
    var resultado = document.querySelector("#resultado"); 
    
    var Bajo = 23.08;
    var Mediano = 69.23;
    var Alto= 101;

    if(contador < Bajo){
        resultado.innerHTML = '<p class =Pri_imc > Tienes un  '  +  contador.toFixed(2)+"%" + ' de probabilidades de tener Covid-19</p> '; 
        }else{
            if(contador < Mediano){
                resultado.innerHTML = '<p class =Pri_imc > Tienes un  '  +  contador.toFixed(2)+"%" + ' de probabilidades de tener Covid-19</p> '; 
            }else{
                if(contador < Alto){
                    resultado.innerHTML = '<p class =Pri_imc > Tienes un  '  +  contador.toFixed(2)+"%" + ' de probabilidades de tener Covid-19</p> '; 
                }      
            }
        }
}
var boton = document.querySelector("#siguiente_resultado");
boton.addEventListener("click", TestCovid);