const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const URL = 'https://mrhrashed.github.io/publications.html';
const OUTPUT = 'src/data/publications.js';

async function scrape() {
    try {
        const { data: html } = await axios.get(URL);
        const $ = cheerio.load(html);

        const publications = [];

        $('li').each((i, el) => {
            const text = $(el).text().trim();
            const link = $(el).find('a').attr('href') || '';

            publications.push({
                title: text,
                link: link.startsWith('http') ? link : null
            });
        });

        const content = `const publications = ${JSON.stringify(publications, null, 2)};\nexport default publications;\n`;

        fs.writeFileSync(OUTPUT, content);
        console.log(`✅ Saved ${publications.length} publications to ${OUTPUT}`);
    } catch (err) {
        console.error('❌ Scraping failed:', err.message);
    }
}

scrape();
