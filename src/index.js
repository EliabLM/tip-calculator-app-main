// Entradas
const facturaInput = document.querySelector(".input-factura-total");
const porcentajePropina = document.querySelector(".input-porcentajes-propina");
const numeroPersonas = document.querySelector(".input-numero-personas");
const btns = document.querySelectorAll(".btn");

// Salidas
const propinaPersona = document.querySelector(".tip-people");
const propinaTotal = document.querySelector(".tip-total");

// Boton reset
const btnReset = document.querySelector(".btn-reset");

// Advertencia
const advertencia = document.querySelector(".show-title");

// Advertencia numero de personas debe ser mayor a 0
numeroPersonas.addEventListener("input", (e) => {
	if (e.target.value <= "0" || e.target.value === "") {
		advertencia.classList.remove("no-mostrar");
	} else {
		advertencia.classList.add("no-mostrar");
	}
});

// Capturar Factura
facturaInput.addEventListener("input", calcularPropina);

// Capturar boton
btns.forEach((btn) => {
	btn.addEventListener("click", filtrarBotones);
});

// Capturar porcentaje custom
porcentajePropina.addEventListener("input", calcularPropina);

// Capturar numero de personas
numeroPersonas.addEventListener("input", calcularPropina);

// Capturar boton resetear
btnReset.addEventListener("click", resetear);

// Filtrar botones
function filtrarBotones(e) {
	btns.forEach((btn) => {
		btn.classList.remove("btn-focus");
		if (e.target.innerHTML == btn.innerHTML) {
			btn.classList.add("btn-focus");
			btnFormat = btn.innerHTML.replace(/[%]/g, "");
			valorPorcentaje = btnFormat / 100;
		}
	});

	porcentajePropina.value = "";
	calcularPropina();
}

// Resetear display
function resetear() {
	facturaInput.value = "";
	porcentajePropina.value = "";
	numeroPersonas.value = "";
	propinaPersona.innerHTML = "$0.00";
	propinaTotal.innerHTML = "$0.00";
	btns.forEach((element) => {
		element.classList.remove("btn-focus");
	});
}

// Calcular propina
function calcularPropina() {
	let factura = Number(facturaInput.value);
	let tipPorcentajeCustom = porcentajePropina.value;
	let numDePersonas = numeroPersonas.value;

	if (numDePersonas > 0) {
		if (tipPorcentajeCustom == 0) {
			calculos();
		} else {
			valorPorcentaje = Number(tipPorcentajeCustom / 100);
			calculos();
		}
	}

	function calculos() {
		let valorPropina = factura * valorPorcentaje;
		let tipAmountPerson = (valorPropina / numDePersonas).toFixed(2);
		let facturaTotal = factura + valorPropina;
		let totalPerson = (facturaTotal / numDePersonas).toFixed(2);
		propinaPersona.textContent = `$${tipAmountPerson}`;
		propinaTotal.textContent = `$${totalPerson}`;
	}
}
