(function() {
    const form = document.getElementById('alura-cert-form');
    const urlInput = document.getElementById('alura-cert-url');
    const listContainer = document.getElementById('alura-cert-list');
    const countLabel = document.getElementById('alura-cert-count');

    const defaultCertificates = [
        {
            id: 1,
            title: "Acessibilidade Web: Crie Designs Inclusivos",
            student: "Kaio Rodrigo Souza Rosa",
            url: "https://alura.com.br"
        }
    ];

    let certificates = JSON.parse(localStorage.getItem('alura_certs')) || defaultCertificates;

    function formatCourseName(url) {
        try {
            const urlObj = new URL(url);
            const parts = urlObj.pathname.split('/').filter(Boolean);
            const lastPart = parts[parts.length - 1];

            const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(lastPart);
            if (isUUID || !lastPart) {
                return "Certificado Oficial Alura";
            }

            return lastPart
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        } catch (e) {
            return "Certificado Alura";
        }
    }

    function saveAndRender() {
        localStorage.setItem('alura_certs', JSON.stringify(certificates));
        renderCertificates();
    }

    function renderCertificates() {
        listContainer.innerHTML = '';
        countLabel.textContent = `${certificates.length} ${certificates.length === 1 ? 'certificado' : 'certificados'}`;

        certificates.forEach(cert => {
            const card = document.createElement('article');
            card.className = 'alura-cert-card';

            card.innerHTML = `
                <div>
                    <span class="alura-cert-badge">ALURA</span>
                    <h3 class="alura-cert-title">${cert.title}</h3>
                    <p class="alura-cert-student">Concluído por ${cert.student}</p>
                </div>
                <div class="alura-cert-actions">
                    <a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="alura-cert-btn-view">
                        Ver Certificado ↗
                    </a>
                    <button type="button" class="alura-cert-btn-remove" data-id="${cert.id}">Remover</button>
                </div>
            `;

            listContainer.appendChild(card);
        });
    }

    // Delegação de evento para o botão remover (evita funções globais)
    listContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('alura-cert-btn-remove')) {
            const id = Number(e.target.getAttribute('data-id'));
            certificates = certificates.filter(cert => cert.id !== id);
            saveAndRender();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const url = urlInput.value.trim();

        if (!url.includes('alura.com.br/certificate')) {
            alert('Por favor, insira um link válido de certificado da Alura.');
            return;
        }

        const newCert = {
            id: Date.now(),
            title: formatCourseName(url),
            student: "Kaio Rodrigo Souza Rosa",
            url: url
        };

        certificates.unshift(newCert);
        urlInput.value = '';
        saveAndRender();
    });

    renderCertificates();
})();
