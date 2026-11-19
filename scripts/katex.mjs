import fs from 'fs';
import path from 'path';
import katex from 'katex';

function renderFile(p) {
    const t = fs.readFileSync(p, {encoding: 'utf8', flag: 'r'});
    const u = t.replaceAll(/<pre[^>]*><code(?: data-lang="?plain"?)?>(?:<span[^>]*>)*\s*\$\$((?:\\\$|[^\$])*)\$\$\s*(?:<\/span>)*<\/code><\/pre>(?:\s*<p>)?/g, (_, m) => katex.renderToString(m.replaceAll(/<\/?span[^>]*>/g, '').replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&quot;','"').replaceAll('&#39;',"'").replaceAll('&amp;','&'), {displayMode: true}));
    const v = u.replaceAll(/<code>\$((?:\\\$|[^\$])*)\$<\/code>/g, (_, m) => katex.renderToString(m.replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&quot;','"').replaceAll('&#39;',"'").replaceAll('&amp;','&')));
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