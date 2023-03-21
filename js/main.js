const DateTime = luxon.DateTime;
const { createApp } = Vue

  createApp({
    data() {
      return {
        contact:0,
        newMessage:"",
        testoRicerca:"",
        orario: DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
        
        contacts: [
{
name: 'Michele',
avatar: './img/avatar_1.jpg',
visible: true,
messages: [
{
date: ' 15:30',
message: 'Hai portato a spasso il cane?',
status: 'sent'
},
{
date: '15:50',
message: 'Ricordati di stendere i panni',
status: 'sent'
},
{
date: ' 16:15',
message: 'Tutto fatto!',
status: 'received'
}
],
},


{
name: 'Fabio',
avatar: "./img/avatar_2.jpg",
visible: true,
messages: [
{
date: '16:30',
message: 'Ciao come stai?',
status: 'sent'
},
{
date: ' 16:30',
message: 'Bene grazie! Stasera ci vediamo?',
status: 'received'
},
{
date: '16:35',
message: 'Mi piacerebbe ma devo andare a fare la spesa.',
status: 'sent'
}
],
},


{
name: 'Samuele',
avatar: "./img/avatar_3.jpg",
visible: true,
messages: [
{
date: ' 10:10',
message: 'La Marianna va in campagna',
status: 'received'
},
{
date: ' 10:20',
message: 'Sicuro di non aver sbagliato chat?',
status: 'sent'
},
{
date: ' 16:15',
message: 'Ah scusa!',
status: 'received'
}
],
},


{
name: 'Alessandro B.',
avatar: "./img/avatar_4.jpg",
visible: true,
messages: [
{
date: ' 15:30',
message: 'Lo sai che ha aperto una nuova pizzeria?',
status: 'sent'
},
{
date: ' 15:50',
message: 'Si, ma preferirei andare al cinema',
status: 'received'
}
],
},


{
name: 'Alessandro L.',
avatar: "./img/avatar_5.jpg",
visible: true,
messages: [
{
date: ' 15:30',
message: 'Ricordati di chiamare la nonna',
status: 'sent'
},
{
date: '15:50',
message: 'Va bene, stasera la sento',
status: 'received'
}
],
},


{
name: 'Giuliana',
avatar: "./img/avatar_5.jpg",
visible: true,
messages: [
{
date: ' 15:30',
message: 'Ciao Claudia, hai novità?',
status: 'sent'
},
{
date: ' 15:50',
message: 'Non ancora',
status: 'received'
},
{
date: ' 15:51',
message: 'Nessuna nuova, buona nuova',
status: 'sent'
}
],
},


{
name: 'Federico',
avatar: "./img/avatar_7.jpg",
visible: true,
messages: [
{
date: ' 15:30',
message: 'Fai gli auguri a Martina che è il suo compleanno!',
status: 'sent'
},
{
date: ' 15:50',
message: 'Grazie per avermelo ricordato, le scrivo subito!',
status: 'received'
}
],
},


{
name: 'Davide',
avatar: "./img/avatar_8.jpg",
visible: true,
messages: [
{
date: ' 15:30',
message: 'Ciao, andiamo a mangiare la pizza stasera?',
status: 'received'
},
{
date: ' 15:50',
message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
status: 'sent'
},
{
date: ' 15:51',
message: 'OK!!',
status: 'received'
}
],
}]      
      }
    },
     methods:{
     selezionachat(chatamico){
      this.contact = chatamico;
     },
     creazionemessaggio(){
      if(this.newMessage.length > 0){
        this.contacts[this.contact].messages.push( { date:this.orario, message:this.newMessage, status:'sent'});
        this.newMessage="";
        this.risposta();
      }
     },
     risposta(){
      setTimeout(()=>{
        this.contacts[this.contact].messages.push( { date:this.orario, message:'ok ',status:'received'} );
      },1000);
     },
     searchUser(){
      this.contacts.forEach(element => {
        if(element.name.includes(this.testoRicerca)){
          element.visible=true;
        } else {
          element.visible=false;
        } 
      });
     },
        visualizzaMessaggio(contact){
      return contact.messages[contact.messages.length -1].message;
    },
        visualizzaOrario(contact){
          return contact.messages[contact.messages.length -1].date;
        }
      
    }   
  }).mount('#app')