



//window.onload = function () {
//  setTimeout(function () {
//       alert("Parabéns, você acaba de acessar uma das melhores páginas de TI!");
// }, 1000); // 1000 milissegundos = 3 segundos
//};

//function toggleMenu() {
//    const pageWidth = document.documentElement.clientWidth;
//    console.log('Largura Página  ' + pageWidth)
//    var sidebar = document.getElementById("sidebar");
//    var menuicon = document.getElementById("menuIcon");
//
//    if (sidebar.style.width === "200px" && pageWidth < 799) {
//        sidebar.style.width = "0";
//    } else {
//        sidebar.style.width = "200px";
//        menuicon.style.display = "none";
//    }
//}

function toggleMenu() {
    const pageWidth = document.documentElement.clientWidth;
    console.log('Largura Página  ' + pageWidth)
    var sidebar = document.getElementById("sidebar");
    var menuicon = document.getElementById("menuIcon");

    if (sidebar.style.width === "300px" && pageWidth < 800) {
        sidebar.style.width = "0px";
    } else {
        sidebar.style.width = "300px";
        menuicon.style.display = "none";
    }
}

function closeMenu() {
    const pageWidth = document.documentElement.clientWidth;
    var sidebar = document.getElementById("sidebar");
    var menuicon = document.getElementById("menuIcon");

    if(sidebar.style.width === "300px" && pageWidth < 800) 
        {sidebar.style.width = "0px";
        menuicon.style.display = "block";
        }
}












window.addEventListener("scroll", function () {
    let sidebar = document.querySelector(".sidebar");

    if (window.scrollY > 50) {
        sidebar.style.opacity = "0"; /* Torna transparente */
        sidebar.style.transform = "translateY(-20px)"; /* Move para cima */
    } else {
        sidebar.style.opacity = "1"; /* Retorna ao normal */
        sidebar.style.transform = "translateY(0)"; /* Volta à posição original */
    }
});



const descdifElements = document.querySelectorAll('.descdif');

// Função que verifica se o elemento está visível no viewport
function checkVisibility() {
  descdifElements.forEach(descdif => {
    const rect = descdif.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      descdif.classList.add('visible'); // Adiciona classe para aplicar os estilos
    }
  });
}

// Escuta o evento de rolagem
window.addEventListener('scroll', checkVisibility);

// Verifica inicialmente (caso já esteja no viewport ao carregar)
checkVisibility();

const script_do_google = 'https://script.google.com/macros/s/AKfycbyC2ECBNtwmGBzvguUGW7BwdjDgXIaoIAugMW-yGV6T48hA8vVPENDzv2Tm0p0FesNmAA/exec';

function enviarDados(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch(script_do_google, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'sucesso') {
                alert("Dados enviados com sucesso!  Agradecemos sua confiança!");
                event.target.reset();
            } else {
                alert('Erro: ' + data.mensagem);
            }
        })
        .catch(error => {
            console.error('Erro no envio dos dados!', error);
            alert('Falha no envio. Tente novamente.');
        });
}

document.getElementById("telefone").addEventListener("input", function (event) {
    let telefone = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (telefone.length <= 10) {
        telefone = telefone.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else {
        telefone = telefone.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
    }

    event.target.value = telefone;
});
