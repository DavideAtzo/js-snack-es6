<!-- SNACK 1
Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto: `[ ‘Brad Pitt’, ‘Johnny Depp’, ‘Lady Gaga’, ‘Cristiano Ronaldo’, ‘Georgina Rodriguez’, ‘Chiara Ferragni’, ‘Fedez’, ‘George Clooney’, ‘Amal Clooney’, ‘Maneskin’]`
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell’ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto. -->

Step-1: creiamo array con gli invitati;
Step-2: creo uno arrow function che scorre in ordine l'array invitati e aggiungo a loro due oggetti (nome-tavolo e numero-posto);
Step-3: salvare queste info invitati in una nuova variabile;


<!-- SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 -->

Step-1: creo arrey con chiavi: _id_, _Nome_ e _somma totale_ dei loro voti di esame;
Step-4: creo lista dove gli oggetti saranno scritti in maiusolo;
Step-5: creo lista con studenti con voti maggiori di 70;
Step-6: creo lista con studenti con voti maggiori di 70 e id maggiore di 120;


<!-- SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal -->

Step-1: creo arrey con chiavi: nome bici e peso;
Step-2: creo un ciclo che scorre l'array e prenda la biciclette con peso peso;
Step-3: consolo.log step-2;

<!-- SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. -->

Step-1: creo array con chiavi: nome squadra, punti fatti(0) e falli subiti(0);
Step-2: estrapolo dagli oggetti i punti fatti e falli subito ed assegno per entrambe le chiavi valori random;
Step-3: nuovo array (.map) con nome squadra e falli suiti, infine console.log di esso;