var compte = {
  titulaire: "Alex",
  solde: 0,
  crediter: function(){
    var credit = Number(prompt("Solde du crédit a effectuer"));
    this.solde = this.solde+credit;
    return this.solde;
  },
  debiter: function(){
    var debit = Number(prompt("Montant a retirer"));
    this.solde = this.solde-debit;
    return this.solde;
  },
  descript: function(){
    var descr = "Titulaire: "+this.titulaire+" , solde de : "+this.solde+" €";
    return descr;
  }
};

console.log(compte.descript());
compte.crediter();
compte.debiter();
console.log(compte.descript());
