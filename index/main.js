

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