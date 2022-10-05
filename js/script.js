// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// poi chiedi la sua età
// Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età)

const nomeUtente = prompt('Scrivi il tuo nome');
const cognomeUtente = prompt('Scrivi il tuo cognome');
const coloreUtente = prompt('Scrivi il tuo colore preferito');
const etaUtente = prompt('Scrivi la tua età');
const yourNewPsw = document.getElementById('psw-generated');
yourNewPsw.innerHTML = nomeUtente+cognomeUtente+coloreUtente+etaUtente;