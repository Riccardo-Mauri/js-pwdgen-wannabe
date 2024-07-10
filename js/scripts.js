/*
1-CHIEDERE ALL'UTENTE IL SUO NOME - FATTO
2-CHIEDERE IL SUO COGNOME - FATTO
3-CHIEDERE IL SUO COLORE PREFERITO - FATTO
4-INSERIRE NELLA PAGINA HTML IL RISULTATO + 130
*/

// 1. chiedo il nome all'utente e mi salvo il suo valore
const ElementName=(prompt('qual è il tuo nome?'))
console.log('name', ElementName);

//2. chiedo il suo cognome e mi salvo il suo valore
const ElementSurname=(prompt('Qual è il tuo cognome?'))
console.log('surname',ElementSurname);

//3.chiedo ora il suo colore preferito
const ElementColor=(prompt('Qual è il tuo colore preferito?'))
console.log('color',ElementColor);

//4. inserirsco ora nella pagina il risultato + 130 - VERIFICA IN CONSOLE
console.log('Il tuo nome è:' + ElementName);
console.log('Il tuo cognome è:' + ElementSurname);
console.log('Il tuo nome è:' + ElementColor);

//5. genera la password
console.log('La tua password è:' + ElementName + ElementSurname + ElementColor + 130);
document.getElementById('password').innerHTML = 'La tua password è:' + ElementName + ElementSurname + ElementColor + 130;