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

const listTeam  = [
     "Tommy", 
     "Max",
     "Milky", 
     "Finn", 
     "Jake", 
     "Gabibbo"
];
console.log(listTeam);


for (let i = 0; i < listTeam.length; i++){
     const teamMate = listTeam [i];
     console.log(teamMate);//loggo per vederlo, ok 

     const individual = [];//estraggo da array i nomi per metterli dentro il text node ad un ad uno
     individual.push(teamMate);
     console.log(individual + ", pushato");
    

//milestone 1
//racchiudo dentro funzione che mi crea le 6 carte ? 
/**
   * # generate ordinary member card
   * This function generates a DOM element
   * with an eventListener
   * @param {string} individual The member name
   * @returns Object
   * */
function addCards() { // ()teamMate, listTeam)dichiaro i parametri per il momento di manipolazione elementi array successivo
     //creo un div con classe col-3, ancora vuoto di contenuti 
     const cardElement = document.createElement('div');
     cardElement.className = "col-4 card p-4";
     //console.log(cardElement.outerHTML);//loggo per vederlo //classlist.add

     //aggiungo dei contenuti di prova
     const cardContent = document.createTextNode(individual);
     console.log(cardContent); //da cambiare con i nomi della array!!!!!! e B
     //inserisco il nodo testuale dentro il div
     cardElement.appendChild(cardContent);  //o anche solo append
     //inserisco tutto nella dom 
     document.querySelector(".row.p-3.flex-row").appendChild(cardElement);
     //milestone3
     cardElement.addEventListener('click', function(e){
     console.log(e.target,this);
     
     //e.target.className oppure classlist.add
     this.classList.toggle('bg-primary');
     this.classList.toggle('text-white');

      })

 return cardElement

}

addCards()//richiamo la funzione per vedere se funziona 


}



//B//inserisco al suo interno un div con classe card e dentro nome+foto del membro del team + descrizione del compito (ui)--ancora da fare
        

//event listener form
document.getElementById('addMember').addEventListener('submit',function(e){
     e.preventDefault();
     //console.log('it worked');
     const newMember = document.getElementById('newMember').value;
     console.log(newMember);

  /**
   * # generate NEW member card
   * This function generates a DOM element
   * with an eventListener
   * @param {string} newMember The member name
   * @returns Object
   * */
   function addNewMembers(){
     const cardElement = document.createElement('div');
     cardElement.className = "col-4 card p-4";
     const cardContent = document.createTextNode(newMember);
     cardElement.appendChild(cardContent);  
     document.querySelector(".row.p-3.flex-row").appendChild(cardElement);
     //toggle
     cardElement.addEventListener('click', function(e){
     console.log(e.target,this);
     
     this.classList.toggle('bg-primary');
     this.classList.toggle('text-white');

     })
     return cardElement;
   }
   addNewMembers();


})    