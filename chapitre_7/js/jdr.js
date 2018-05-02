var perso = {
  nom: "12 Gang",
  vie: 150,
  force: 12,
  xp: 0,

  decrire: function () {
    var description = this.nom + " a " + this.vie + " points de vie et " + this.force + " en force et possède "+this.xp+" d'EXP";
    return description;
  }

};

var perso2 = {
  nom: "MEGA",
  vie: 12,
  force: 212
};


console.log(perso.decrire());

perso.vie = perso.vie - 20;
perso.force = perso.force + 10;
perso.xp = perso.xp + 50;

console.log(perso.decrire());
