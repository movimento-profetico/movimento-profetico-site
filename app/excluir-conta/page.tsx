import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalLayout } from '../../components/LegalLayout';

export const metadata: Metadata = {
  title: 'Excluir conta',
  description: 'Saiba como excluir sua conta e os dados associados ao Movimento Profético pelo aplicativo ou por email.',
  robots: { index: false, follow: false },
};

export default function ExcluirConta() {
  return (
    <LegalLayout title="Excluir conta" subtitle="Como excluir sua conta do Movimento Profético"
      notice="Você pode solicitar a exclusão da sua conta e de todos os dados associados a qualquer momento. A exclusão é permanente e não pode ser desfeita."
      showContact={false}>
      <section className="legal-section legal-highlight">
        <h2>Se você tem acesso ao aplicativo</h2>
        <ol>
          <li>Abra o aplicativo Movimento Profético</li>
          <li>Toque em “Mais” no menu inferior</li>
          <li>Toque em “Perfil e configurações”</li>
          <li>Role até “Zona de perigo”</li>
          <li>Digite sua senha atual no campo “Confirme com a senha atual”</li>
          <li>Toque em “Excluir minha conta” e confirme em “Excluir definitivamente”</li>
        </ol>
        <p>Após confirmação, sua conta e todos os dados são apagados imediatamente.</p>
      </section>
      <section className="legal-section legal-highlight">
        <h2>Se você não tem acesso ao aplicativo</h2>
        <p>Envie um email para <a href="mailto:dpo@movimentoprofetico.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20exclus%C3%A3o%20de%20conta">dpo@movimentoprofetico.com.br</a> com os seguintes dados:</p>
        <ul>
          <li>Assunto do email: “Solicitação de exclusão de conta”</li>
          <li>Nome completo cadastrado</li>
          <li>E-mail cadastrado</li>
          <li>Motivo (opcional)</li>
        </ul>
        <p>Processamos a solicitação em até 15 dias úteis. Você receberá confirmação por email quando a exclusão for concluída.</p>
      </section>
      <section className="legal-section">
        <h2>O que é excluído</h2>
        <ul>
          <li>Todos os dados pessoais (nome, email, telefone, data de nascimento)</li>
          <li>Preferências de notificação e tokens de dispositivo</li>
          <li>Histórico de pedidos de oração</li>
          <li>Todas as sessões ativas</li>
          <li>Registros de uso do aplicativo</li>
        </ul>
      </section>
      <section className="legal-section">
        <h2>Prazos</h2>
        <ul>
          <li><strong>Via aplicativo:</strong> imediato</li>
          <li><strong>Via email:</strong> até 15 dias úteis</li>
          <li><strong>Confirmação:</strong> enviada por email</li>
        </ul>
      </section>
      <section className="legal-section legal-contact">
        <h2>Dúvidas?</h2>
        <p>Entre em contato pelo email <a href="mailto:dpo@movimentoprofetico.com.br">dpo@movimentoprofetico.com.br</a> ou consulte nossa <Link href="/privacidade">Política de Privacidade</Link>.</p>
      </section>
    </LegalLayout>
  );
}
