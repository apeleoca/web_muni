function calcularDV() {
    const rutInput = document.getElementById("rutinput");
    const dvSpan = document.getElementById("dv");
    const rut = rutInput.value.replace(/[^0-9]/g, ""); // Eliminar caracteres no numéricos

    if (!rut) {
        dvSpan.textContent = ""; // Limpiar DV si no hay RUT
        return;
    }

    let suma = 0;
    let multiplicador = 2;

    // Calcular DV
    for (let i = rut.length - 1; i >= 0; i--) {
        suma += parseInt(rut[i]) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const resto = suma % 11;
    const dv = 11 - resto === 11 ? "0" : 11 - resto === 10 ? "K" : 11 - resto;

    // Mostrar el DV al lado del RUT
    dvSpan.textContent = dv;
}