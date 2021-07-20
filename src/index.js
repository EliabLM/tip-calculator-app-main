// Funcionalidad

// entradas
const facturaTotal = document.querySelector(".input-factura-total");
const porcentajePropina = document.querySelector(".input-porcentajes-propina");
const numeroPersonas = document.querySelector(".input-numero-personas");
const btns = document.querySelectorAll(".btn");

// salidas
const propinaPersona = document.querySelector(".tip-people");
const propinaTotal = document.querySelector(".tip-total");

// boton reset
const btnReset = document.querySelector(".btn-reset");

// advertencia
const advertencia = document.querySelector(".show-title");

// variables operaciones
let facturaInput = 0;
let propina = 0;
let propinaParcial = 0;
let porcentaje = 10;
let numPersonas = 0;

// Advertencia Numero de personas debe ser mayor a 0
numeroPersonas.addEventListener("input", (e) => {
	if (e.target.value <= "0" || e.target.value === "") {
		advertencia.classList.remove("no-mostrar");
	} else {
		advertencia.classList.add("no-mostrar");
	}
});

const calcularPropinas = (factura, porcentaje) => {
	const propinaFull = factura * (porcentaje / 100);
	// propinaParcial = calcularPropinaPersona(propina, numPersonas);
	return propinaFull;
};

const calcularPropinaPersona = (propina, personas) => {
	const propinaParcial = propina / personas;
	return propinaParcial;
};

// Capturar Factura

const capturarFactura = facturaTotal.addEventListener("input", (factura) => {
	console.log(factura.target.value);
	valorFactura = factura.target.value;
	return valorFactura;
});

// console.log(capturarFactura());

// Capturar boton
btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		// cambiar estilo css
		btnFormat = btn.textContent.replace(/[%]/g, ""); // eliminar el simbolo %
		if (btnFormat) {
			btn.classList.add("btn-focus");
		} else {
			btn.classList.remove("btn-focus");
		}

		valorFactura = capturarFactura();
		total = calcularPropinas(valorFactura, btnFormat);
		console.log(valorFactura);
		console.log(btnFormat);
		console.log(total);
	});
});

// Capturar porcentaje custom
porcentajePropina.addEventListener("input", (porcentajeCustom) => {
	// agregarPorcentaje(porcentajeCustom.target.value);
	// calcularPropinas();
	console.log(porcentajeCustom.target.value);
});

// Capturar numero de personas
numeroPersonas.addEventListener("input", (personas) => {
	// agregarNumeroPersonas(personas.target.value);
	console.log(personas.target.value);
});

const agregarFactura = (num) => {};
