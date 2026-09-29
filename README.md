# Movimento Profético — Site

Site institucional e legal (LGPD) do aplicativo **Movimento Profético**.
Next.js (App Router) + pnpm. Deploy na Vercel em **app.movimentoprofetico.com.br**.

## Rotas

- `/` — landing (baixe o app)
- `/privacidade` — Política de Privacidade
- `/termos` — Termos de Uso
- `/excluir-conta` — como excluir a conta e os dados
- `/confirmado` — retorno de ações abertas por link (abre o app)

## Desenvolvimento

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Scripts

- `pnpm dev` — servidor de desenvolvimento
- `pnpm build` — build de produção
- `pnpm start` — serve o build
- `pnpm typecheck` — checagem de tipos (tsc --noEmit)

## Links de conteúdo do app (deep links)

Este domínio é o host de associação dos deep links do aplicativo, declarado em
`apps/mobile/app.config.ts` (`associatedDomains` no iOS e `intentFilters` no Android, derivados de
`EXPO_PUBLIC_APP_PUBLIC_URL`). Dois arquivos em `public/.well-known/` sustentam isso:

- `apple-app-site-association` — iOS Universal Links. **Sem extensão** (com `.json` a Apple não
  encontra) e servido como `application/json` por uma regra `headers` no `vercel.json`, porque um
  arquivo sem extensão sairia como `application/octet-stream`.
- `assetlinks.json` — Android App Links.

Ambos declaram somente os três prefixos de conteúdo público: `/live/*`, `/audio/*`, `/post/*`.

### Redirect de `/post`, `/audio` e `/live`

Estas rotas **não existem neste site**: quem abre o link sem o app instalado é redirecionado
(**307**, via `redirects` no `vercel.json`) para as páginas públicas equivalentes do painel
administrativo, que renderizam o conteúdo real e as tags Open Graph do preview:

```
/post/:id  → https://movimento-profetico-admin.vercel.app/post/:id
/audio/:id → …/audio/:id
/live/:id  → …/live/:id
```

**Dependência externa:** este site depende das rotas públicas `/post`, `/audio` e `/live` do projeto
`movimento-profetico-admin`. Se elas mudarem de caminho, deixarem de ser públicas ou passarem a
exigir autenticação, todo link compartilhado quebra.

**Por que 307 e não 308:** `permanent: false` no `vercel.json` produz **307** (temporário) e
`permanent: true` produziria **308** (permanente). O destino é provisório, e 308 é cacheado de forma
agressiva e duradoura por navegadores e por crawlers de preview — um link compartilhado com o 308 em
cache continuaria indo para o domínio legado mesmo depois de a troca ser feita. **Não altere para
`permanent: true`** enquanto o destino não for definitivo.

> **O destino acima é temporário e deve mudar.** O domínio `movimento-profetico-admin.vercel.app` é
> legado (ver `docs/DOMINIOS.md` no repositório do app). Quando o painel receber um domínio próprio
> para as páginas públicas, atualize os três `destination`. Esta nota vive no README, e não como
> comentário no `vercel.json`, porque o schema do arquivo declara `additionalProperties: false` —
> qualquer chave de comentário quebraria a validação. Item de backlog registrado no
> `docs/RUNBOOK.md` do app: **"Subdomínio próprio para páginas públicas do admin"**.

## Notas

- Site estático: sem cookies de rastreamento, analytics ou pixels.
- Contato geral: contato@movimentoprofetico.com.br · Privacidade/LGPD: dpo@movimentoprofetico.com.br
- Os textos legais são a versão oficial do advogado (atualização 15/09/2026).
