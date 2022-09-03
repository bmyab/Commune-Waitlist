const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit' , e=>{
  e.preventDefault()

  const email = formulario['email'].value;
  // console.log(email)

  if(email === ''){
    addError('email' , 'Campo Obligatorio');
  }else if (!isValid(email)){
    addError('email' , 'Ingrese un correo valido');
  }else{
    removeError('email');
  }
})

function addError(campo , mensaje){
  const campoControl = formulario[campo];
  campoControl.classList.add('error')
  campoControl.classList.remove('succes')

  const span = formulario[campo].parentNode.querySelector('span');
  span.textContent = mensaje;
  span.style.opacity = '1';

}
function removeError(campo){
  const campoControl = formulario[campo];
  campoControl.classList.remove('error')
  campoControl.classList.add('success')

  const span = formulario[campo].parentNode.querySelector('span');
  span.style.opacity = '0';
}


function isValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
