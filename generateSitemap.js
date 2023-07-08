const SitemapGenerator = require('sitemap-generator');

// Configure the generator with your website's URL
const generator = SitemapGenerator('https://ahlesunnatweb.web.app/', {
  stripQuerystring: true, // Optional: Remove query strings from URLs
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
