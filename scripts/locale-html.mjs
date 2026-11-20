import { readFileSync, writeFileSync } from 'node:fs'

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8')

const pages = {
  es: {
    lang: 'es',
    locale: 'es',
    url: 'https://smartlistapp.ai/es',
    title: 'SmartList — Lista de compras inteligente',
    description:
      'SmartList llega el 5 de diciembre. Tu lista de compras inteligente, con recetas y ofertas. Entra en la lista de prelanzamiento.',
  },
  pt: {
    lang: 'pt-BR',
    locale: 'pt_BR',
    url: 'https://smartlistapp.ai/pt',
    title: 'SmartList — Lista de compras inteligente',
    description:
      'O SmartList chega em 5 de dezembro. Sua lista de compras inteligente, com receitas e ofertas. Entre na lista de pré-lançamento.',
  },
}

function apply(source, page) {
  return source
    .replace('<html lang="en">', `<html lang="${page.lang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    .replace(/name="description"\s+content="[^"]*"/, `name="description" content="${page.description}"`)
    .replace(/property="og:locale"\s+content="[^"]*"/, `property="og:locale" content="${page.locale}"`)
    .replace(/property="og:title"\s+content="[^"]*"/, `property="og:title" content="${page.title}"`)
    .replace(/property="og:description"\s+content="[^"]*"/, `property="og:description" content="${page.description}"`)
    .replace(/property="og:url"\s+content="[^"]*"/, `property="og:url" content="${page.url}"`)
}

for (const [code, page] of Object.entries(pages)) {
  writeFileSync(new URL(`../dist/${code}.html`, import.meta.url), apply(html, page))
}
