"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var inputNumero = document.getElementById("inputNumero");
    var dieci = document.getElementById("dieci");
    var venti = document.getElementById("venti");
    var cinquanta = document.getElementById("cinquanta");
    var cento = document.getElementById("cento");
    var chiamate = document.getElementById("chiamate");
    var chiama = document.getElementById("chiama");
    var azzeraChiamata = document.getElementById("azzeraChiam");
    var numeroChiama = document.getElementById("numeroChiama");
    var errore = document.getElementById("errore");
    var credito = document.getElementById("credito");
    var utente = document.getElementById("utente");
    var erroreChiamate = document.getElementById("erroreChiamate");
    var controllaNumero = document.getElementById("controllaNumero");
    class User {
        constructor(_numeroUtente, _nomeUtente, _credito, _numeroChiamate) {
            this.numeroUtente = _numeroUtente;
            this.nomeUtente = _nomeUtente;
            this.credito = _credito;
            this.numeroChiamate = _numeroChiamate;
        }
        ricarica(unaRicarica) {
            this.credito = this.credito + unaRicarica;
        }
        chiamata(durataMinuti) {
            let creditoSpeso = durataMinuti * 0.20;
            if (this.credito > 0.20) {
                this.numeroChiamate++;
                this.credito = this.credito - creditoSpeso;
            }
        }
        numero404() {
            return this.credito;
        }
        getNumeroChiamate() {
            return this.numeroChiamate;
        }
        azzeraChiamate() {
            return this.numeroChiamate = this.numeroChiamate - this.numeroChiamate;
        }
    }
    var primoUtente = new User(3500484901, "Gaetano", 0, 0);
    // console.log("-----PRIMO UTENTE-----")
    // primoUtente.ricarica(10);
    // primoUtente.chiamata(5);
    // primoUtente.ricarica(20);
    // primoUtente.chiamata(10);
    // console.log("Credito Residuo: ", Math.floor(primoUtente.numero404() * 100) / 100);
    // console.log("Chiamate effettuate: ", primoUtente.getNumeroChiamate());
    // console.log("Chiamate azzerate: ", primoUtente.azzeraChiamate());
    var secondoUtente = new User(3500484902, "Marco", 0, 0);
    // console.log("-----SECONDO UTENTE-----")
    // secondoUtente.ricarica(5);
    // secondoUtente.chiamata(18);
    // secondoUtente.ricarica(10);
    // secondoUtente.chiamata(5);
    // secondoUtente.chiamata(2);
    // console.log("Credito Residuo: ", Math.floor(secondoUtente.numero404() * 100) / 100);
    // console.log("Chiamate effettuate: ", secondoUtente.getNumeroChiamate());
    // console.log("Chiamate azzerate: ", secondoUtente.azzeraChiamate());
    var terzoUtente = new User(3500484903, "Luca", 0, 0);
    // console.log("-----TERZO UTENTE-----")
    // terzoUtente.ricarica(5);
    // terzoUtente.chiamata(18);
    // terzoUtente.ricarica(5);
    // terzoUtente.chiamata(10);
    // terzoUtente.chiamata(8);
    // console.log("Credito Residuo: ", Math.floor(terzoUtente.numero404() * 100) / 100);
    // console.log("Chiamate effettuate: ", terzoUtente.getNumeroChiamate());
    // console.log("Chiamate azzerate: ", terzoUtente.azzeraChiamate());
    controllaNumero.addEventListener('click', function () {
        if (inputNumero.value == primoUtente.numeroUtente) {
            errore.style.display = "none";
            utente.innerHTML = `informazioni utente ${primoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${primoUtente.numero404()}`;
            chiamate.innerHTML = `Chiamate effettuate = ${primoUtente.getNumeroChiamate()}`;
        }
        else if (inputNumero.value == secondoUtente.numeroUtente) {
            errore.style.display = "none";
            utente.innerHTML = `informazioni utente ${secondoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${secondoUtente.numero404()}`;
            chiamate.innerHTML = `Chiamate effettuate = ${secondoUtente.getNumeroChiamate()}`;
        }
        else if (inputNumero.value == terzoUtente.numeroUtente) {
            errore.style.display = "none";
            utente.innerHTML = `informazioni utente ${terzoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${terzoUtente.numero404()}`;
            chiamate.innerHTML = `Chiamate effettuate = ${terzoUtente.getNumeroChiamate()}`;
        }
        else {
            errore.style.display = "block";
            errore.innerHTML = "Seleziona un numero!";
        }
    });
    dieci.addEventListener('click', function () {
        if (inputNumero.value == primoUtente.numeroUtente) {
            primoUtente.ricarica(10);
            utente.innerHTML = `informazioni utente ${primoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${primoUtente.numero404()}`;
            console.log("Credito Residuo: ", Math.floor(primoUtente.numero404() * 100) / 100);
            errore.style.display = "none";
        }
        else if (inputNumero.value == secondoUtente.numeroUtente) {
            secondoUtente.ricarica(10);
            utente.innerHTML = `informazioni utente ${secondoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${secondoUtente.numero404()}`;
            console.log("Credito Residuo: ", Math.floor(secondoUtente.numero404() * 100) / 100);
            errore.style.display = "none";
        }
        else if (inputNumero.value == terzoUtente.numeroUtente) {
            terzoUtente.ricarica(10);
            utente.innerHTML = `informazioni utente ${terzoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${terzoUtente.numero404()}`;
            console.log("Credito Residuo: ", Math.floor(terzoUtente.numero404() * 100) / 100);
            errore.style.display = "none";
        }
        else {
            errore.style.display = "block";
            errore.innerHTML = "Seleziona un numero!";
        }
    });
    venti.addEventListener('click', function () {
        if (inputNumero.value == primoUtente.numeroUtente) {
            primoUtente.ricarica(20);
            utente.innerHTML = `informazioni utente ${primoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${primoUtente.numero404()}`;
            console.log("Credito Residuo: ", Math.floor(primoUtente.numero404() * 100) / 100);
            errore.style.display = "none";
        }
        else if (inputNumero.value == secondoUtente.numeroUtente) {
            secondoUtente.ricarica(20);
            utente.innerHTML = `informazioni utente ${secondoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${secondoUtente.numero404()}`;
            console.log("Credito Residuo: ", Math.floor(secondoUtente.numero404() * 100) / 100);
            errore.style.display = "none";
        }
        else if (inputNumero.value == terzoUtente.numeroUtente) {
            terzoUtente.ricarica(20);
            utente.innerHTML = `informazioni utente ${terzoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${terzoUtente.numero404()}`;
            console.log("Credito Residuo: ", Math.floor(terzoUtente.numero404() * 100) / 100);
            errore.style.display = "none";
        }
        else {
            errore.style.display = "block";
            errore.innerHTML = "Seleziona un numero!";
        }
    });
    cinquanta.addEventListener('click', function () {
        if (inputNumero.value == primoUtente.numeroUtente) {
            primoUtente.ricarica(50);
            utente.innerHTML = `informazioni utente ${primoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${primoUtente.numero404()}`;
            console.log("Credito Residuo: ", Math.floor(primoUtente.numero404() * 100) / 100);
            errore.style.display = "none";
        }
        else if (inputNumero.value == secondoUtente.numeroUtente) {
            secondoUtente.ricarica(50);
            utente.innerHTML = `informazioni utente ${secondoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${secondoUtente.numero404()}`;
            console.log("Credito Residuo: ", Math.floor(secondoUtente.numero404() * 100) / 100);
            errore.style.display = "none";
        }
        else if (inputNumero.value == terzoUtente.numeroUtente) {
            terzoUtente.ricarica(50);
            utente.innerHTML = `informazioni utente ${terzoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${terzoUtente.numero404()}`;
            console.log("Credito Residuo: ", Math.floor(terzoUtente.numero404() * 100) / 100);
            errore.style.display = "none";
        }
        else {
            errore.style.display = "block";
            errore.innerHTML = "Seleziona un numero!";
        }
    });
    cento.addEventListener('click', function () {
        if (inputNumero.value == primoUtente.numeroUtente) {
            primoUtente.ricarica(100);
            utente.innerHTML = `informazioni utente ${primoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${primoUtente.numero404()}`;
            console.log("Credito Residuo: ", Math.floor(primoUtente.numero404() * 100) / 100);
            errore.style.display = "none";
        }
        else if (inputNumero.value == secondoUtente.numeroUtente) {
            secondoUtente.ricarica(100);
            utente.innerHTML = `informazioni utente ${secondoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${secondoUtente.numero404()}`;
            console.log("Credito Residuo: ", Math.floor(secondoUtente.numero404() * 100) / 100);
            errore.style.display = "none";
        }
        else if (inputNumero.value == terzoUtente.numeroUtente) {
            terzoUtente.ricarica(100);
            utente.innerHTML = `informazioni utente ${terzoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${terzoUtente.numero404()}`;
            console.log("Credito Residuo: ", Math.floor(terzoUtente.numero404() * 100) / 100);
            errore.style.display = "none";
        }
        else {
            errore.style.display = "block";
            errore.innerHTML = "Seleziona un numero!";
        }
    });
    chiama.addEventListener('click', function () {
        let durataChiamata = Math.floor(Math.random() * 11);
        if (numeroChiama.value != "" && inputNumero.value == primoUtente.numeroUtente && primoUtente.credito > 0.20) {
            primoUtente.chiamata(durataChiamata);
            alert(`la chiamata è durata ${durataChiamata} minuti`);
            utente.innerHTML = `informazioni utente ${primoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${primoUtente.numero404()}`;
            chiamate.innerHTML = `Chiamate effettuate = ${primoUtente.getNumeroChiamate()}`;
            erroreChiamate.style.display = "none";
        }
        else if (numeroChiama.value != "" && inputNumero.value == secondoUtente.numeroUtente && secondoUtente.credito > 0.20) {
            secondoUtente.chiamata(durataChiamata);
            alert(`la chiamata è durata ${durataChiamata} minuti`);
            utente.innerHTML = `informazioni utente ${secondoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${secondoUtente.numero404()}`;
            chiamate.innerHTML = `Chiamate effettuate = ${secondoUtente.getNumeroChiamate()}`;
            erroreChiamate.style.display = "none";
        }
        else if (numeroChiama.value != "" && inputNumero.value == terzoUtente.numeroUtente && terzoUtente.credito > 0.20) {
            terzoUtente.chiamata(durataChiamata);
            alert(`la chiamata è durata ${durataChiamata} minuti`);
            utente.innerHTML = `informazioni utente ${terzoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${terzoUtente.numero404()}`;
            chiamate.innerHTML = `Chiamate effettuate = ${terzoUtente.getNumeroChiamate()}`;
            erroreChiamate.style.display = "none";
        }
    });
    azzeraChiamata.addEventListener('click', function () {
        if (inputNumero.value == primoUtente.numeroUtente && primoUtente.numeroChiamate > 0) {
            erroreChiamate.style.display = "none";
            primoUtente.azzeraChiamate();
            utente.innerHTML = `informazioni utente ${primoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${primoUtente.numero404()}`;
            chiamate.innerHTML = `Chiamate effettuate = ${primoUtente.getNumeroChiamate()}`;
            alert(`Chiamate azzerate!`);
        }
        else if (inputNumero.value == secondoUtente.numeroUtente && secondoUtente.numeroChiamate > 0) {
            erroreChiamate.style.display = "none";
            secondoUtente.azzeraChiamate();
            utente.innerHTML = `informazioni utente ${secondoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${secondoUtente.numero404()}`;
            chiamate.innerHTML = `Chiamate effettuate = ${secondoUtente.getNumeroChiamate()}`;
            alert(`Chiamate azzerate!`);
        }
        else if (inputNumero.value == terzoUtente.numeroUtente && terzoUtente.numeroChiamate > 0) {
            erroreChiamate.style.display = "none";
            terzoUtente.azzeraChiamate();
            utente.innerHTML = `informazioni utente ${terzoUtente.nomeUtente}`;
            credito.innerHTML = `Credito residuo = &euro; ${terzoUtente.numero404()}`;
            chiamate.innerHTML = `Chiamate effettuate = ${terzoUtente.getNumeroChiamate()}`;
            alert(`Chiamate azzerate!`);
        }
        else {
            erroreChiamate.style.display = "block";
            erroreChiamate.innerHTML = "Chiamate già azzerate o campi errati!";
        }
    });
});
