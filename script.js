/*
  1.generare array di oggetti utenti
  2.generare altro array con solo utenti over65
  ----------
*/

const utenti = [
  {
    nome : 'gianni',
    cognome : 'rossi',
    eta : 75,
},
  {
    nome : 'maria',
    cognome : 'verdi',
    eta : 82,
},
  {
    nome : 'mario',
    cognome : 'bianchi',
    eta : 45,
},
  {
    nome : 'filippo',
    cognome : 'marrone',
    eta : 17,
},
  {
    nome : 'filippo',
    cognome : 'marrone',
    eta : 15,
},
  {
    nome : 'giovanni',
    cognome : 'cip ciop',
    eta : 19,
}
]
console.log('utenti',utenti)

// filtrare sopra 65 anni ------------------>
const over65 = utenti.filter((utente)=>{
  if (utente.eta >64){
    return utente;
  }
})
console.log('utenti-over65',over65)

// sotto 18--------------------------------->
const minorenni = utenti.filter((utente)=> {
  if (utente.eta < 18){
    return utente;
  }
})
console.log('utenti-minorenni',minorenni)
//                     <----------------------
// -------------------------------------------




// prove for each------------------------------------------

// const cose = [
//   {nome: 'matita',colore:'nero'},
//   {nome: 'penna',colore:'blu'},
//   {nome: 'pennarelloR',colore:'rosso'},
//   {nome: 'pennarelloB',colore:'nero'},
// ];

// // filter test
// const neri = cose.filter((coso)=>{
//   if (coso.colore === 'nero'){
//     return coso;
//   }
// });
// console.log('neri',neri)

// // map test
// const cosi = cose.map((coso)=>{
//   return coso.nome;
// })
// console.log('cosi nome dei singoli oggetti distribuiti in nuovo array :',cosi)
// console.log('cose array orig :',cose)


// foreach test
// cose.forEach((element, index, array) => {
//   console.log(element, index, )
// })

