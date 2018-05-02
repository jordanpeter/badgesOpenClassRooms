var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO :
var cercle = {
  aire: function(){ 
    return (r*r)*Math.PI;
  },
  perimetre: function(){
    return 2 * Math.PI * r;
  }
}

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());
