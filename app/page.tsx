'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { StoreButtons } from '../components/StoreButtons';
import { hasStoreLinks } from './site-config';

type Platform = 'ios' | 'android' | 'desktop';

export default function Home() {
  const [platform, setPlatform] = useState<Platform>('desktop');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) setPlatform('ios');
    else if (/android/.test(userAgent)) setPlatform('android');
  }, []);

  return (
    <main>
      <header className="site-header">
        <Link
          href="/"
          className="brand"
          aria-label="Igreja Movimento Profético — início"
        >
          <Image src="/logo.png" alt="" width={54} height={54} priority />
          <span className="brand-wordmark">
            <small>Igreja</small>
            <span>Movimento <strong>Profético</strong></span>
          </span>
        </Link>
        <nav aria-label="Navegação principal">
          <Link href="/termos">Termos</Link>
          <Link href="/privacidade">Privacidade</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={16} /> Fé para todos os dias
          </div>
          <h1>Sua vida de oração começa aqui.</h1>
          <p className="hero-subtitle">
            Baixe o app e receba a palavra do Bispo Thiago Garcia e da Pastora
            Aline Garcia todos os dias.
          </p>

          {hasStoreLinks && (
            <>
              <StoreButtons platform={platform} />
              {platform !== 'desktop' && (
                <p className="device-note">
                  Identificamos seu dispositivo e destacamos a melhor opção para
                  você.
                </p>
              )}
            </>
          )}
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />
          {/* TODO(design): mockup profissional do app (screenshots reais).
              Placeholder temporário — não bloqueia o deploy. Ver
              scratchpad/site-lgpd-jsx/TODOS_ADVOGADO.md (ticket de design). */}
          <div
            role="img"
            aria-label="Prévia do aplicativo Movimento Profético (em breve)"
            style={{
              width: '100%',
              maxWidth: 560,
              aspectRatio: '3 / 2',
              borderRadius: 24,
              background:
                'linear-gradient(135deg, #0f5132 0%, #1a7a4e 55%, #2fae6d 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              color: '#eafff4',
              textAlign: 'center',
              padding: 24,
              boxShadow: '0 24px 60px -20px rgba(15, 81, 50, 0.55)',
            }}
          >
            <strong style={{ fontSize: 20, letterSpacing: '0.2px' }}>
              Prévia do aplicativo
            </strong>
            <span style={{ fontSize: 14, opacity: 0.85 }}>em breve</span>
          </div>
        </div>
      </section>

      <section id="recursos" className="experience" aria-labelledby="experience-title">
        <div className="section-heading">
          <span>Na palma da sua mão</span>
          <h2 id="experience-title">Um lugar para fortalecer sua fé.</h2>
          <p>
            Conteúdo preparado para acompanhar sua caminhada, onde você estiver.
          </p>
        </div>
        <div className="feature-grid">
          <article>
            <span className="feature-icon">
              <svg width={32} height={32} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8 3h17a3 3 0 0 1 3 3v18H8a1.5 1.5 0 0 0 0 3h20v3H8a4.5 4.5 0 0 1-4.5-4.5v-18A4.5 4.5 0 0 1 8 3Zm0 3a1.5 1.5 0 0 0-1.5 1.5V21H25V6H8Z" clipRule="evenodd" />
                <path d="M14.5 9h3v3h3v3h-3v6h-3v-6h-3v-3h3V9Z" />
              </svg>
            </span>
            <h3>Palavra diária</h3>
            <p>Comece o dia com uma mensagem de fé, esperança e direção.</p>
          </article>
          <article>
            <span className="feature-icon">
              <svg width={32} height={32} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M3 19a13 13 0 1 1 26 0l-2.5-1.2a10.2 10.2 0 1 0-21 0L3 19Z" />
                <path d="M8 17a6 6 0 0 0 0 12V17Zm1 0h1.8c.9 0 1.7.8 1.7 1.7v8.6c0 .9-.8 1.7-1.7 1.7H9V17Zm15 0a6 6 0 0 1 0 12V17Zm-1 0h-1.8c-.9 0-1.7.8-1.7 1.7v8.6c0 .9.8 1.7 1.7 1.7H23V17Z" />
              </svg>
            </span>
            <h3>Áudios e mensagens</h3>
            <p>Ouça conteúdos pastorais no seu tempo e do seu jeito.</p>
          </article>
          <article>
            <span className="feature-icon">
              <svg width={34} height={34} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M13.4 7V5.7a2.6 2.6 0 0 1 5.2 0V7M16 7a7 7 0 0 0-7 7v3c0 3.6-1.2 6.3-3 9h20c-1.8-2.7-3-5.4-3-9v-3a7 7 0 0 0-7-7ZM13.2 26a2.8 2.8 0 0 0 5.6 0" />
                <path d="M16 9.2a4.8 4.8 0 0 1 4.8 4.8v3c0 2.9.5 5.1 1.5 7" strokeWidth=".9" />
                <path d="M4.2 10.2a9 9 0 0 0 0 12M6.5 12.1a6 6 0 0 0 0 8.2M27.8 10.2a9 9 0 0 1 0 12M25.5 12.1a6 6 0 0 1 0 8.2" />
              </svg>
            </span>
            <h3>Sempre conectado</h3>
            <p>Receba avisos de lives, orações e novidades do ministério.</p>
          </article>
        </div>
      </section>

      <section className="pastoral-closing">
        <Image src="/logo.png" alt="" width={72} height={72} />
        <blockquote>
          “Que cada palavra encontre o seu coração e renove a sua fé para viver
          os propósitos de Deus.”
        </blockquote>
        <p>Movimento Profético</p>
      </section>

      <footer>
        <div>
          <strong>Igreja Movimento Profético</strong>
          <span>Santa Bárbara d’Oeste — SP</span>
          <a href="mailto:contato@movimentoprofetico.com.br">
            contato@movimentoprofetico.com.br
          </a>
        </div>
        <div className="footer-links">
          <Link href="/termos">Termos de Uso</Link>
          <Link href="/privacidade">Política de Privacidade</Link>
        </div>
      </footer>
    </main>
  );
}
