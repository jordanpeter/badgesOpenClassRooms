var jour = prompt("Quel jour sommes-nous ?");
var jourLower = jour.toLowerCase();
switch(jourLower){
case "lundi":
     console.log("Demain nous serons mardi");
     break;
case "mardi":
     console.log("Demain nous serons mercredi");
     break;
case "mercredi":
     console.log("Demain nous serons jeudi");
     break;
case "jeudi":
     console.log("Demain nous serons vendredi");
     break;
case "vendredi":
     console.log("Demain nous serons samedi");
     break;
case "samedi":
     console.log("Demain nous serons dimanche");
     break;
case "dimanche":
     console.log("Demain nous serons lundi");
     break;
default:
     console.log("Pas compris poto");
}
