module.exports={
  version:function(){
    console.log('1.0.0')
  },
  expande:function (M){
    //console.log("Expande:"+M.M)
    //console.log('Registro_test'+Registro[0].M);
     var response=[];
     Moves.forEach(function(_m){
       //console.log(_m);
       if(module.exports.isPossibleMoveIt(M.M,_m)){
         //console.log('Registro_test'+Registro[0].M);
       var tempM=JSON.parse(JSON.stringify(M.M));
       var p =module.exports.get_M(M.M,'m');
        //console.log('Registro_test'+Registro[0].M);
      if(_m=="DOWN"){
        var t = tempM[p.r+1][p.c];
        tempM[p.r][p.c]=t;
        tempM[p.r+1][p.c]='m';
      }
       //console.log('Registro_test'+Registro[0].M);
      if(_m=="UP"){
        var t = tempM[p.r-1][p.c];
        tempM[p.r][p.c]=t;
        tempM[p.r-1][p.c]='m';
      }
      if(_m=="LEFT"){
        var t = tempM[p.r][p.c-1];
        tempM[p.r][p.c]=t;
        tempM[p.r][p.c-1]='m';
      }
      if(_m=="RIGHT"){
        var t = tempM[p.r][p.c+1];
        tempM[p.r][p.c]=t;
        tempM[p.r][p.c+1]='m';
      }
       var _nodo=new Nodo(tempM,_m,M.ID);
      // console.log('Registro_test'+Registro[0].M);
      if(!module.exports.Exist(tempM))
       response.push(_nodo);
    };
  });
  return response;
},
isPossibleMoveIt:function (M,move){
 // console.log('isPossibleMoveIt:'+M+' move:'+move);
  var p=module.exports.get_M(M,'m');
  //console.log('p'+p)
  var response=false;
  var d=Matrix.length-1;
    switch(move){
        case "DOWN":
        if(p.r<d)
        response =true;
            break;
        case "UP":
        if(p.r>0)
        response=true;
            break
        case "LEFT":
        if(p.c>0)
        response=true
        break;
        case "RIGHT":
        if(p.c<d)
        response=true;
        break;
    }
    //console.log('response:'+response);
    return response;
},
 Exist:function(M){
   //console.log('Exist:'+M);
    var response=false;
   // console.log('registro:'+Registro[0].M);
    var e=Registro.filter(function(x){return module.exports.CompareM(x.M,M)}).length;
    if(e>0)
    response =true;
    //console.log('response:'+response)
    return response;
  },

  get_M:function(M,t){
   //console.log('get_M:'+M);
    var w = M.length;
    var p={};
    var response;
    for (var r=0;r<w;r++){
      for (var c=0;c<w;c++){
         if(M[r][c]==t)
         response= {c:c,r:r};
      }
    }
   // console.log('response:'+JSON.stringify(response));
    return response;
  },
CompareM:function (m1,m2){
  var  response =false;
 // console.log('compare:'+m1+' con '+m2);
  var m_1=JSON.stringify(m1);
  var m_2=JSON.stringify(m2);
  return m_1 == m_2;
  }

}
