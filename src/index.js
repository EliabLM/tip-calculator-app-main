// Funcionalidad

const facturaTotal = document.querySelector(".input-factura-total");
const porcentajePropina = document.querySelector(".input-porcentajes-propina");
const numeroPersonas = document.querySelector(".input-numero-personas");
const btns = document.querySelectorAll(".btn");
const btnReset = document.querySelector(".btn-reset");

const propinaPersona = document.querySelector(".tip-people");
const propinaTotal = document.querySelector(".tip-total");

const advertencia = document.querySelector(".show-title");

// Mostrar signos de porcentajes y dolar
// window.addEventListener("DOMContentLoaded", () => {
// 	mostrarSignos();
// });

// const mostrarSignos = () => {
// 	btns.forEach((btn) => {
// 		btn.textContent = `${btn.textContent}%`;
// 	});
// 	propinaPersona.textContent = `$${propinaPersona.textContent}`;
// 	propinaTotal.textContent = `$${propinaTotal.textContent}`;
// };

// Advertencia Numero de personas
numeroPersonas.addEventListener("input", (e) => {
	if (e.target.value <= "0" || e.target.value === "") {
		advertencia.classList.remove("no-mostrar");
	} else {
		advertencia.classList.add("no-mostrar");
	}
});

const realizarOperacion = () => {};

// Factura total
facturaTotal.addEventListener("input", (e) => {
	console.log(e.target.value);
	console.log((propinaPersona.textContent = `$${e.target.value}`));
});

// Porcentaje custom
porcentajePropina.addEventListener("input", (e) => {
	console.log(e.target.value);
});

// Filtrar Botones
const filtrarBtns = () => {
	btns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			console.log(e.target.textContent);
			e.target.style.background = `hsl(172, 67%, 45%)`;
			e.target.style.color = `hsl(183, 100%, 15%)`;
			// hace falta quitar el resto de botones
		});
	});
};

filtrarBtns();
