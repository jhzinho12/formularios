const nomeInput = document.querySelector('#fnome')
const sobrenomeInput = document.querySelector('#fsobrenome')
const emailInput = document.querySelector('#femail')
const whatsappInput = document.querySelector('#fwhatsapp')
const siteInput = document.querySelector('#fsite')
const sistemaInput = document.querySelector('#fsistema')

document.querySelector("form").addEventListener("submit",(evento) => {
    evento.preventDefault();
   console.log (nomeInput.value);

   let texto;
   if(sistemaInput.value && sistemaInput.value) {
    textp = "Olá, quero fazer um sistema fullstack com você.";
   } else if (sistemaInput.value) {
    texto = "Olá, quero fazer um sistema backend com você.";
   }  else if (sistemaInput.value) {
    texto = "Olá, quero fazer um sistema landing page com você.";
   }  else  {
    texto = "Olá, vamos fazer um serviço.";
   }


   const url = `https://api.whatsapp.com/send=?phone=${whatsappInput.value}&text=${encodeURIComponent(
      texto
    )}`;


    window.open(url,"_blank")
});