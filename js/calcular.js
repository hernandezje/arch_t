document.getElementById("validate").addEventListener("click", validate);

function validate() {
  
  var n = document.getElementById("potencia").value;

  espotencia(n);

  document.getElementById("result").innerHTML = resp;
  //alert(resp);
};

// se resuelve usando la teoria del Maximo Común Divisor, pero usando siempre el mismo divisor.
// por ejemplo: 
// 8|2
// 4|2
// 2|2
// 1|

function espotencia(n) {
  
  var tempN = n;
  var j = 0;
  var upperBound = Math.trunc(Math.sqrt(n));

    //probamos como divisor de n cada numero natural {2,3,4,5...}, hasta upperBound veceses.
    
    for(var i = 2; i <= upperBound; i++) {

      //dividios n(tempN) mientras i se divisor (resto = 0) 
      while(tempN % i == 0 && tempN > 1) {
        tempN = tempN/i;
        j++;

      }

      // si el calculo del M.C.D termina en 1 significa que es potencia perfecta
      if(tempN == 1) {
       
        return resp ="ES POTENCIA PERFECTA! <br> donde "+i+"^"+j+" = "+n;
        //alert("es potencia perfecta, k="+i+"j="+j);
        break;
        }
      tempN = n;
      j = 0;
      
    }
    // si al terminar de probar el calculo del M.C.D ninguno termina en 1 significa que NO es potencia perfecta
    return resp ="NO ES POTENCIA PERFECTA!";
    //alert("no es potencia perfecta");
  

};

