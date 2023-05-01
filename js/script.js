

const ButtonCliquerAmarelo =() =>{
    // imagem da moto

    const imagem = document.querySelector('.imagem-moto');

    imagem.src ='./img/lateral-direita-moto-honda-cb-300f-twister-modelo-abs-cor-dourada.webp'
    
    // texto e cor a moto

    const textoh2 = document.querySelector('#textoh2')
    
    textoh2.style.color = "yellow";
   
    textoh2.innerHTML='Dourado Metálico'

    //fundo do nav
    const corNav = document.querySelector('.container-fluid')

    corNav.style.backgroundColor ='yellow'

    // fundo do botão

    
}



const ButtonCliquerVermelho = () =>{

    const imagem = document.querySelector('.imagem-moto');

 
    imagem.src = "./img/moto-honda-cb-300f-twister-vermelha-abs-2023-v1.webp"


    const textoh2 = document.querySelector('#textoh2')
    textoh2.style.color = "red";
    textoh2.innerHTML='Vermelho'

    const corNav = document.querySelector('.container-fluid')

    corNav.style.backgroundColor ='red'

   
    
    
}


const CarroVermelho= () =>{
    const imagemCarro = document.querySelector('.imagem-carro');
    imagemCarro.src = './img/Touring_vermelho_mercurio_0.jpg'

    const corNav = document.querySelector('.container-fluid')

    corNav.style.backgroundColor ='Crimson'

    const ptextocar = document.querySelector(".ptexto-car")
    ptextocar.innerHTML ='A partir de R$ 148.500,00*'

    //const spancor = document.querySelector("#span-cor")
    //spancor.style.color = 'red'
}




const ButtonCarroPreto = () =>{
    
    const imagemCarro = document.querySelector('.imagem-carro');
    
    imagemCarro.src = './img/Touring_preto_cristal_0.jpg'


    const corNav = document.querySelector('.container-fluid')

    corNav.style.backgroundColor ='DimGray'

    const ptextocar = document.querySelector(".ptexto-car")
    ptextocar.innerHTML ='A partir de R$ 148.780,00*'

    //const spancor = document.querySelector("span")
    //spancor.style.color = 'red'
}


const ButtonCarroBranco =() =>{
    const imagemCarro = document.querySelector('.imagem-carro');

    imagemCarro.src = './img/Touring_branco_topazio_0.jpg'

    const corNav = document.querySelector('.container-fluid')

    corNav.style.backgroundColor ='darkgray'

    const ptextocar = document.querySelector(".ptexto-car")
    ptextocar.innerHTML ='A partir de R$ 148.950,50*'

    //const spancor = document.querySelector("#span-cor")
    //spancor.style.color = 'red'
}




  
  
 /* const meuBotao = document.getElementById("botao-car")

meuBotao.addEventListener("click", function(){
  meuBotao.classList.toggle('botao-selecionado')
})

meuBotao.addEventListener('mouseup', function() {
  meuBotao.classList.remove('botao-selecionado');
}); */
  
  
  
  
  
  
// evento dos botões
ButtonCarroPreto.addEventListener("click" , ButtonCarroPreto)
ButtonCliquerVermelho.addEventListener("click", ButtonCliquerVermelho )
ButtonCliquerAmarelo.addEventListener("click", ButtonCliquerAmarelo )
CarroVermelho.addEventListener("click" ,CarroVermelho)

ButtonCarroBranco.addEventListener("click" , ButtonCarroBranco)