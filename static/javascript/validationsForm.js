const formulario = document.querySelector('#form');
const inputs = document.querySelectorAll('#form input');

formulario.addEventListener("submit", onClick)

function onClick(e) {
  e.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('6LeXbrIgAAAAAEv6HXO2F46atp5-3HiAGjmd9zTg', {action: 'submit'}).then(function(token) {
      
      const expresiones = {               
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      }
      
      const campos = {
        name:false,
        email: false,
      }
      
      const errores = {
        name: 'Ingrese un nombre valido',
        email: 'Debe ingresar un correo válido',
      }
      
      const validarFormulario = (e) => {
       switch (e.target.name) {
         case "nombre":
          validarCampo(expresiones.nombre, e.target, 'name')
         break;
      
         case "email":
          validarCampo(expresiones.correo, e.target, 'email')
         break;
       }
      }
      
      const validarCampo = (expresion, input, campo) => {
        if(expresion.test(input.value)){
          document.querySelector(`.input-form-${campo} .error`).innerHTML = "";
          campos[campo]= true;
        } else {
          document.querySelector(`.input-form-${campo} .error`).innerHTML = errores[campo];
          document.querySelector(`.input-form-${campo} .error`).style.color = "orange";
          campos[campo]= false;
        }
      }
      
      inputs.forEach((input)=>{
        input.addEventListener('keyup', validarFormulario)
        input.addEventListener('blur', validarFormulario)
      })
      
        const elements = e.target.elements;
        let error = false;
      
        for (let i = 0; i < elements.length -3; i++) {
        if (elements[i].value === ""){
          error = true
        }
      }
      const terminos = document.getElementById('notificaciones');
      if(!terminos.checked && campos.email == "" && campos.name == ""){
        document.querySelector('.input-checkbox .error').innerHTML = 'Debe aceptar los términos y condiciones.'
        document.querySelector('.input-checkbox .error').style.color = "orange"
        document.querySelector('.input-form-name .error').innerHTML = 'Debe ingresar un nombre.'
        document.querySelector('.input-form-name .error').style.color = "orange"
        document.querySelector('.input-form-email .error').innerHTML = 'Debe ingresar un correo.'
        document.querySelector('.input-form-email .error').style.color = "orange"
      } else if (terminos.checked){
        formulario.submit();
      }         
  });
});
}



    