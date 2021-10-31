// Eu usaria o eleventy-plugin-reading-time, mas ele não suporta o Liquid
function readingTime(
  postOrContent,
  { printSeconds = false, raw = false, speed = 200 } = {}
) {
  const htmlContent =
    typeof postOrContent === 'string'
      ? postOrContent
      : postOrContent.templateContent;

  if (!htmlContent) {
    return `0 ${printSeconds ? 'seconds' : 'minutes'}`;
  }

  const content = htmlContent.replace(/(<([^>]+)>)/gi, '');
  const matches = content.match(/[\u0400-\u04FF]+|\S+\s*/g);
  const count = matches !== null ? matches.length : 0;

  let est = '';

  if (printSeconds === true) {
    const min = Math.floor(count / speed);
    const sec = Math.floor((count % speed) / (speed / 60));

    if (raw === false) {
      const mins = min + ' minute' + (min === 1 ? '' : 's') + ', ';
      const secs = sec + ' second' + (sec === 1 ? '' : 's');
      est = min > 0 ? mins + secs : secs;
    } else {
      est = min * 60 + sec;
    }
  } else {
    const min = Math.ceil(count / speed);

    if (raw === false) {
      est = min + ' min';
    } else {
      est = min;
    }
  }

  return est;
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addLiquidFilter('readingTime', function (v) {
    return v && readingTime(v)
  })

  let markdownIt = require('markdown-it')
  let markdownItAbbr = require('markdown-it-abbr')
  let markdownItFootnote = require('markdown-it-footnote')
  let markdownItOpts = {
    html: true,
    breaks: true,
    linkify: true,
  }
  const markdownEngine = markdownIt(markdownItOpts)
  markdownEngine.use(markdownItAbbr)
  markdownEngine.use(markdownItFootnote)
  eleventyConfig.setLibrary('md', markdownEngine)

  eleventyConfig.addLiquidFilter('onlyDate', function (v) {
    return v?.toLocaleDateString('pt-BR')
  })

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy('src/image')

  // Copy `css/fonts/` to `_site/css/fonts`
  // Keeps the same directory structure.
  // eleventyConfig.addPassthroughCopy("css/fonts");

  // Copy any .jpg file to `_site`, via Glob pattern (in 0.9.0+)
  // Keeps the same directory structure.
  // eleventyConfig.addPassthroughCopy("**/*.jpg");

  return {
    dir: {
      input: 'src',
      output: 'docs',
    },
  }
}
