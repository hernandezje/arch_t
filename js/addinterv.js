document.getElementById("agregar").addEventListener("click", agregar);
    const element = ([]);
    // i=0;
    //const interv=[];
    function agregar(){
      
      var start = document.getElementById("inferior").value;
      var end = document.getElementById("superior").value;
      
      var fila = ' [' + start + ',' + end + ']'; //esto seria lo que contendria la fila
   
      var tabla= document.getElementById("interv");
      tabla.append(fila);
      
      const interv = ([start,end]);
      element.push(interv);

    }

document.getElementById("ordenar").addEventListener("click", sumIntervalos);
    
function sumIntervalos() {
    const ranges = new Set();
    
    element.forEach(([start, end]) => {
        for (let i = start; i < end; i++) ranges.add(i);
    });


    document.getElementById("result").innerHTML = "La suma de los intervalos ingresados es " + ranges.size;
    //alert(ranges.size);
   
}
    