// snk 4
// elenco studenti id nome somma tot voti esame 70 100

const studenti = [
  {id : 1, nome: 'giovanni', voto: 77},
  {id : 2, nome: 'maddalena', voto: 65},
  {id : 3, nome: 'filippo', voto: 62},
  {id : 4, nome: 'elisa', voto: 80},
  {id : 5, nome: 'marco', voto: 85},
]

// lista con nome in maiuscolo
let nameList = [];
studenti.forEach((studente) => nameList.push((studente.nome).toUpperCase()))
console.log(nameList);



