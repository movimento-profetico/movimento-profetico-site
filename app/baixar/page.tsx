import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { StoreButtons } from '../../components/StoreButtons';

const URL_PAGINA = 'https://app.movimentoprofetico.com.br/baixar';
const DESCRICAO =
  'Mensagens, orações e lives do Movimento Profético no seu celular. Baixe gratuitamente para iPhone ou Android.';

// URLs absolutas de propósito: o layout raiz não define `metadataBase`, e sem
// ela um caminho relativo em `openGraph.images` não vira URL completa — o
// WhatsApp simplesmente não mostraria a imagem.
export const metadata: Metadata = {
  title: 'Baixe o app',
  description: DESCRICAO,
  alternates: { canonical: URL_PAGINA },
  openGraph: {
    type: 'website',
    url: URL_PAGINA,
    siteName: 'Movimento Profético',
    locale: 'pt_BR',
    title: 'Baixe o app Movimento Profético',
    description: DESCRICAO,
    images: [
      {
        url: 'https://app.movimentoprofetico.com.br/og-baixar.png',
        width: 1200,
        height: 630,
        alt: 'Igreja Movimento Profético — baixe o app gratuitamente',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baixe o app Movimento Profético',
    description: DESCRICAO,
    images: ['https://app.movimentoprofetico.com.br/og-baixar.png'],
  },
};

/**
 * Fallback de /baixar.
 *
 * Quem abre este link no celular quase nunca chega aqui: o `vercel.json`
 * redireciona Android e iPhone direto para a loja, no servidor, antes de
 * qualquer HTML. Esta página é para desktop e para user-agent que não
 * reconhecemos.
 *
 * "Não reconhecemos" inclui um caso comum de verdade: o Safari no iPad
 * anuncia-se como Mac desde o iPadOS 13. Por isso os DOIS botões aparecem
 * aqui, sem adivinhar plataforma — adivinhar erraria justamente com quem o
 * redirect já não pegou.
 *
 * Server Component sem estado e sem efeito: nenhum JavaScript vai ao navegador
 * por causa desta tela, e não há analytics nem script de terceiro.
 */
export default function Baixar() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Igreja Movimento Profético — início">
          <Image src="/logo.png" alt="" width={54} height={54} priority />
          <span className="brand-wordmark">
            <small>Igreja</small>
            <span>
              Movimento <strong>Profético</strong>
            </span>
          </span>
        </Link>
        <nav aria-label="Navegação principal">
          <Link href="/termos">Termos</Link>
          <Link href="/privacidade">Privacidade</Link>
        </nav>
      </header>

      <section className="download-shell">
        <Image
          className="download-mark"
          src="/logo.png"
          alt=""
          width={112}
          height={112}
          priority
        />
        <h1>Baixe o app Movimento Profético</h1>
        <p className="download-subtitle">
          Mensagens, orações e lives do ministério, todos os dias, no seu celular. É gratuito.
        </p>
        <StoreButtons />
        <p className="download-note">
          Escolha a loja do seu aparelho. No celular, este endereço leva direto para a loja certa.
        </p>
      </section>
    </main>
  );
}
