const formulario = document.querySelector('#form'); // Traemos el ID de formulario
const inputs = document.querySelectorAll('#form input'); //  Seleccionamos todos los input que se encuentran dentro de la etiqueta form con su ID
// EXPRESIONES REGULARES //

const expresiones = {               
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}


//CUANDO LOS CAMPOS ESTEN VACIOS MOSTRAR FALSE//

const campos = {
  name: false,
  email: false,
}

const errores = {
  name: 'Ingrese un nombre válido',
  email: 'Ingrese un correo válido',
}

console.log(campos)
// VALIDACION EN CADA UNO DE LOS CAMPOS //

const validarFormulario = (e) => {
 switch (e.target.name) {
   case "name":
    validarCampo(expresiones.name, e.target, 'name')
   break;

   case "email":
    validarCampo(expresiones.email, e.target, 'email')

   break;

 }

}


 // FUNCION PARA VALIDAR LOS CAMPOS //

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .error`).innerHTML = "";
	  campos[campo]= true;
  } else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .error`).innerHTML = errores[campo];
    campos[campo]= false;
  }
}



// EVENTO AL LEVANTAR LA TECLA //




// EVENTO EN EL BOTON SUBMIT //

formulario.addEventListener('submit', (e) => {
  e.preventDefault()
  const elements = e.target.elements;
  let error = false;

  for (let i = 0; i < elements.length -3; i++) {
  if (elements[i].value === ""){
    error = true
    document.getElementById("grupo__" + elements[i].name).classList.add('formulario__grupo-incorrecto')
    
  }
  
}

  const terminos = document.getElementById('notificaciones');

  if(!terminos.checked){
    document.querySelector('.input-checkbox .error').innerHTML = 'Debe aceptar los términos y condiciones.'
    document.querySelector('.input-checkbox .error').style.backgroundColor = "yellow"
    document.querySelector('.input-form-name .error').innerHTML = 'Debe ingresar un nombre valido.'
    document.querySelector('.input-form-name .error').style.backgroundColor = "yellow"
    document.querySelector('.input-form-email .error').innerHTML = 'Debe ingresar un correo valido.'
    document.querySelector('.input-form-email .error').style.backgroundColor = "yellow"
  } else if (terminos.checked){
    formulario.submit();     
  }         
})

