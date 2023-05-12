//---------------------- Interatividade -----------------------

function verificar(){
  var data = new Date()
  var ano_atual = data.getFullYear()
  var ano_usuario = window.document.getElementById('ano')
  var resultado = window.document.querySelector('#detector') 
  
  if(ano_usuario.value.length == 0 || ano_usuario.value.length < 4 || ano_usuario.value > ano_atual){
     window.alert("[ERROR] Verifique os dados e tente novamente!")
  }
  else{
    var fsex = document.getElementsByName('sexo')
    var idade = ano_atual - Number(ano_usuario.value)
    resultado.innerHTML = `Idade calculada: ${idade}`
    var genero = ' '
    var img = document.createElement('img') //criação de tag img
    img.setAttribute('id', 'foto') //criação do id na tag img

    img.style.width = "210px"
    img.style.height = "200px"
    img.style.borderRadius = "50%"
    img.style.position = "relative"
    img.style.left = "30%"
    img.style.marginTop = "10px"

    if(fsex[0].checked){
       genero = "Homem"

       if(idade >= 0 && idade < 10){
        //criança
          img.setAttribute('src', 'img/bbm.jpg')
       }else if(idade > 10 && idade < 21){
        //jovem
        img.setAttribute('src', 'img/jm.jpg')
       }else if(idade > 21 && idade < 50){
        //adulto
        img.setAttribute('src', 'img/am.webp')
       }else{
        //idoso
        img.setAttribute('src', 'img/im.jpg')
       }
    }else{
      genero = "Mulher"

      if(idade >= 0 && idade < 10){
        //criança
          img.setAttribute('src', 'img/bbf.jpg')
       }else if(idade > 10 && idade < 21){
        //jovem
        img.setAttribute('src', 'img/jf.jpg')
       }else if(idade > 21 && idade < 50){
        //adulto
        img.setAttribute('src', 'img/Af.jpg')
       }else{
        //idoso
        img.setAttribute('src', 'img/if.jpg')
       }
    }
     
    resultado.style.textAlign = "center"
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    resultado.appendChild(img)
    
  }
}