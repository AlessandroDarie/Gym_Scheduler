# SetFree - Workout Command Center

SetFree è un'applicazione web progressiva (PWA) sviluppata per la gestione e il tracciamento degli allenamenti. È progettata per massimizzare l'efficienza d'uso durante le sessioni fisiche, operando in totale indipendenza dalla connettività di rete.

## Caratteristiche Principali

*   **Piena Autonomia Offline:** L'integrazione di un Service Worker dedicato assicura che l'applicazione e le relative risorse (incluse le immagini archiviate in cache) siano sempre accessibili, anche in totale assenza di rete dati o Wi-Fi.
*   **Privacy e Archiviazione Locale:** Il salvataggio di schede, sessioni e metriche avviene esclusivamente all'interno del dispositivo dell'utente tramite `localStorage`. Non vi è alcuno scambio di dati con server esterni o database in cloud.
*   **Interfaccia Funzionale:** La UI è strutturata per minimizzare le interazioni necessarie (attrito cognitivo e fisico) durante l'allenamento, prediligendo un design ad alto contrasto per una leggibilità ottimale in qualsiasi condizione di luce.
*   **Personalizzazione Dinamica:** Oltre al database predefinito, il sistema supporta l'inserimento di esercizi personalizzati e allegati multimediali (URL), gestiti e integrati nel flusso di tracking.

## Architettura e Tecnologie

Il sistema si basa su uno stack essenziale e privo di framework esterni, per garantire latenza minima e leggerezza strutturale:

*   **Frontend:** HTML5, CSS3 (implementato tramite CSS Variables per la gestione dei temi) e Vanilla JavaScript (ES6+).
*   **Infrastruttura PWA:** 
    *   `manifest.json` per la configurazione dell'installazione nativa su dispositivi mobili.
    *   `sw.js` (Service Worker) per l'intercettazione delle richieste di rete e il caching dinamico.
*   **Storage:** `Window.localStorage` API.

## Guida all'Installazione

1. Ospitare i file di progetto su un server web statico o in un ambiente di sviluppo locale.
2. Visitare `index.html` utilizzando un browser web aggiornato.
3. Selezionare l'opzione "Aggiungi a schermata Home" (o voce equivalente) dal menu del browser per installare l'applicativo come PWA.
4. Aprire l'applicazione installata mantenendo la connessione attiva per qualche istante, permettendo al Service Worker di registrare la cache iniziale.
5. L'applicazione è ora pronta per essere utilizzata offline.

## Alberatura del Progetto

*   `index.html`: Contiene la struttura del documento, i fogli di stile integrati e la logica applicativa principale (motore di tracking, gestione DOM).
*   `sw.js`: Gestisce il ciclo di vita del Service Worker e la logica di fallback/caching.
*   `manifest.json`: Definisce metadati, icone e comportamenti di visualizzazione dell'app.
*   `esercizi.json`: Modello dati preimpostato relativo alle categorie muscolari.
*   `icon.png` / `icon_browser.png`: Risorse grafiche principali.

## Licenza d'Uso

Copyright © 2026 Alessandro Darie. Tutti i diritti riservati.
Il presente software e il relativo codice sorgente sono di proprietà esclusiva dell'autore. È severamente vietata la copia, la riproduzione, la distribuzione e la modifica, totale o parziale, in qualsiasi forma senza preventiva e specifica autorizzazione scritta.