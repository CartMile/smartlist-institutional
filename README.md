# SmartList Institutional

SPA institucional (marketing / pré-lançamento) para **smartlistapp.ai**.

Separado do PWA do aplicativo (`front-pwa/smart-list-creator`).

## Rotas (EN / ES / PT)

- `/` · `/es` · `/pt` — página institucional (inglês é o padrão; `/en` redireciona para `/`)
- `/pre-launch` · `/prelanzamiento` · `/prelancamento` — pré-lançamento

O seletor **EN | ES | PT** no header troca o idioma e a rota.

## Desenvolvimento

```bash
npm install
npm run dev
```

Sobe em `http://localhost:5174/`.

## Deploy (Vercel → smartlistapp.ai)

Projeto: `craftconnects-projects/smartlist-institutional`

```bash
npm run build
npx vercel --prod --yes --scope craftconnects-projects
```

Domínio de produção: https://smartlistapp.ai

## API

O formulário chama `POST {VITE_API_BASE_URL}/prelaunch-interest`.

## Analytics (Google)

Variáveis de ambiente (build-time):

- `VITE_GTM_ID` — Google Tag Manager (ex.: `GTM-XXXXXXX`)
- `VITE_GA_MEASUREMENT_ID` — GA4 opcional (ex.: `G-XXXXXXXXXX`)

Eventos enviados ao `dataLayer`:

- `page_view` em cada rota SPA
- `prelaunch_submit` ao concluir o formulário de pré-lançamento
