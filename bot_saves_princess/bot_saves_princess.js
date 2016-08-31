function displayPathtoPrincess(dimension, grid)
{
   // console.log("display path")
   Moves=[];
   Matrix=[[],[],[]];
   
  Matrix=gidToMatrix(dimension,grid); 
    isSolution=false;
    var ini= new Nodo();
    ini.ID=0;
    ini.Move="initial";
    ini.Parent=null;
    Moves.push(ini);
    var count=0;
    //console.log("Matrix: "+Matrix.length)Matrix.forEach(function(a){console.log(a)})
    while(!isSolution){
     
        
        
    }
    
}
function expande(){
    
}
function isPisibleMoveIt(M,move){
    switch(move){
        case "D":
            break;
        case "U":
            break
        case "L":
        break;
        case "R":
        break:
            
    }
    
}
function get_M(grid){
    grid.forEach(function(){
        if(p=="m")
            response = p;
    });
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
Nodo=function(){
    this.Move="";
    this.ID="";
    this.Parent=null;
}
console.log("bot save princess");
grid=["-","-","-","-","m","-","p","-","-"];
displayPathtoPrincess(3,grid);