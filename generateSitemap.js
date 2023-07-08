const SitemapGenerator = require('sitemap-generator');

const urls = [
  'https://ahlesunnatweb.web.app/',
  'https://ahlesunnatweb.web.app/ourproducts',
  'https://ahlesunnatweb.web.app/ourproduts/:title',
  'https://ahlesunnatweb.web.app/contact',
  'https://ahlesunnatweb.web.app/about',
  
];
const generator = SitemapGenerator('https://ahlesunnatweb.web.app/', {
  stripQuerystring: true,
  urls,
});

// Register event listeners
generator.on('done', () => {
  console.log('Sitemap generated successfully.');
});

generator.on('error', (error) => {
  console.error('An error occurred while generating the sitemap:', error);
});

// Start the generation process
generator.start();