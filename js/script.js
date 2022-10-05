// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// poi chiedi la sua età
// Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età)

const nomeUtente = prompt('Scrivi il tuo nome');
const nomeUtLower = nomeUtente.toLowerCase();
const cognomeUtente = prompt('Scrivi il tuo cognome');
const cognomeUtLower = cognomeUtente.toLowerCase();
const coloreUtente = prompt('Scrivi il tuo colore preferito');
const coloreUtLower = coloreUtente.toLowerCase();
const etaUtente = prompt('Scrivi la tua età in numero');
const yourNewPsw = document.getElementById('psw-generated');
yourNewPsw.innerHTML = nomeUtLower+cognomeUtLower+coloreUtLower+etaUtente;