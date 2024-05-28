function togglemenu(){
    let sidebar=document.getElementById('sidebar');
    if (sidebar.offsetWidth === 0){
        const width= window.innerWidth< 600 ? 300 : 600
        sidebar.style.width = `${width}px`;
        sidebar.style.display ='block';
    }else {
        sidebar.style.width = `0px`;
        sidebar.style.display ='none';
    }

}

// window.onscroll = () => {
//     let nav = document.getElementById('header');
//     if(this.scrollY <= 300){
//         nav.className = 'header';
//     }else{
//         nav.className = 'nav-scroll';
//     }

//     if(this.scrollY <=500){
//         scrolltopbtn.style.display="none";
//     }
//     else{
//         scrolltopbtn.style.display="block";
//     }
// }
// let scrolltopbtn=document.getElementById("scroll-up");
// let rootElement = document.documentElement

function scrolltop(){
    rootElement.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
scrolltopbtn.addEventListener("click", scrolltop);

// Adiciona o evento de clique ao elemento com o ID 'compartilharLink'
document.getElementById('compartilharLink').addEventListener('click', compartilharQRCode);
													
function compartilharQRCode() {
    // Substitua 'URL-do-seu-site' pela URL real do seu site
    var urlDoSite = 'https://margaridadequadra.vercel.app';
    
    // Substitua 'Caminho-do-seu-QRCode.png' pelo caminho real da sua imagem QR Code
    var caminhoDoQRCode = "./i";

    // Cria um link de compartilhamento
    var linkDeCompartilhamento = 'whatsapp://send?text=' + encodeURIComponent('Confira este QR Code para ir ao site de Margarida de Quadra: ' + urlDoSite);
    
    // Adiciona a imagem ao link de compartilhamento
    linkDeCompartilhamento += '&image=' + encodeURIComponent(caminhoDoQRCode);
    
    // Abre o link de compartilhamento em uma nova janela ou guia
    window.open(linkDeCompartilhamento, '_blank');
}

