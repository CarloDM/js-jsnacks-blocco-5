/*snk 1
  1.generare array di oggetti utenti
  2.generare altro array con solo utenti over65
  ------------------------------------------------>
*/
const utenti = [
  { nome : 'gianni',   cognome : 'rossi',    eta : 75 },
  { nome : 'maria',    cognome : 'verdi',    eta : 82 },
  { nome : 'mario',    cognome : 'bianchi',  eta : 45 },
  { nome : 'filippo',  cognome : 'marrone',  eta : 17 },
  { nome : 'filippo',  cognome : 'marrone',  eta : 15 },
  { nome : 'giovanni', cognome : 'cip ciop', eta : 19 }
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
console.warn('<--------------------------------------------------------')
//                     <----------------------
// -------------------------------------------

/*snk2
  1.CREARE STUDENTI - NOME COGNOME NUMERO DI MATR E UNA CHIAVE CHE CONTIENE UN ALTRO OGGETTO VOTI
  2.nuovo elenco sintetico

*/
const studenti = [
  { nome : 'mario',     cognome : 'bianchi',     matricola: '01234',
    voti : {arte: 7,  matematica: 6,  lettere: 5,  scienze: 9} },

  { nome : 'marcello',  cognome : 'bongiovanni', matricola: '54684',
    voti : {arte: 5,  matematica: 9,  lettere: 6,  scienze: 10} },

  { nome : 'maddalena', cognome : 'de giorgis', matricola: '66655',
    voti : {arte: 10, matematica: 4,  lettere: 7, scienze: 5} },

  { nome : 'elisa',     cognome : 'pong',       matricola: '11256',
    voti : {arte: 6,  matematica: 6,  lettere: 7, scienze: 6} },
];
console.log('studenti grezzo', studenti)

// 1.estrapoliamo nuovo array 
const studentiSintesi = studenti.map((studente)=>{
  
  nomeC     = studente.nome +' '+ studente.cognome,
  matr      = studente.matricola,
  voti      = studente.voti;
  mediaVoti = ((voti.arte + voti.matematica + voti.lettere + voti.scienze) /4)
  
// deve ritornare un array di {oggetti} con queste 'nuove' chiavi
  return {nomeC, matr, mediaVoti}
})
console.log('studenti sintesi', studentiSintesi)







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

