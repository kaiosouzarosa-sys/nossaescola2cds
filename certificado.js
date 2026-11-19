
    // LISTA DE CERTIFICADOS: Adicione novos itens aqui dentro!
    const meusCertificados = [
        {
            curso: "JavaScript: explorando a linguagem",
            url: "https://cursos.alura.com.br/certificate/kaio-souza-rosa/javascript-introducao",
            // Salve um print/imagem do certificado na pasta do seu projeto e coloque o caminho abaixo:
            imagem: "img/certificado-js-introducao.png" 
        },
        {
            curso: "Exemplo de Segundo Curso",
            url: "https://alura.com.br",
            imagem: "https://placeholder.com"
        },
        {
            curso: "Exemplo de Terceiro Curso",
            url: "https://alura.com.br",
            imagem: "https://placeholder.com"
        }
        // Para adicionar o 4º certificado (que irá para a linha de baixo), basta colocar uma vírgula acima e repetir o bloco!
    ];

    const container = document.getElementById("grid-certificados");

    // Gera o HTML de cada certificado automaticamente
    meusCertificados.forEach(cert => {
        const card = document.createElement("div");
        card.className = "certificado-card";

        card.innerHTML = `
            <a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="certificado-link" title="Clique para validar na Alura">
                <h3 class="certificado-titulo">${cert.curso}</h3>
                <img src="${cert.imagem}" alt="Certificado ${cert.curso}" class="certificado-miniatura">
            </a>
        `;

        container.appendChild(card);
    });

