const meusCertificados = [
    {
        curso: "JavaScript: explorando a linguagem",
        url: "https://cursos.alura.com.br/certificate/kaio-souza-rosa/acessibilidade-web-design-inclusivos",
        data: "Outubro de 2026"
    },
    {
        curso: "Acessibilidade web: crie designs inclusivos",
        url: "https://cursos.alura.com.br/course/acessibilidade-web-design-inclusivos",
        data: "Novembro de 2026"
    },
    {
        curso: "JavaScript: programando na linguagem da web",
        url: "https://cursos.alura.com.br/certificate/kaio-souza-rosa/javascript-programando-na-linguagem-web",
        data: "Novembro de 2026"
    }
];

const container = document.getElementById("grid-certificados");

meusCertificados.forEach(cert => {
    const card = document.createElement("div");
    card.className = "certificado-card";

    card.innerHTML = `
        <a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="certificado-link" title="Clique para validar na Alura">
            <h3 class="certificado-titulo">${cert.curso}</h3>
            
            <div class="mini-certificado-visual">
                <span class="selo-alura">ALURA</span>
                <p class="texto-certificado">Certificado de Conclusão</p>
                <span class="data-certificado">${cert.data}</span>
                <span class="ver-credencial">Verificar credencial ↗</span>
            </div>
        </a>
    `;

    container.appendChild(card);
});
