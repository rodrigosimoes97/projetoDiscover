function mudarModo(){
  
  const body = document.body
  body.classList.toggle('light')

  const img = document.getElementById('perfil')

  if(body.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute('src', './assets/avatar.png')
  }

}