// script.js

console.log("Agenda web");
const contactes = ["Roser","Saida","Ruben"];
const llista = document.createElement('ul');
contactes.forEach(nom=>{
	const li = document.createElement('li');
	li.textContent = nom;
	llista.appendChild(li);
});
document.body.appendChild(llista);

document.querySelector("form").addEventListener("submit", e=>{
 e.preventDefault();
const input = document.querySelector("#nom");
if (input.value.trim() === "") {
alert ("El camp no pot estar buit");
}
//Lògica per afegir el contacte...
});
