// TODO : 
  var chien = {
    nom: "Medor",
    race: "Rott",
    taille: 192,
    aboyer: function(){
      var aboyement = "Waf Waf";
      return aboyement;
    }
  };

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());
