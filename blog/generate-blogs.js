#!/usr/bin/env node
/**
 * Genera blogs.json leyendo el frontmatter de cada .md en blog/md/
 * Ejecutar: node blog/generate-blogs.js
 */

const fs = require('fs');
const path = require('path');

const mdDir = path.join(__dirname, 'md');
const outputPath = path.join(__dirname, 'blogs.json');

function parseFrontmatter(content) {
    const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!match) return null;
    const raw = match[1];
    const data = {};
    for (const line of raw.split('\n')) {
        const colon = line.indexOf(':');
        if (colon === -1) continue;
        const key = line.slice(0, colon).trim();
        let val = line.slice(colon + 1).trim();
        if (val.startsWith('[') && val.endsWith(']')) {
            val = val.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
        } else if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
        }
        data[key] = val;
    }
    return data;
}

const files = fs.readdirSync(mdDir).filter(f => f.endsWith('.md'));
const blogs = [];

for (const file of files) {
    const filePath = path.join(mdDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const fm = parseFrontmatter(content);
    if (!fm) continue;
    blogs.push({
        file,
        title: fm.title || file.replace(/\.md$/, ''),
        tags: Array.isArray(fm.tags) ? fm.tags : (fm.tags ? [fm.tags] : []),
        date: fm.date || '',
        image: fm.image || '../assets/Ciberattack.png'
    });
}

fs.writeFileSync(outputPath, JSON.stringify(blogs, null, 2), 'utf8');
console.log('blogs.json actualizado con', blogs.length, 'entradas.');
