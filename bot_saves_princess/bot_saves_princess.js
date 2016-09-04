
var Helper=require("./Helper.js");
Helper.version();
console.reset = function () {
  return process.stdout.write('\033c');
}
//console.reset();
function displayPathtoPrincess(dimension, grid)
{
   console.log("display path")
   Registro=[];
   Matrix=[[],[],[]];
   Moves=['DOWN','UP','LEFT','RIGHT'];

  Matrix=gidToMatrix(dimension,grid);
  //console.log(Matrix);
    printMatrix(Matrix);
    isSolution=false;
    var ini= new Nodo();
    ini.ID=0;
    ini.Move="Inicial";
    ini.Parent=null;
    ini.M=Matrix;
    Registro.push(ini);
    var count=1;
    var p1=0;
    var p2=1;
    var solution=Helper.get_M(Matrix,'p')
    //console.log(get_M(Matrix,'p'))
    //console.log("Matrix: "+Matrix.length)Matrix.forEach(function(a){console.log(a)})
    while(!isSolution){
    console.reset();
      //console.log('get m')
      //var position=Helper.get_M(Matrix,'m')
      //console.log('inicia mapeo')
       for(var p=p1;p<p2;p++){
        //console.log('p:'+p+" p1:"+p1+' p2:'+p2+" Registro: "+Registro[p])

      //  console.log('expande:'+Registro[p])
        var Nodos=Helper.expande(Registro[p]);
      //  console.log("Nodos:"+Nodos.length)
        var parent=Registro[p].ID;
         for (var n in Nodos){
            console.reset();
           _n=Nodos[n];
          //console.log("Node:"+Nodos[n].M);
          //console.log("Solution:"+JSON.stringify(solution));
          _newSol=JSON.stringify(Helper.get_M(_n.M,'m'))
           if(_newSol==JSON.stringify(solution))
           isSolution=true;
           _n.ID=count;
           _n.Parent=parent;
           count+=1;
           //console.log("Push:"+_n.M)
           Registro.push(_n);

           console.log(count);
           console.log('expandiendo: '+p+'/'+(p2-p1))
           printMatrix(_n.M)
         }
       }
       p1=p2;
       p2=count;
       //console.log("p1:"+p1+' p2:'+p2)

    }
    console.log('Fin :)');
   // console.log(Registro[Registro.length-1].Parent);
   Registro[Registro.length-1].M= saveP(Registro[Registro.length-1].M)
    Soluciones=[];
    ct = Registro.length-1;
    _finish =false;
    while(!_finish){
         _res=Registro[ct];
          //console.log("value "+ct);
          //console.log("ID: "+_res.ID+" Padre:"+_res.Parent+" Movimiento:"+_res.Move)
        //  printMatrix(_res.M);
            Soluciones.push({move:_res.Move,M:_res.M});
          ct=Registro[ct].Parent;
        if(!ct){
            _finish=true;
          _res=Registro[ct];
          //console.log("value "+ct);
        //  console.log("ID: "+_res.ID+" Padre:"+_res.Parent+" Movimiento:"+_res.Move)
          //printMatrix(_res.M);
          Soluciones.push({move:_res.Move,M:_res.M});
        }
    }
    //setTimeout(function(){ console.log(Date.now()); }, 500);
   /* var t=Soluciones.length-1;
    setTimeout(function(){
        t+=1;
    console.log(t);
    }, 3000);*/
    var s ="";
    for(var i =Soluciones.length-1;i>=0;i--){
        s+=""+Soluciones[i].move+",";
    }
    console.log(s);
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
  console.log('print')
     M.forEach(function(a){
      /* a.forEach(function(i){
         console.log()
       })*/
       console.log(a);
     })

}
console.log("bot save princess");
//grid=["-","-","-","-","m","-","p","-","-"];
grid=["-","-","-","-","-","-","-","-","-","m",
      "-","-","-","-","-","-","-","-","-","-",
      "-","-","-","-","-","-","-","-","-","-",
      "-","-","-","-","-","-","-","-","-","-",
      "-","-","-","-","-","-","-","-","-","-",
      "-","-","-","-","-","-","-","-","-","-",
      "-","-","-","-","-","-","-","-","-","-",
      "-","-","-","-","-","-","-","-","-","-",
      "-","-","-","-","-","-","-","-","-","-",
      "p","-","-","-","-","-","-","-","-","-"];

displayPathtoPrincess(10,grid);

function saveP(M){
  //  console.log("MATRIX sin p")
    var w = M.length;
  //  console.log("M w: "+w)
    for (var r=0;r<w;r++){
      for (var c=0;c<w;c++){
        //console.log("values: r"+r+" c:"+c);
         if(M[r][c]=="p"){
          //   console.log("si encontro la p")
             M[r][c]="-";
             }
      }
      }
        //printMatrix(M)
        return M;
}
