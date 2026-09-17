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

## Notas

- Site estático: sem cookies de rastreamento, analytics ou pixels.
- Contato geral: contato@movimentoprofetico.com.br · Privacidade/LGPD: dpo@movimentoprofetico.com.br
- Os textos legais são a versão oficial do advogado (atualização 15/09/2026).
