function nb_aleatoire(min, max)
{
    return Math.floor(Math.random() * (max - min +1)) + min;
    //  var nb = min + (max-min+1)*Math.random();
    //  return Math.floor(nb);
}

var number = nb_aleatoire(1,100);
var count;    
var saisie;
var historyArray = [];
var historyString;
var msg = 'Le nombre à deviner est compris entre 1 et 100.';

for(count=0; count<10; count++){
    saisie = prompt(msg);
    historyArray.push(saisie);
    historyString=historyArray.join(', ');

        if(saisie > number){
            msg = "C'est moins. Tu as déjà rentré les chiffres suivants : " + historyString;
        }else if(saisie <number){
            msg = "C'est plus. Tu as déjà rentré les chiffres suivants : " + historyString;
        }else{
            alert("Bravo, tu as gagné en " + count + " coups ! Veux-tu rejouer une partie ?");
        }
}