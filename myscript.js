/*Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team.
MILESTONE 0:
Creare l’array di stringhe contenente i nomi dei membri del team.
MILESTONE 1:
Stampare le informazioni su DOM come card.
MILESTONE 3:
Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.

BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.
*/
//milestone 0
//arrai di stringhe contenente nome dei membri del team
const listTeam  = ["Tommy", "Max", "Milky", "Finn", "Jake", "Gabibbo"];
for (let i = 0; i < listTeam.length; i++){
     const teamMate = listTeam [i];
     console.log(teamMate);//loggo per vederlo 


//milestone 1
//racchiudo dentro funzione che mi crea le 6 carte ? 
function addCards() { // ()teamMate, listTeam)dichiaro i parametri per il momento di manipolazione elementi array successivo
//creo un div con classe col-3, ancora vuoto di contenuti 
     const cardElement = document.createElement('div');
     cardElement.className = "col-4 card p-4";
     //console.log(cardElement.outerHTML);//loggo per vederlo

     //aggiungo dei contenuti di prova
     const cardContent = document.createTextNode(listTeam);
     console.log(cardContent); //da cambiare con i nomi della array!!!!!! e B
     //inserisco il nodo testuale dentro il div
     cardElement.appendChild(cardContent);
//inserisco tutto nella dom 
document.querySelector(".row.p-3.flex-row").appendChild(cardElement);
return;
}

addCards()//richiamo la funzione per vedere se funziona 

}

 
   
  //B//inserisco al suo interno un div con classe card e dentro nome+foto del membro del team + descrizione del compito
        
       