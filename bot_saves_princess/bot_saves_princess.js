
var Helper=require("./Helper.js");
Helper.version();
console.reset = function () {
  return process.stdout.write('\033c');
}
console.reset();
function displayPathtoPrincess(dimension, grid)
{
   // console.log("display path")
   Registro=[];
   Matrix=[[],[],[]];
   Moves=['D','U','L','R'];

  Matrix=gidToMatrix(dimension,grid);
  //console.log(Matrix);
  printMatrix(Matrix);
    isSolution=false;
    var ini= new Nodo();
    ini.ID=0;
    ini.Move="initial";
    ini.Parent=null;
    ini.M=Matrix;
    Registro.push(ini);
    var count=0;
    var p1=0;
    var p2=1;
    var solution=Helper.get_M(Matrix,'p')
    //console.log(get_M(Matrix,'p'))
    //console.log("Matrix: "+Matrix.length)Matrix.forEach(function(a){console.log(a)})
    while(!isSolution){
    //  console.reset();
      //console.log('get m')
      var position=Helper.get_M(Matrix,'m')
      //console.log('inicia mapeo')
       for(var p=p1;p<p2;p++){
        //console.log('p:'+p+" p1:"+p1+' p2:'+p2)
        console.log('expande:'+Registro[p])
        var Nodos=Helper.expande(Registro[p]);
        console.log("Nodos:"+Nodos.length)
        var parent=Registro[p].ID;
         for (var n in Nodos){
           _n=Nodos[n];
          console.log("Node:"+Nodos[n]);
           if(Helper.CompareM(Helper.get_M(_n.M,'m'),solution))
           isSolution=true;
           n.ID=count;
           n.Parent=parent;
           count+=1;
           //Registro.push(n);

           //console.log(count);
           //console.log('expandiendo: '+p+'/'+(p2-p1))
           //printMatrix()

         }

       }
       p1=p2;
       p2=count;

       console.log("p1:"+p1+' p2:'+p2)
    }
    console.log('Fin :)');
}
function gidToMatrix(d,grid){
    console.log("gridToMatrix")
 var count =0;
    response=[];
    for (var r = 0;r<d;r++){
        var _r=[];
        for (var c = 0;c<d;c++){
           _r[c]=grid[count];
               count++;
        }
        response.push(_r);
    }
return response;
}
Nodo=function(M,m,p){
    this.Move=m;
    this.ID="";
    this.Parent=p;
    this.M=M;
}
function printMatrix(M){
     M.forEach(function(a){
      /* a.forEach(function(i){
         console.log()
       })*/
       console.log(a);
     })

}
console.log("bot save princess");
grid=["-","-","-","-","m","-","p","-","-"];

displayPathtoPrincess(3,grid);
