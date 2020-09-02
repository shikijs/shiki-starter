const fs = require('fs')
const shiki = require('shiki')

shiki
  .getHighlighter({
    theme: 'nord'
  })
  .then((highlighter) => {
    const html = highlighter.codeToHtml(
      fs.readFileSync('index.js', 'utf-8'),
      'javascript'
    )

    const out = `
<title>Shiki</title>
<link rel="stylesheet" href="style.css">
${html}`

    fs.writeFileSync('index.html', out.trim())

    console.log('done highlighting index.js')
  })
