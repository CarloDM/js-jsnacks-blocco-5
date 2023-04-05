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
console.log('nomi per targhette',nameList);

// lista stud con voto superiore a 70
let over70List = [studenti.filter((studente) => {if (studente.voto > 69) return studente})]
console.log('lista voto sopra 70',over70List);

// lista stud con voto superiore a 70 e id superiore a 120
let over70Over120Id = [studenti.filter((studente) => {if (studente.voto >= 70 && studente.id >= 120) return studente})]
console.log('lista over 70 e id over 120',over70Over120Id);

// <--------------------------------------------------------------
console.warn('----------------------jsnack5')
// snk 5
// lista bici da corsa nome e peso
const bici = [
  {nome: 'cannondale',  peso : 8.5},
  {nome: 'bianchi',     peso : 8},
  {nome: 'specialized', peso : 10},
  {nome: 'stucchi',     peso : 9.5},
  {nome: 'locomotiv',   peso : 9}
]
console.log(bici)

// individuare bici meno pesante senza destructuri e templ literal
let biciLeggera = {nome: 'bicipesante',  peso : 30};
bici.forEach((bike)=>{if (bike.peso < biciLeggera.peso) {biciLeggera = bike;}});
console.log(biciLeggera);

// <--------------------------------------------------------------
console.warn('----------------------jsnack6')
// array oggetti squadre nome punt fatti falli subiti
const squadre = [
  {nome: 'real madrid',      punti: randomNumber(0,100), falliSubiti: randomNumber(10,100)},
  {nome: 'atletico bilbao',  punti: randomNumber(0,100), falliSubiti: randomNumber(10,100)},
  {nome: 'porto',            punti: randomNumber(0,100), falliSubiti: randomNumber(10,100)},
  {nome: 'milan',            punti: randomNumber(0,100), falliSubiti: randomNumber(10,100)},
  {nome: 'inter',            punti: randomNumber(0,100), falliSubiti: randomNumber(10,100)},
  {nome: 'juventus',         punti: randomNumber(0,100), falliSubiti: randomNumber(10,100)},
  {nome: 'ajax',             punti: randomNumber(0,100), falliSubiti: randomNumber(10,100)},
  {nome: 'liverpool',        punti: randomNumber(0,100), falliSubiti: randomNumber(10,100)},
  {nome: 'manchester',       punti: randomNumber(0,100), falliSubiti: randomNumber(10,100)},
  {nome: 'paris san germen', punti: randomNumber(0,100), falliSubiti: randomNumber(10,100)},
]
console.log('squadre',squadre)

let squadresintesi = squadre.map((squadra) => {
  nome          = squadra.nome;
  falliRicevuti = squadra.falliSubiti
  return {nome, falliRicevuti}
});

console.log('squadre sintesi',squadresintesi)

randomNumber();
function randomNumber(min,max) {
  R = Math.floor(Math.random() * (max - min) + min)
  return R
}
