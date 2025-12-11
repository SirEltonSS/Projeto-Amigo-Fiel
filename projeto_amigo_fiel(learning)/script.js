
const listaPets = [
    {
        nome: "Rouba goiaba",
        idade: "2 anos",
        tipo: "Cão",
        img: "https://adotar.com.br/upload/2022-02/animais_imagem809912.jpg"
    },
    {
        nome: "Chico",
        idade: "1 ano",
        tipo: "Gato",
        img: "https://midias.correiobraziliense.com.br/_midias/jpg/2025/10/08/675x450/1_pexels-sagar-gaikwad-1402891191-32705005-59620230.jpg" 
    },
    {
        nome: "Josivaldo",
        idade: "7 dias",
        tipo: "Outros", 
        img: "https://i.redd.it/68c6tj6aa8e51.jpg"
    },
    {
        nome: "Apollo",
        idade: "1 ano",
        tipo: "Cão",
        img: "https://s2-g1.glbimg.com/pcKExQnvQlB6_1X1a-k1mMJJQrI=/0x47:960x636/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/Y/9m3nBqQfCaR6mlquzz3A/whatsapp-image-2019-12-28-at-13.33.28.jpeg"
    },
    {
        nome: "Luna",
        idade: "10 meses",
        tipo: "Cão",
        img: "https://mid-noticias.curitiba.pr.gov.br/2023/00385363.jpg"
    },
    {
        nome: "Garfield",
        idade: "3 anos",
        tipo: "Gato",
        img: "https://www.petz.com.br/blog/wp-content/uploads/2019/01/adotar-gato.jpg"
    }
];


const container = document.getElementById("container-pets");


if (container) {
    
    function renderizarPets(arrayDePets) {
        container.innerHTML = ""; 

        arrayDePets.forEach(pet => {
            const card = document.createElement("div");
            card.classList.add("card-pet");

            card.innerHTML = `
                <img src="${pet.img}" alt="${pet.nome}">
                <h3>${pet.nome}</h3>
                <p>${pet.tipo} • ${pet.idade}</p>
                <button onclick="adotar('${pet.nome}')">Quero Adotar</button>
            `;

            container.appendChild(card);
        });
    }

    function filtrarPets(categoria) {
        if (categoria === 'Todos') {
            renderizarPets(listaPets);
        } else {
     
            const petsFiltrados = listaPets.filter(pet => pet.tipo === categoria);
            renderizarPets(petsFiltrados);
        }
    }

    renderizarPets(listaPets);
}


function adotar(nomePet) {
    alert(`Ótima escolha! Entre em contato conosco pelo formulário para adotar o ${nomePet}.`);
  
    window.location.href = "contato.html";
}


console.log("Sistema do Amigo Fiel carregado com sucesso! 🐶");


const btnTema = document.getElementById('btn-tema');
const body = document.body;


const temaSalvo = localStorage.getItem('tema');


if (temaSalvo === 'escuro') {
    body.classList.add('dark-mode');
    btnTema.textContent = '☀️';
}

btnTema.addEventListener('click', () => {
    
    body.classList.toggle('dark-mode');

    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'escuro');
        btnTema.textContent = '☀️'; 
    } else {
        localStorage.setItem('tema', 'claro');
        btnTema.textContent = '🌙';
    }
});

const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
    
    if (window.scrollY > 300) {
        btnTopo.classList.add("show"); 
    } else {
        btnTopo.classList.remove("show");
    }
});