const fs = require('fs');
const path = require('path');
const katex = require('katex');

function renderFile(p) {
    const t = fs.readFileSync(p, {encoding: 'utf8', flag: 'r'});
    const u = t.replaceAll(/<code>\$([^\$]*)\$<\/code>/g, (_, m) => katex.renderToString(m.replaceAll('&lt;','<').replaceAll('&gt;','>')));
    const v = u.replaceAll(/<pre class=z-code><code><span class="z-text z-plain">\s*\$\$([^\$]*)\$\$\s*<\/span><\/code><\/pre>/g, (_, m) => '<p>' + katex.renderToString(m.replaceAll('<span class="z-text z-plain">', '').replaceAll('</span>', '').replaceAll('&lt;','<').replaceAll('&gt;','>'), {displayMode: true}) + '</p>');
    fs.writeFileSync(p, v);
}

function renderDirectory(d) {
    fs.readdirSync(d).forEach(f => {
        const p = path.join(d, f);
        if (path.extname(f) === '.html') {
            renderFile(p);
        } else if (fs.statSync(p).isDirectory()) {
            renderDirectory(p);
        }
    });
}

renderDirectory('public');