import type { Metadata } from 'next';
import { LegalLayout } from '../../components/LegalLayout';
import { OpenAppButton } from '../../components/OpenAppButton';
import { StoreButtons } from '../../components/StoreButtons';
import { hasStoreLinks } from '../site-config';

export const metadata: Metadata = {
  title: 'Ação recebida',
  description: 'Continue sua solicitação no aplicativo Movimento Profético ou encontre os links para baixar o app.',
  robots: { index: false, follow: false },
  referrer: 'no-referrer',
};

export default function Confirmado() {
  return (
    <LegalLayout title="Ação recebida" subtitle="Continuando pelo aplicativo"
      notice="Recebemos sua solicitação. Se o aplicativo não abriu automaticamente, siga um dos passos abaixo."
      showContact={false}>
      <section className="legal-section legal-highlight">
        <h2>Se você já tem o aplicativo instalado</h2>
        <p>Abra o aplicativo Movimento Profético manualmente. A ação será processada assim que você entrar.</p>
        <OpenAppButton />
      </section>
      {hasStoreLinks && (
        <section className="legal-section">
          <h2>Se você não tem o aplicativo instalado</h2>
          <p>Baixe o aplicativo Movimento Profético gratuitamente:</p>
          <StoreButtons />
        </section>
      )}
      <section className="legal-section legal-contact">
        <h2>Dúvidas?</h2>
        <p>Se você continua com dificuldades, entre em contato pelo email <a href="mailto:contato@movimentoprofetico.com.br">contato@movimentoprofetico.com.br</a></p>
      </section>
    </LegalLayout>
  );
}
