let staropen = false
const numbers = window.document.querySelectorAll('p.bolinha.numero')
const teste = window.document.querySelector('div.teste')
let nota
const resultado = window.document.querySelector('.result')
const button = window.document.querySelector(".bttsub")
const introdiv = window.document.querySelector('#intro')
const enddiv = window.document.querySelector("#end")



numbers.forEach((button) =>{
  button.addEventListener('click', () =>{
    nota = button.getAttribute('data-text')
    staropen = true
    resultado.textContent = nota  
    
    numbers.forEach((num) => {
      num.style.background = 'var(--bolinha)'
    });


    button.style.background = 'var(--principalcor';
    }); button.addEventListener('mouseenter', () => {
    if(button.style.background !== 'var(--principalcor)'){
      button.style.background = 'var(--bolinhaclara)'
    } 
  }); button.addEventListener('mouseleave', () =>{
    if(button.style.background !== 'var(--principalcor)'){
      button.style.background = 'var(--bolinha)'
    }
  })

  })







button.addEventListener('click', () => {
  if (staropen == true) {
    introdiv.style.display = "none";
    enddiv.style.display = "block";
  }
})