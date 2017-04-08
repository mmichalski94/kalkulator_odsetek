'use strict'
function oblicz(event) {
    event.preventDefault();
    //zmienne z watrościami pól formularza

    var wplata = parseInt(document.getElementById('wplata').value);

    var iloscLat = parseInt(document.getElementById('ilosc-lat').value);

    var okresKapitalizaji = parseInt(document.getElementById('okres-kapitalizacji').value);

    var oprocentowanie = parseInt(document.getElementById('oprocentowanie').value) / 100;

    var podatek = document.getElementById('podatek').checked;
    
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizaji, oprocentowanie, podatek);
    document.getElementById('wynik').innerHTML = wynik;
    
    /*console.log(wplata);
    console.log(iloscLat);
    console.log(okresKapitalizaji);
    console.log(oprocentowanie);
    console.log(podatek);*/
    
    
    }
function obliczZysk(wplata, iloscLat, okresKapitalizaji, oprocentowanie, podatek) {    
    if (podatek == true) {
        //console.log(podatek);
        var oprocentowanieOpodatkowane = oprocentowanie - (oprocentowanie * 0.19);
    } else {
        var oprocentowanieOpodatkowane = oprocentowanie;
    }
    var kapital = wplata * Math.pow(1 + (oprocentowanieOpodatkowane/okresKapitalizaji), iloscLat*okresKapitalizaji );
    return kapital.toFixed(2); // zaokrąglamy wynik do 2 miejsca po przecinku
    // dzielenie / zwraca liczbę zmiennoprzecinkową? po co jest modulo?
    
}