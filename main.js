// Scrivi un programma che stampi in console i numeri da 1 a 100 all’avvio della pagina.
// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell’indice per i multipli di 3,
//  per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
// Come creare nuovi elementi html e appenderli al container?

// - Bisogna creare un ciclo con delle condizioni


for (let i = 1; i <=100; i++) {

    let numerino = ""

    if (i % 3 == 0 && i % 5 == 0) {
        text= "fizzbuzz"
        color = "bg-danger"
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        text= "buzz"
        color = "bg-warning"
        console.log("Fizz")
    } else if (i % 5 == 0) {
        text= "buzz"
        color = "bg-success"
        console.log("Buzz")
    } else {
        console.log(i)
    }

    numerino = document.getElementById("numerino").innerHTML
}