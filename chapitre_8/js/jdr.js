var Personnage = {
  nom: "",
  sante: 0,
  force: 0,
  xp: 0,

  decrire: function(){
    var description = this.nom + " a " + this.sante + " points de vie, " +this.force + " en force et " + this.xp + " points d'expérience";
    return description;
  }
};

var perso1 = Object.create(Personnage);
perso1.nom = "Corentin";
perso1.sante = "12";
perso1.force = "49";
perso1.xp = "0";

var perso2 = Object.create(Personnage);
perso2.nom = "Martin";
perso2.sante = "120";
perso2.force = "490";
perso2.xp = "1000";


console.log(perso2.decrire());
console.log(perso1.decrire());
