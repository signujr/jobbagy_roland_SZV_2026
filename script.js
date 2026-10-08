"use strict";
function osszesOszto(szam) {
    const osztok = [];
    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(tomb) {
    let darab = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0) {
            darab++;
        }
    }
    return darab;
}
function fuggvenyhivasPalindrom(bemenet) {
    let szoveg = bemenet();
    let szokozNelkuli = "";
    for (let i = 0; i < szoveg.length; i++) {
        if (szoveg[i] !== ' ') {
            szokozNelkuli = szokozNelkuli + szoveg[i];
        }
    }
    let palindromSzoveg = "";
    for (let i = szokozNelkuli.length - 1; i >= 0; i--) {
        palindromSzoveg = palindromSzoveg + szokozNelkuli[i];
    }
    return szokozNelkuli == palindromSzoveg;
}
