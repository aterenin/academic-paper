const fs = require('fs');
const path = require('path');
const katex = require('katex');

function renderFile(p) {
    const t = fs.readFileSync(p, {encoding: 'utf8', flag: 'r'});
    const u = t.replaceAll(/<code>\$([^\$]*)\$<\/code>/g, (_, m) => katex.renderToString(m));
    const v = u.replaceAll(/<pre class=z-code><code><span class="z-text z-plain">\s*\$\$([^\$]*)\$\$\s*<\/span><\/code><\/pre>/g, (_, m) => katex.renderToString(m.replaceAll('<span class="z-text z-plain">', '').replaceAll('</span>', ''), {displayMode: true}));
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
};

renderDirectory('public');