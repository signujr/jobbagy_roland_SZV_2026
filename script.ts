function osszesOszto(szam:number): number[] {
    const osztok:number[] = [];

    for(let i:number = 1; i <= szam; i++){
        if(szam % i === 0){
            osztok.push(i);
        }
    }

    return osztok;
}

function parosDarab(tomb:number[]): number{
    let darab = 0;

    for(var i:number = 0; i < tomb.length; i++){
        if(tomb[i] % 2 === 0){
            darab ++;
        }
    }

    return darab;
}

function fuggvenyhivasPalindrom(bemenet: () => string): boolean {
    let szoveg: string = bemenet();
    
    let szokozNelkuli: string = "";
    for(let i:number = 0; i < szoveg.length; i++){
        if(szoveg[i] !== ' ' ){
            szokozNelkuli = szokozNelkuli + szoveg[i];
        }
    }

    let palindromSzoveg: string = "";
    for(let i:number = szokozNelkuli.length - 1; i >= 0; i--){
        palindromSzoveg = palindromSzoveg + szokozNelkuli[i];
    }

    return szokozNelkuli == palindromSzoveg;
}