import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const routes = [
  { path: '/',         file: 'index.html' },
  { path: '/about',    file: 'about/index.html' },
  { path: '/projects', file: 'projects/index.html' },
  { path: '/pricing',  file: 'pricing/index.html' },
]

const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')
const { render } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')))

for (const route of routes) {
  let output = template
  try {
    const { html: appHtml } = render(route.path)

    // react-helmet-async v3 renders <title>/<meta>/<link> tags inline at the
    // start of the HTML string, before the first DOM element.
    const bodyStart = appHtml.indexOf('<div ')
    const headTags  = bodyStart > 0 ? appHtml.slice(0, bodyStart).trim() : ''
    const bodyHtml  = bodyStart > 0 ? appHtml.slice(bodyStart)           : appHtml

    // Replace default <title> in the template with the page-specific one
    const titleMatch = headTags.match(/<title>[^<]*<\/title>/)
    if (titleMatch) {
      output = output.replace(/<title>[^<]*<\/title>/, titleMatch[0])
    }

    // Inject remaining meta/link tags before </head>
    const otherTags = headTags.replace(/<title>[^<]*<\/title>/, '').trim()
    if (otherTags) {
      output = output.replace('</head>', `  ${otherTags}\n  </head>`)
    }

    // Inject pre-rendered body into the root div
    output = output.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`)
  } catch (err) {
    console.warn(`⚠  Pre-render failed for ${route.path} — using shell HTML.`)
    console.warn(`   ${err.message}`)
  }

  const outputPath = resolve(root, 'dist', route.file)
  mkdirSync(dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, output)
  console.log(`✓  ${route.path}  →  dist/${route.file}`)
}
