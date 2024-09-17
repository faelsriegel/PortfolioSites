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

function compartilharQRCode() {
    // URL do site que será compartilhada
    var urlDoSite = 'https://portfoliosites.vercel.app/';

    // Caminho para a imagem do QR Code
    var caminhoDoQRCode = './images/qrcode.png';

    // Cria o texto de compartilhamento
    var textoCompartilhamento = 'Acesse o site para saber mais: ';

    // Verifica se a API de compartilhamento nativa está disponível (para dispositivos móveis)
    if (navigator.share) {
        navigator.share({
            title: 'QR Code do Portfloio de Sites',
            text: textoCompartilhamento,
            url: urlDoSite
        }).then(() => {
            console.log('Compartilhamento realizado com sucesso');
        }).catch((error) => {
            console.error('Erro ao compartilhar:', error);
        });
    } else {
        // Se a API de compartilhamento não estiver disponível, abre o link do WhatsApp sem a imagem
        var linkDeCompartilhamento = 'whatsapp://send?text=' + encodeURIComponent(textoCompartilhamento);
        
        // Abre o link de compartilhamento em uma nova janela
        window.open(linkDeCompartilhamento, '_blank');
    }
}

// Função para abrir o QR Code em uma nova aba
function abrirQRCode() {
    var caminhoDoQRCode = './images/qrcode.png';
    window.open(caminhoDoQRCode, '_blank');
}

