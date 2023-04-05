// snk 4
// elenco studenti id nome somma tot voti esame 70 100

const studenti = [
  {id : 213, nome: 'Marco della Rovere ',   voto: 78},
  {id : 110, nome: 'Paola Cortellessa ',    voto: 96},
  {id : 250, nome: 'Andrea Mantegna ',      voto: 48},
  {id : 145, nome: 'Gaia Borromini ',       voto: 74},
  {id : 196, nome: 'Luigi Grimaldello',     voto: 68},
  {id : 102, nome: 'Piero della Francesca', voto: 50},
  {id : 120, nome: 'Francesca da Polenta ', voto: 84},
]

// lista con nome in maiuscolo
let nameList = [];
studenti.forEach((studente) => nameList.push((studente.nome).toUpperCase()))
console.log(nameList);

// lista stud con voto superiore a 70
let over70List =[studenti.filter((studente)=>{if (studente.voto > 69) return studente}) ]
console.log(over70List);

// lista stud con voto superiore a 70 e id superiore a 120
let over70Over120Id =[studenti.filter((studente)=>{if (studente.voto >= 70 && studente.id >= 120) return studente}) ]
console.log(over70Over120Id);

