const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const clave = document.getElementById("clave");
const clave2 = document.getElementById("confirmarClave");

form.addEventListener("submit", e =>{
  e.preventDefault();
  validarEntradas();});

function validarEntradas() {

  const nombreValor = nombre.value.trim();
  const telefonoValor = telefono.value.trim();
  const correoValor = correo.value.trim();
  const claveValor = clave.value.trim();
  const clave2Valor = clave2.value.trim();

  if (nombreValor ===""){
    setErrorInput(nombre, "El campo nombre no puede estar vacio.");
  } else {
    setSuccessInput(nombre);
  }
  /////////////////////////////////////////////

  if (telefonoValor ===""){
    setErrorInput(telefono, "El campo nombre no puede estar vacio.");
  } else {
    setSuccessInput(telefono);
  }

  /////////////////////////////////////////////
  if (correoValor===""){
    setErrorInput(correo, "El campo correo no puede estar vacio.");
  }else {
    validarCorreo(correoValor) && setSuccessInput(correo);
  }
  ////////////////////////////////////////////////
  if (claveValor===""){
    setErrorInput(clave, "El campo clave no puede estar vacio.");
  }else {
    setSuccessInput (clave) && validarClave(claveValor);
  }
  ///////////////////////////////////////////////
  if (clave2Valor=== ""){
    setErrorInput(clave2, "El campo confirmar clave no puede estar vacio");
  }else if (clave2Valor !== claveValor){
    setErrorInput(clave2, "La claves ingresadas no coinciden.");
  }else {
    setSuccessInput(clave2);
  }
}

function setErrorInput(input, errorMessage){
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText= errorMessage;
  formControl.className = "form_control error";
}

function setSuccessInput(input) {
  const formControl = input.parentElement;
  formControl.className = "form_control success";
}

function validarCorreo(correo) {
  let regular_expressions = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  return regular_expressions.test(String(correo).toLocaleLowerCase());
}

function validarClave(clave) {
  let regular_expressions = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
  return regular_expressions.match(regular_expressions);
}