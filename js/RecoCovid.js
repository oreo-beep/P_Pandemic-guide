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
        resutado.innerHTML = '<p class =Pri_imc > Tienes un  '  +  contador.toFixed(2)+"%" + ' de probabilidades de tener Covid-19</p> '; 
        }else{
            if(contador < Mediano){
                resutado.innerHTML = '<p class =Pri_imc > Tienes un  '  +  contador.toFixed(2)+"%" + ' de probabilidades de tener Covid-19</p> '; 
            }else{
                if(contador < Alto){
                    resutado.innerHTML = '<p class =Pri_imc > Tienes un  '  +  contador.toFixed(2)+"%" + ' de probabilidades de tener Covid-19</p> '; 
                }      
            }
        }
}
var boton = document.querySelector("#inputFormularioCovid");
boton.addEventListener("submit", TestCovid);