/*
  1.
*/


// prove for each

const cose = [
  {nome: 'matita',colore:'nero'},
  {nome: 'penna',colore:'blu'},
  {nome: 'pennarelloR',colore:'rosso'},
  {nome: 'pennarelloB',colore:'nero'},
];

// map test
const cosi = cose.map((coso)=>{
  return coso.nome;
})
console.log('cosi nome dei singoli oggetti distribuiti in nuovo array :',cosi)
console.log('cose array orig :',cose)

// foreach test
// cose.forEach((element, index, array) => {
//   console.log(element, index, )
// })

