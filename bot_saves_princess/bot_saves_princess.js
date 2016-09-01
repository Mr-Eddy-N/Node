console.reset = function () {
  return process.stdout.write('\033c');
}
function displayPathtoPrincess(dimension, grid)
{
   // console.log("display path")
   Registro=[];
   Matrix=[[],[],[]];
   Moves=['D','U','L','R'];

  Matrix=gidToMatrix(dimension,grid);
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
    var solution=get_M(Matrix,'p')
    //console.log(get_M(Matrix,'p'))
    //console.log("Matrix: "+Matrix.length)Matrix.forEach(function(a){console.log(a)})
    while(!isSolution){
      count+=1;
      console.log('get m')
      var position=get_M(Matrix,'m')
      console.log('inicia mapeo')
       for(var p=p1;p<=p2;p++){
        //console.log('expande')
        var Nodos=expande(Registro[p]);
        console.log(Nodos.length)
        var parent=Registro[p].ID;
         for (var n in Nodos){
             console.log(Nodos[n]);
           if(CompareM(get_M(n.M),solution))
           isSolution=true;
           n.ID=count;
           n.Parent=parent;
           Registro.push(n);
           console.log(count);
           console.log('expandiendo: '+p+'/'+(p2-p1))
           printMatrix()
            console.reset();
         }
       }
       p1=p2;
       p2=count;
    }
    console.log('Fin :)');
}
function expande(M){
  var response=[];
  Moves.forEach(function(_m){
    if(isPossibleMoveIt(M.M,_m)&&!Exist(M.M)){
       var _nodo=new Nodo(M.m,_m,M.ID);
      response.push(_nodo);
    }

  });
  return response;
}
function isPossibleMoveIt(M,move){
  var p=get_M(Matrix,'m');
  var response;
  var d=Matrix.length;
    switch(move){
        case "D":
        if(p.y<d)
        response =true;
            break;
        case "U":
        if(p.y>0)
        response=true;
            break
        case "L":
        if(p.x>0)
        response=true
        break;
        case "R":
        if(p.x<d)
        response=true;
        break;
    }
    return response;
}
function Exist(M){
  var response=false;
  var e=Registro.filter(function(x){return CompareM(x.M,M)}).length;
  if(e>0)
  response =true;
}
function get_M(M,t){
    console.log(M);
  var w = M.length;
  var p={};
  for (var r=0;r<w;r++){
    for (var c=0;c<w;c++){
       if(M[r][c]==t)
       return {x:c,y:r};
    }
  }
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
function CompareM(m1,m2){
var  response =false;
var m_1=JSON.stringify(m1);
var m_2=JSON.stringify(m2);
return m_1 == m_2;
}
console.log("bot save princess");
grid=["-","-","-","-","m","-","p","-","-"];

displayPathtoPrincess(3,grid);
