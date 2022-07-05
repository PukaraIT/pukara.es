const formulario = document.querySelector('#form'); 
const inputs = document.querySelectorAll('#form input'); 

formulario.addEventListener('submit', (e) => {
  e.preventDefault()
  const elements = e.target.elements;
  let error = false;

  for (let i = 0; i < elements.length -3; i++) {
  if (elements[i].value === ""){
    error = true   
  }
}

  const terminos = document.getElementById('notificaciones');

  if(!terminos.checked){
    document.querySelector('.input-checkbox .error').innerHTML = 'Debe aceptar los términos y condiciones.'
    document.querySelector('.input-checkbox .error').style.backgroundColor = "yellow"
    document.querySelector('.input-form-name .error').innerHTML = 'Debe ingresar un nombre.'
    document.querySelector('.input-form-name .error').style.backgroundColor = "yellow"
    document.querySelector('.input-form-email .error').innerHTML = 'Debe ingresar un correo valido.'
    document.querySelector('.input-form-email .error').style.backgroundColor = "yellow"
  } else if (terminos.checked){
    formulario.submit();     
  }         
})