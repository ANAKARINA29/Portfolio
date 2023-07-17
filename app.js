const nome = document.getElementById ("name")
const email = document.getElementById ("email")
const message = document.getElementById ("message")
const form = document.getElementById("form")


form.addEventListener("submit", e=>{
  e.preventDefault()
  if(nome.value.length <6){
    alert("Preencher campo com nome completo")
  }
})

