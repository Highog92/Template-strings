/* Opgave 1*/

// din kode her
const navn = "Mads";
const ansat = "3";
const besked = `<h2>Hej ${navn}</h2> Du har arbejdet i vores virksomhed i ${ansat} år.`;

console.log(besked);

let message = document.getElementById("message");
message.innerHTML = besked;

/* Opgave 2*/

let produktListe = document.getElementById("produktListe")



const myProducts = [
  {navn: "T-shirt", beskrivelse: "En t-shirt lavet af bomuld", pris: 99},
  
  {navn: "Jeans", beskrivelse: "Blå denim jeans med straight fit", pris: 299},
  
  {navn: "Hættetrøje", beskrivelse: "En grå hættetrøje med lynlås", pris: 199,},
];



const product =  `<article class="produkt">
                    <h2>${produkt.navn}</h2>
                    <p>${produkt.beskrivelse}</p>
                    <p>Pris: ${produkt.pris} kr.</p>
                </article>`;
console.log(product);

myProducts.innerHTML = product;








/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];

// find form elementer
const myForm = document.getElementById("formular");
const submitButton = document.getElementById("indsend-knap");
const personList = document.getElementById("person-liste");
