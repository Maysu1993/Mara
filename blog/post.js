// Carga y renderiza el post en Markdown
(function() {
    const params = new URLSearchParams(window.location.search);
    const file = params.get('file');
    const container = document.getElementById('post-content');
    const tocElement = document.querySelector('.post-toc');
    const tocToggleMobile = document.querySelector('.toc-toggle-mobile');

    // Activar modo de lectura limpia (sin partículas, fondo negro sólido)
    if (document && document.body) {
        document.body.classList.add('lectura-limpia');
    }

    if (!file) {
        container.innerHTML = '<p style="color:#888;">No se especificó ningún post.</p>';
        return;
    }

    const mdPath = 'md/' + decodeURIComponent(file);

    function slugify(text) {
        return text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-');
    }

    function buildTOC() {
        const tocList = document.getElementById('toc-list');
        if (!tocList || !container) return;

        // Solo H2 y H3 en la TOC
        const headings = container.querySelectorAll('h2, h3');
        if (!headings.length) {
            tocList.innerHTML = '<li class="toc-item"><span class="toc-link">Sin índice</span></li>';
            return;
        }

        tocList.innerHTML = '';

        const idToLink = {};
        const idToLevel = {};
        const idToParentH2Item = {};

        let currentH2Item = null;

        headings.forEach(h => {
            const level = parseInt(h.tagName[1], 10) || 2;
            const text = h.textContent.trim();
            if (!text) return;

            if (!h.id) {
                h.id = slugify(text);
            }

            const lvl = Math.min(level, 3);
            idToLevel[h.id] = lvl;

            if (lvl === 2) {
                const li = document.createElement('li');
                li.className = 'toc-item level-2';

                const a = document.createElement('a');
                a.href = `#${h.id}`;
                a.textContent = text;
                a.className = 'toc-link';

                li.appendChild(a);

                const sublist = document.createElement('ul');
                sublist.className = 'toc-sublist';
                li.appendChild(sublist);

                tocList.appendChild(li);

                currentH2Item = li;
                idToLink[h.id] = a;

                // Toggle de subpuntos al hacer click en el H2
                a.addEventListener('click', () => {
                    li.classList.toggle('expanded');
                });
            } else if (lvl === 3 && currentH2Item) {
                const sublist = currentH2Item.querySelector('.toc-sublist');
                const li = document.createElement('li');
                li.className = 'toc-item level-3';

                const a = document.createElement('a');
                a.href = `#${h.id}`;
                a.textContent = text;
                a.className = 'toc-link';

                li.appendChild(a);
                sublist.appendChild(li);

                idToLink[h.id] = a;
                idToParentH2Item[h.id] = currentH2Item;

                // En móvil, cerrar TOC al seleccionar un elemento
                a.addEventListener('click', () => {
                    if (window.innerWidth <= 900 && tocElement) {
                        tocElement.classList.remove('open');
                    }
                });
            }
        });

        const links = tocList.querySelectorAll('.toc-link');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    links.forEach(link => {
                        link.classList.toggle('activo', link.getAttribute('href') === `#${id}`);
                    });

                    const level = idToLevel[id];
                    if (level === 3 && idToParentH2Item[id]) {
                        idToParentH2Item[id].classList.add('expanded');
                    }
                }
            });

            if (tocElement) {
                const anyActive = Array.from(links).some(link => link.classList.contains('activo'));
                tocElement.classList.toggle('has-active', anyActive);
            }
        }, {
            rootMargin: '-40% 0px -50% 0px',
            threshold: 0.1
        });

        headings.forEach(h => observer.observe(h));
    }

    // Toggle ToC en móvil
    if (tocToggleMobile && tocElement) {
        tocToggleMobile.addEventListener('click', () => {
            tocElement.classList.toggle('open');
        });
    }

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
                let html = marked.parse(content);
                // Añadir referrerpolicy a imágenes (ayuda con Imgur/hotlinking)
                html = html.replace(/<img /g, '<img referrerpolicy="no-referrer" ');
                container.innerHTML = html;
                buildTOC();
            } else {
                container.innerHTML = '<pre>' + content.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</pre>';
            }
        })
        .catch(() => {
            container.innerHTML = '<p style="color:#ff6b6b;">No se pudo cargar el artículo.</p>';
        });
})();
