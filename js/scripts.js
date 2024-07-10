/*
1-CHIEDERE ALL'UTENTE IL SUO NOME - FATTO
2-CHIEDERE IL SUO COGNOME - FATTO
3-CHIEDERE IL SUO COLORE PREFERITO - FATTO
4-INSERIRE NELLA PAGINA HTML IL RISULTATO + 130
*/

// 1. chiedo il nome all'utente e mi salvo il suo valore
const name=(prompt('qual è il tuo nome?'))
console.log('name', name);

//2. chiedo il suo cognome e mi salvo il suo valore
const surname=(prompt('Qual è il tuo cognome?'))
console.log('surname',surname);

//3.chiedo ora il suo colore preferito
const color=(prompt('Qual è i ltuo colore preferito?'))
console.log('color',color);

//4. inserirsco ora nella pagina il risultato + 130 - VERIFICA IN CONSOLE
console.log('Il tuo nome è:' + name);
console.log('Il tuo cognome è:' + surname);
console.log('Il tuo nome è:' + color, + 130);

//4. inserirsco ora nella pagina il risultato + 130
document.getElementById('result_name').innerHTML = 'Il tuo Nome è:' + name;
document.getElementById('result_surname').innerHTML = 'Il tuo Cognome è:' + surname;
document.getElementById('result_color').innerHTML = 'Il tuo Colore preferito è:' + color + 130;

//4.5 inserisco il risultato come stringa nel HTML 
document.writeln('Il tuo Nome è:' + name);
document.writeln('Il tuo Cognome è:' + surname);
document.writeln('Il tuo Colore preferito è:' + color + 130);