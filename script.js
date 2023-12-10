/* Výplňořez
Napište funkci, která ořízne nebo prodlouží řetězec.
Napište funkci fillcut, která jako svůj první parametr str očekává řetězec a jako druhý parametr len kladné celé číslo. 
Úkolem funkce je oříznout nebo prodloužit zadaný řetězec tak, aby měl délku přesně len.
Pokud je vstupní řetězec delší než len, tak funkce odřízne jeho konec a vrátí výsledek.
Pokud je vstupní řetězec kratší než len, tak jej doplní od začátku znakem tečky a vrátí výsledek.
Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí beze změny. */

const fillcut = (str,len) => {
    if (str.length > len) {
        return document.body.innerHTML += `<p> ${str.slice(0,len)}</p>`
    } else if (str.length<len) {
        return document.body.innerHTML += `<p>${str.padStart(len,".")}</p>`
    } 
    return document.body.innerHTML += `<p>${str}</p>`
}

fillcut("Lenka",3)
fillcut("Aj",5)
fillcut("Petr",8)
fillcut("Petr",3)
fillcut("Petr",4)
