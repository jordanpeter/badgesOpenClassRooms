var heure = Number(prompt("Heure ?"));
var minute = Number(prompt("Minutes ?"));
var seconde = Number(prompt("Secondes ?"));

if(heure < 24 && heure >=0){
     if(minute<60 && minute >=0) {
          if(seconde<60 && seconde>=0){
               seconde = seconde+1;
               if(seconde>59){
                    seconde = 0;
                    minute++;
                    if(minute>59){
                         minute = 0;
                         heure++;
                         if(heure==24){
                              heure = 0;

                         }
                    }
               }
               console.log(heure+"h"+minute+"m"+seconde+"s");
          }
     }
}
else{
     console.log("T'essaies de faire quoi là ?");
}
