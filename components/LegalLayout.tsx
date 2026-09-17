import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  paragraphsAfter?: string[];
};

export function LegalLayout({
  title,
  updated,
  notice,
  intro,
  sections = [],
  subtitle,
  children,
  showContact = true,
}: {
  title: string;
  updated?: string;
  notice?: string;
  intro?: string[];
  sections?: LegalSection[];
  subtitle?: string;
  children?: ReactNode;
  showContact?: boolean;
}) {
  return (
    <main className="legal-shell">
      <header className="legal-header">
        <Link
          href="/"
          className="brand"
          aria-label="Movimento Profético — início"
        >
          <Image src="/logo.png" alt="" width={48} height={48} priority />
          <span>
            Movimento
            <br />
            <strong>Profético</strong>
          </span>
        </Link>
        <Link href="/" className="back-link">
          ← Voltar ao início
        </Link>
      </header>
      <article className="legal-document">
        <h1>{title}</h1>
        {subtitle && <p className="legal-meta">{subtitle}</p>}
        {updated && <p className="legal-meta">Última atualização: {updated}</p>}
        {notice ? <aside className="legal-notice">{notice}</aside> : null}
        {intro?.map((paragraph) => (
          <p className="legal-intro" key={paragraph}>
            {paragraph}
          </p>
        ))}
        {sections.map((section) => (
          <section className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {section.paragraphsAfter?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        {children}
        {showContact && (
          <section className="legal-section legal-contact">
            <h2>Contato</h2>
            <p>
              <strong>Igreja Movimento Profético</strong>
              <br />
              CNPJ 42.464.819/0001-50
              <br />
              Rua da Agricultura, 2104, Loteamento Industrial
              <br />
              Santa Bárbara d’Oeste/SP — CEP 13.454-005
            </p>
            <p>
              <a href="mailto:dpo@movimentoprofetico.com.br">
                dpo@movimentoprofetico.com.br
              </a>
            </p>
          </section>
        )}
      </article>
    </main>
  );
}
