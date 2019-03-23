# Star Diet Guide

### Ommioddiohoscazzatotuttoedevoreinstallare

* Ti posizioni con il terminale nella cartella in cui vuoi copiare il repo
* `git pull https://github.com/pastacolsugo/star-diet`
* Ti sposti nella cartella `server`
* `npm install`
* __Vedi:__ Aggiornare la porta seriale di Arduino
* __Vedi:__ Accendi il server 

### Pull dell'ultima versione

* Apri `cmder`
* Naviga fino alla cartella `star-diet`
* Esegui il comando `git pull` (devi avere connessione internet!)

### Aggiornare la porta seriale di Arduino

* Controlla, tramite Arduino IDE, il nome della porta seriale a cui e' collegata la scheda
* Apri il file `app.js` (si trova nella cartella `server`)
* All'inizio del file `app.js` troverai tre variabili `SERIALPORTNAME`, due delle quali commentate
* Scegli quella giusta per l'applicazione desiderata e aggiorna il valore
* Commenta tutte tranne quella che vuoi usare
* Salva il file

### Accendi il server

* Con il terminale posizionati nella cartella `server`
* Esegui il comando

```bash
npm start
```

Se vuoi accendere il server per provare l'interfaccia, ma senza aver collegato un Arduino, puoi eseguire il comando:

```bash
npm start noserial
```

In questa modalita' il programma estrae a caso la massa della persona, poi viene comunque convertita secondo i valori di `g`.

### Fermare il server

Permi `ctrl + c` nella finestra del terminale.

### Uso del programma

* Apri un browser (preferibilmente Chrome)
* Collegati all'indirizzo `localhost:3000/star-diet`
* Quando premi la barra del titolo (quella azzurra), vengono aggiornati automaticamente i valori in tutti i pianeti
	* Se il server e' attivato in modalita' `noserial` il valore della massa registrato dalla bilancia e' estratto a caso e la conversione e' eseguita comunque.

### Aggiorna i valori dalla bilancia

Premi la barra del titolo (quella azzurra in alto!).

### Far Funzionare anche su mobile

Il problema e' che nella pagina web e' contenuto l'URL a cui fare la richiesta per ottenere il peso.

Nella versiona standard l'URL e' `localhost`, ovvero la macchina su cui esegue il codice.

Se il codice viene eseguito su uno smartphone, `localhost` e' lo smartphone, che non ha il server.

* Aprire il file `butter.html`, intorno alla riga `353` ci sono due variabili `SERVER_ADDRESS`.
* Commenta la prima e metti nella seconda l'indirizzo ip del computer con il server.
	* Per trovare l'ip del computer con il server aprire il terminale e usare il comando `ifconfig` o `ipconfig`
* Salva il file
