// Carga los blogs desde blogs.json y los renderiza con la estética de proyectos
(async function() {
    const grid = document.getElementById('blogs-grid');
    const filtrosContainer = document.getElementById('filtros-blog');
    if (!grid) return;

    let blogs = [];
    try {
        const res = await fetch('blogs.json');
        blogs = await res.json();
    } catch (e) {
        grid.innerHTML = '<p class="card-desc" style="text-align:center;padding:40px;">No se pudieron cargar los blogs.</p>';
        return;
    }

    // Extraer tags únicos para filtros
    const allTags = [...new Set(blogs.flatMap(b => b.tags || []))].sort();

    // Renderizar botones de filtro
    allTags.forEach(tag => {
        const btn = document.createElement('button');
        btn.className = 'filtro-btn';
        btn.dataset.filter = tag.toLowerCase().replace(/\s/g, '-');
        btn.textContent = tag;
        filtrosContainer.appendChild(btn);
    });

    // Mapeo tag -> data-filter
    const tagToFilter = {};
    allTags.forEach(t => { tagToFilter[t] = t.toLowerCase().replace(/\s/g, '-'); });

    function getTagClass(tag) {
        const t = (tag || '').toLowerCase();
        if (t === 'cybersecurity' || t.includes('ciber')) return 'tag-cybersecurity';
        if (t === 'ctf') return 'tag-ctf';
        if (t === 'networks' || t.includes('red')) return 'tag-networks';
        if (t === 'university') return 'tag-university';
        if (t === 'personal') return 'tag-personal';
        if (t.includes('sql') || t.includes('data')) return 'tag-data';
        if (t.includes('web')) return 'tag-web';
        return 'tag-backend';
    }

    function renderCards(filter) {
        grid.innerHTML = blogs
            .filter(b => {
                if (filter === 'all') return true;
                return (b.tags || []).some(t => tagToFilter[t] === filter);
            })
            .map(blog => {
                const slug = encodeURIComponent(blog.file);
                const firstTag = (blog.tags && blog.tags[0]) ? blog.tags[0] : 'blog';
                const tagClass = getTagClass(firstTag);
                return `
            <article class="proyecto-card blog-card" data-category="${tagToFilter[firstTag] || 'blog'}" data-tags="${(blog.tags || []).map(t => tagToFilter[t]).join(',')}">
                <div class="card-preview">
                    <img src="${blog.image}" alt="${blog.title}">
                    <div class="card-overlay"></div>
                </div>
                <div class="card-info">
                    <span class="tag ${tagClass}">${firstTag}</span>
                    <h2 class="card-title">${blog.title}</h2>
                    <p class="card-desc">${blog.date}</p>
                    <div class="card-footer">
                        <a href="post.html?file=${slug}" class="card-link primary">Leer más →</a>
                    </div>
                </div>
            </article>
        `;
            })
            .join('');
    }

    renderCards('all');

    // Filtros
    filtrosContainer.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filtrosContainer.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo-filtro'));
            btn.classList.add('activo-filtro');
            renderCards(btn.dataset.filter);
        });
    });
})();
