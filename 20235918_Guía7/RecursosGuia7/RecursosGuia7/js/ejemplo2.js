const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});
const bodyModal = document.getElementById("idBodyModal");


const validacionForm = () => {

    const nombreElemento = document.getElementById("IdNombre");
    const apellidoElemento = document.getElementById("IdApellidos");
    const fechaNacElemento = new Date(document.getElementById("idFechaNac").value);
    const correoElemento = document.getElementById("IdCorreo");
    const contrasenaElemento = document.getElementById("IdPassword");
    const contrasenaRepetirElemento = document.getElementById("IdPasswordRepetir"); 
    const intereses = [formulario["idCkProgramacion"].checked, formulario["idCkBD"].checked, formulario["idCkRedes"].checked, formulario["idCkSeguridad"].checked]
    const pais = formulario["idCmPais"].value;
    const carrera = formulario.querySelector(`input[name=idRdCarrera]:checked`);

    if (nombreElemento.value === "" && apellidoElemento.value === ""
        && fechaNacElemento.value === "" && correoElemento.value === "" 
        && contrasenaElemento.value === "" && contrasenaRepetirElemento.value === ""
        && carrera.value === "" && pais.value === "" && intereses.value === ""){
        alert("Faltan campos por completar");
        return false;
    }

    const fechaActual = new Date();
    if (fechaNacElemento.value >  fechaActual){
        alert("La fecha de nacimiento no puede ser mayor a la actual")
        return false;
    }

    const emailFormato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormato.test(correoElemento.value)){
        alert("Ingrese un formato correcto")
        return false;
    }

    if (contrasenaElemento.value != contrasenaRepetirElemento.value){
        alert("Las contraseñas no coinciden")
        return false;
    }

    if (carrera.value === ""){
        alert("Debe seleccionar una carrera")
        return false;
    }

    if (pais.value === ""){
        alert("Debe seleccionar un país")
        return false;
    }

    if (!intereses.some(i => i)) {
        alert("Debe seleccionar al menos un interés.");
        return false;
    }

    mostrarModal(nombreElemento, apellidoElemento, fechaNacElemento, correoElemento, pais, carrera, intereses)
    return true;
}

const mostrarModal = (nombreElemento, apellidoElemento, fechaNacElemento, correoElemento, pais) => {

    const carreraSeleccionada = formulario.querySelector('input[name="idRdCarrera"]:checked').nextElementSibling.innerText;

    const tabla = document.createElement("table");
    tabla.classList.add("table");
    tabla.innerHTML = `
        <thead>
            <tr><th>Campo</th><th>Información</th></tr>
        </thead>
        <tbody>
            <tr><td>Nombre</td><td>${nombreElemento}</td></tr>
            <tr><td>Apellidos</td><td>${apellidoElemento}</td></tr>
            <tr><td>Fecha de Nacimiento</td><td>${fechaNacElemento.toLocaleDateString()}</td></tr>
            <tr><td>Correo Electrónico</td><td>${correoElemento}</td></tr>
            <tr><td>Carrera</td><td>${carreraSeleccionada}</td></tr>
            <tr><td>País de Origen</td><td>${pais}</td></tr>
        </tbody>
    `;

    bodyModal.innerHTML = '';
    bodyModal.appendChild(tabla);
    modal.show();
};

button.onclick = () => {
    if (validacionForm()) {
    }
};

/*
const recorrerFormulario = function () {

    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;
  
    let elementos = formulario.elements;
    let totalElementos = elementos.length;

    for (let index = 0; index < totalElementos; index++) {
        
        let elemento = elementos[index];
        let tipoElemento = elemento.type;
        let tipoNode = elemento.nodeName;

        if (tipoElemento == "text" && tipoNode == "INPUT") {
            console.log(elemento);
            totText++;

        } else if (tipoElemento == "password" && tipoNode == "INPUT") {
            console.log(elemento);
            totPass++;

        } else if (tipoElemento == "email" && tipoNode == "INPUT") {
            console.log(elemento);
            totEmail++;

        } else if (tipoElemento == "radio" && tipoNode == "INPUT") {
            console.log(elemento);
            totRadio++;

        } else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
            console.log(elemento);
            totCheck++;

        } else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++;

        } else if (tipoElemento == "date" && tipoNode == "INPUT") {
            console.log(elemento);
            totDate++;
            
        } else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++;
        }
    }

    let resultado = `
    Total de input[type="text"] = ${totText}<br>
    Total de input[type="password"] = ${totPass}<br>
    Total de input[type="radio"] =${totRadio}<br>
    Total de input[type="checkbox"] = ${totCheck}<br>
    Total de input[type="date"] = ${totDate}<br>
    Total de input[type="email"] = ${totEmail}<br>
    Total de select = ${totSelect}<br>
    `;

    bodyModal.innerHTML = resultado;
    modal.show();

};

button.onclick = () => {
    recorrerFormulario();
};
*/