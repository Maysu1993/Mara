// Carga y renderiza el post en Markdown
(function() {
    const params = new URLSearchParams(window.location.search);
    const file = params.get('file');
    const container = document.getElementById('post-content');

    if (!file) {
        container.innerHTML = '<p style="color:#888;">No se especificó ningún post.</p>';
        return;
    }

    const mdPath = 'md/' + decodeURIComponent(file);

    fetch(mdPath)
        .then(res => {
            if (!res.ok) throw new Error('No encontrado');
            return res.text();
        })
        .then(md => {
            // Quitar frontmatter si existe
            let content = md;
            if (content.startsWith('---')) {
                const end = content.indexOf('---', 3);
                if (end !== -1) content = content.slice(end + 3).trim();
            }
            // Renderizar con marked
            if (typeof marked !== 'undefined') {
                marked.setOptions({ breaks: true });
                container.innerHTML = marked.parse(content);
            } else {
                container.innerHTML = '<pre>' + content.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</pre>';
            }
        })
        .catch(() => {
            container.innerHTML = '<p style="color:#ff6b6b;">No se pudo cargar el artículo.</p>';
        });
})();
