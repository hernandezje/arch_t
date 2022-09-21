document.getElementById("validate").addEventListener("click", validate);

function validate() {
  
  var n = document.getElementById("potencia").value;

  espotencia(n);

  document.getElementById("result").innerHTML = resp;
  //alert(resp);
};

function espotencia(n) {
  // $("#result").text("is ok");
 
  var tempN = n;
  var j = 0;
  var upperBound = Math.trunc(Math.sqrt(n));

    for(var i = 2; i <= upperBound; i++) {
      while(tempN % i == 0 && tempN > 1) {
        tempN = tempN/i;
        j++;

      }
      if(tempN == 1) {
       
        return resp ="ES POTENCIA PERFECTA! <br> donde "+i+"^"+j+" = "+n;
        //alert("es potencia perfecta, k="+i+"j="+j);
        break;
        }
      tempN = n;
      j = 0;
      
    }
    return resp ="NO ES POTENCIA PERFECTA!";
    //alert("no es potencia perfecta");
  

};

