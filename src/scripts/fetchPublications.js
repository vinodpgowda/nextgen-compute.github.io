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
            const $li = $(el); // Wrap the li element in Cheerio for easier manipulation
            const $a = $li.find('a'); // Find the anchor tag within the li

            let actualTitle = 'Untitled Publication'; // Default
            let link = null;
            const fullText = $li.text().trim(); // Get the full text initially
            let citationDetails = fullText; // Keep citationDetails as the full original text

            if ($a.length) { // If an anchor tag exists
                link = $a.attr('href') || null;

                let aText = $a.text().trim(); // Get the text content of the <a> tag

                // Remove leading/trailing curly quotes, straight quotes, and any trailing commas from actualTitle.
                actualTitle = aText
                    .replace(/^“/, '') // Remove leading curly opening quote
                    .replace(/”$/, '') // Remove trailing curly closing quote
                    .replace(/^"/, '') // Remove leading straight opening quote
                    .replace(/"$/, '') // Remove trailing straight closing quote
                    .replace(/,$/, '')  // Remove trailing comma
                    .trim(); // Trim any remaining whitespace
            }

            // Clean up any remaining triple quotes from citationDetails (optional, as they might be in the original text)
            citationDetails = citationDetails.replace(/"""/g, '').trim();

            // Fallback for cases where no <a> tag is found (though less likely for publications)
            if (!link && !actualTitle && !citationDetails) {
                citationDetails = $li.text().trim();
                actualTitle = 'Untitled Publication';
            }

            publications.push({
                actualTitle: actualTitle,
                citationDetails: citationDetails,
                link: link && link.startsWith('http') ? link : null
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
