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
