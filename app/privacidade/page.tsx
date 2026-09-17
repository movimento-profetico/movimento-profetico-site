import type { Metadata } from 'next';
import { LegalLayout, type LegalSection } from '../../components/LegalLayout';

export const metadata: Metadata = { title: 'Política de Privacidade' };

const sections: LegalSection[] = [
  {
    title: '1. Quem é o controlador dos dados',
    bullets: [
      'Controlador: IGREJA MOVIMENTO PROFÉTICO',
      'Nome fantasia: MOVIMENTO PROFÉTICO',
      'CNPJ: 42.464.819/0001-50',
      'Endereço: Rua da Agricultura, 2104, Loteamento Industrial, Santa Bárbara d’Oeste/SP, CEP 13.454-005',
      'Representante legal: Bispo Thiago de Almeida Garcia',
      'Canal de privacidade e proteção de dados: dpo@movimentoprofetico.com.br',
      'Encarregado (pessoa jurídica): IGREJA MOVIMENTO PROFÉTICO — CNPJ 42.464.819/0001-50. Responsável natural: Bispo Thiago de Almeida Garcia (representante legal). Contato: dpo@movimentoprofetico.com.br',
    ],
  },
  {
    // AJUSTE nosso (Matheus + Bispo aprovaram) — inclui o site do app
    // (app.movimentoprofetico.com.br) além do institucional. O DOCX oficial do
    // advogado ainda tem a redação antiga em parágrafo único; notificar na
    // próxima revisão. Ver scratchpad/site-lgpd-jsx/TODOS_ADVOGADO.md.
    title: '2. A que esta Política se aplica',
    paragraphs: ['Esta Política se aplica:'],
    bullets: [
      'ao aplicativo móvel Movimento Profético para Android e iOS;',
      'ao site do aplicativo em app.movimentoprofetico.com.br;',
      'ao site institucional da Igreja em movimentoprofetico.com.br/movigreja;',
      'e aos fluxos diretamente relacionados ao serviço, incluindo criação e gerenciamento de conta, notificações, pedidos de oração, recuperação de senha e atendimento de solicitações de privacidade.',
    ],
    paragraphsAfter: [
      'Links que levam a plataformas externas, como YouTube, WhatsApp, páginas de doação, são regidos também pelas políticas próprias desses terceiros. Ao abrir um serviço externo, o tratamento realizado por esse terceiro deixa de estar sob controle exclusivo da Igreja.',
    ],
  },
  {
    title: '3. Uso do aplicativo sem cadastro e criação de conta',
    paragraphs: [
      'O cadastro é opcional. O usuário pode acessar o conteúdo principal do aplicativo sem criar conta. A criação de conta serve para funcionalidades de personalização e gerenciamento, como saudação pelo nome, troca de e-mail, redefinição de senha e exclusão da própria conta.',
      'As contas são destinadas a pessoas com 13 anos ou mais. Menores de 13 anos podem consumir conteúdos adequados à idade sob orientação e responsabilidade de seus pais ou responsáveis, mas não devem criar conta própria nem enviar, de forma autônoma, dados pessoais por formulários do aplicativo.',
      'No tratamento de dados de crianças e adolescentes, quando aplicável, a Igreja observará o melhor interesse, a proteção integral, a minimização de dados e as demais regras da LGPD, do Estatuto da Criança e do Adolescente e do Estatuto Digital da Criança e do Adolescente (ECA Digital). A classificação etária da loja (“Livre”) se refere ao conteúdo e não substitui regras de privacidade ou elegibilidade para criação de conta.',
    ],
  },
  {
    title: '4. Quais dados podem ser tratados',
    paragraphs: [
      'Dependendo das funcionalidades utilizadas, podem ser tratadas as categorias abaixo (dados, finalidade e retenção resumida):',
    ],
    bullets: [
      'Conta cadastrada — nome completo, e-mail, credencial de autenticação protegida por hash/verificador e identificador da conta. Finalidade: criar e manter a conta, autenticar, personalizar e permitir gerenciamento e exclusão. Retenção: enquanto a conta estiver ativa; após exclusão, remoção dos sistemas ativos, observadas cópias de segurança e retenções técnicas.',
      'Dados opcionais do perfil — data de nascimento e telefone. Finalidade: a data de nascimento é usada para envio de mensagem de feliz aniversário por e-mail, somente para quem optar por informar o dado e autorizar essa finalidade; o telefone complementa o perfil/contato conforme a funcionalidade informada. Retenção: data de nascimento enquanto a autorização estiver válida e a conta permanecer ativa, ou até o usuário remover o dado/revogar a autorização; telefone enquanto necessário e enquanto a conta estiver ativa, ou até retirada/alteração.',
      'Dados técnicos — identificador da instalação/dispositivo usado pelo app, token de push, endereço IP e registros técnicos de uso. Finalidade: segurança, prevenção de abuso, rate limit, funcionamento técnico e entrega de notificações. Retenção: IP e registros de visualização por 90 dias, conforme informado; token de push enquanto ativo e até 90 dias após inatividade no banco da Igreja.',
      'Pedido de oração — nome informado e texto livre do pedido. Finalidade: encaminhar o pedido aos pastores/administradores autorizados. Retenção: 90 dias, com exclusão automática conforme regra informada.',
      'Interações de conteúdo — registro de visualizações necessário ao controle antiabuso/rate limit. Finalidade: segurança e estabilidade do serviço; não é utilizado para publicidade comportamental. Retenção: 90 dias.',
      'Comunicações transacionais — e-mail e metadados mínimos necessários ao envio. Finalidade: redefinição de senha, confirmação de troca de e-mail e comunicações essenciais da conta. Retenção: pelo período necessário ao envio, segurança e registros operacionais dos provedores.',
      'Registros de consentimento e exclusão — versão do aviso/consentimento aceito, data e evidência técnica minimizada, log de exclusão sem PII direta, conforme implementação. Finalidade: demonstrar conformidade, atender direitos, segurança e exercício regular de direitos. Retenção: pelo prazo estritamente necessário à finalidade e à defesa de direitos, com minimização e pseudonimização quando possível.',
    ],
  },
  {
    title: '5. Bases legais utilizadas',
    paragraphs: [
      'O tratamento não se apoia em um único “consentimento geral”. A base legal depende da finalidade. Entre as hipóteses aplicáveis estão:',
      'Para a data de nascimento opcional, a finalidade é específica: enviar uma mensagem de feliz aniversário por e-mail. Esse uso deverá depender de autorização livre, informada, inequívoca e revogável, separada de marketing ou de outros consentimentos. A recusa ou revogação não deve impedir o uso normal da conta.',
    ],
    bullets: [
      'Execução de contrato ou de procedimentos solicitados pelo titular — dados necessários para criar, autenticar, manter e excluir a conta e prestar funcionalidades pedidas pelo usuário; art. 7º, V, da LGPD.',
      'Consentimento — dados opcionais quando não houver outra base adequada, notificações não essenciais e tratamento do conteúdo de pedido de oração quando a informação puder envolver dados sensíveis; arts. 7º, I, e, quando aplicável, 11, I, da LGPD.',
      'Legítimo interesse — segurança, prevenção de abuso, rate limit e proteção do serviço, mediante necessidade, proporcionalidade e salvaguardas; art. 7º, IX, da LGPD.',
      'Cumprimento de obrigação legal/regulatória e exercício regular de direitos — quando for necessário conservar evidências mínimas, responder autoridades ou proteger direitos; arts. 7º, II e VI, da LGPD.',
    ],
  },
  {
    title: '6. Pedidos de oração e dados potencialmente sensíveis',
    paragraphs: [
      'O pedido de oração é um campo de texto livre. Por sua natureza, o usuário pode, voluntariamente, inserir informações que revelem convicção religiosa, condição de saúde, situação familiar ou outros dados que possam receber proteção reforçada.',
      'A Igreja não exige diagnóstico médico, documentos, endereço, CPF, dados bancários ou detalhes íntimos para receber um pedido de oração. O usuário deve fornecer apenas o mínimo necessário. Evite inserir dados de outras pessoas sem autorização e, sempre que possível, use apenas primeiro nome ou descrição genérica.',
      'Antes do envio, deve ser exibido consentimento destacado para o tratamento do conteúdo do pedido pelo prazo informado. O pedido não é publicado para outros usuários; ele é acessível apenas a pessoas autorizadas da administração/pastoral, conforme o fluxo informado.',
    ],
  },
  {
    title: '7. Notificações push',
    paragraphs: [
      'O Movimento Profético pode enviar notificações sobre lives, novos áudios, mensagens e avisos da Igreja. As notificações são opcionais e dependem da permissão do sistema operacional. O usuário pode recusá-las ou desativá-las a qualquer momento nas configurações do Android ou iOS.',
      'Para entregar a notificação, podem ser tratados identificadores técnicos do aplicativo/dispositivo, como tokens de push, por meio do Expo Push Service, Firebase Cloud Messaging no Android e Apple Push Notification Service no iOS.',
    ],
  },
  {
    title: '8. Com quem os dados podem ser tratados ou compartilhados',
    paragraphs: [
      'Os dados podem ser tratados ou compartilhados com os prestadores/terceiros abaixo, cada um no seu papel:',
    ],
    bullets: [
      'Supabase — banco de dados, autenticação e storage. Projeto principal informado na região sa-east-1 (São Paulo, Brasil).',
      'Expo Push Service — intermediação técnica do envio de notificações push para FCM/APNs.',
      'Google Firebase Cloud Messaging (FCM) — entrega de notificações em Android e identificadores técnicos relacionados à instalação/registro.',
      'Apple Push Notification Service (APNs) — entrega de notificações em iOS.',
      'Amazon Web Services SES — envio de e-mails transacionais, como redefinição de senha e confirmação de troca de e-mail, e envio da mensagem de feliz aniversário quando o usuário tiver optado por informar a data de nascimento e autorizado essa finalidade.',
      'Vercel — hospedagem do site institucional e CRM administrativo; pode processar dados técnicos de conexão e logs necessários à entrega e segurança da hospedagem.',
      'YouTube — plataforma externa de lives; o aplicativo redireciona o usuário para o serviço externo.',
      'WhatsApp — canal externo aberto por iniciativa do usuário para contato; o tratamento posterior segue também as regras do WhatsApp.',
    ],
    paragraphsAfter: [
      'A Igreja não vende dados pessoais e não utiliza Google Analytics, Meta Pixel, Hotjar, Mixpanel, Amplitude, OneSignal, RevenueCat, Sentry, AdMob ou SDK de publicidade comportamental/tracking cross-app, conforme o desenho informado para esta versão.',
    ],
  },
  {
    title: '9. Transferências internacionais de dados',
    paragraphs: [
      'Embora o banco principal tenha sido informado como configurado em São Paulo, alguns prestadores técnicos operam infraestrutura ou empresas fora do Brasil, inclusive nos Estados Unidos, como serviços de push, e-mail e hospedagem. Nessas situações, a Igreja deve observar os arts. 33 a 36 da LGPD e a Resolução CD/ANPD nº 19/2024, adotando mecanismo válido de transferência internacional e salvaguardas contratuais e técnicas apropriadas.',
      'A transferência deve ser limitada ao mínimo necessário para a finalidade do serviço. A equipe responsável deve manter registro dos operadores, países/regiões envolvidos e instrumentos contratuais vigentes.',
    ],
  },
  {
    title: '10. Retenção e exclusão',
    paragraphs: [
      'A Igreja mantém dados somente pelo tempo necessário à finalidade informada, conforme prazos descritos nesta Política e obrigações legais aplicáveis. Os pedidos de oração, endereços IP mantidos pela aplicação e registros de visualização informados têm regra de 90 dias. Dados de cadastro permanecem enquanto a conta estiver ativa.',
      'Quando a conta é excluída, os dados associados devem ser removidos dos sistemas ativos sem demora indevida, incluindo perfil, registros de autenticação, sessões ativas, tokens de push, visualizações e pedidos de oração associados conforme o desenho informado. Cópias residuais podem permanecer temporariamente em backups e registros técnicos de operadores pelo prazo estritamente necessário à recuperação, segurança ou obrigação legal.',
      'O prazo de backups do banco principal é de até 7 dias, conforme o plano de produção do Supabase.',
    ],
  },
  {
    title: '11. Exclusão da conta',
    paragraphs: [
      'Usuários cadastrados podem iniciar a exclusão em “Sua Conta” > “Excluir minha conta”, com confirmação da senha atual. A ação é irreversível.',
      'A exclusão da conta não impede a manutenção de evidências estritamente necessárias para obrigação legal, segurança ou exercício regular de direitos, desde que minimizadas e claramente informadas.',
    ],
  },
  {
    title: '12. Direitos do titular',
    paragraphs: ['Nos termos da LGPD, o titular poderá solicitar, quando aplicável:'],
    bullets: [
      'confirmação da existência de tratamento;',
      'acesso aos dados pessoais;',
      'correção de dados incompletos, inexatos ou desatualizados;',
      'anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade;',
      'portabilidade, quando aplicável e regulamentada;',
      'informação sobre compartilhamentos;',
      'revogação do consentimento e informação sobre suas consequências, quando o tratamento depender de consentimento;',
      'eliminação de dados tratados com consentimento, observadas as exceções legais;',
      'oposição a tratamento realizado em desconformidade com a LGPD;',
      'petição perante a ANPD, observados os procedimentos aplicáveis.',
    ],
    paragraphsAfter: [
      'Solicitações podem ser encaminhadas para dpo@movimentoprofetico.com.br. Poderemos solicitar informações proporcionais para confirmar a identidade do requerente e evitar acesso indevido a dados de terceiros.',
    ],
  },
  {
    title: '13. Segurança da informação',
    paragraphs: [
      'A Igreja adota medidas técnicas e administrativas compatíveis com o risco do tratamento. O desenho informado inclui acesso administrativo restrito, MFA obrigatório no CRM, autenticação gerenciada pelo Supabase Auth e senhas armazenadas por mecanismo de hash/verificação, não em texto simples.',
      'Nenhum sistema é absolutamente imune a riscos. Em caso de incidente de segurança com potencial risco ou dano relevante, serão adotadas as providências de contenção, investigação, registro e comunicação exigidas pela legislação e pela regulamentação da ANPD.',
    ],
  },
  {
    title: '14. Site, cookies e tecnologias similares',
    paragraphs: [
      'O site app.movimentoprofetico.com.br foi informado como site estático, sem Google Analytics, pixels, chat widget, publicidade ou cookies próprios/terceiros para rastreamento. Por isso, no desenho atual, não é necessário exibir banner de consentimento de cookies.',
      'Mesmo sem cookies, o provedor de hospedagem pode processar dados técnicos de conexão, como endereço IP e logs de requisição, para entregar, proteger e operar a infraestrutura. Se no futuro forem ativados analytics, pixels, cookies, chat, remarketing ou tecnologias equivalentes, esta Política deverá ser atualizada antes da ativação e o mecanismo de consentimento deverá ser reavaliado.',
    ],
  },
  {
    title: '15. Links externos e doações',
    paragraphs: [
      'O aplicativo pode exibir links para YouTube, WhatsApp, páginas de consagração e informações como chave PIX. O Movimento Profético não processa pagamentos no aplicativo, não recebe dados de cartão, não oferece assinatura nem compra in-app conforme a versão informada.',
      'Ao copiar uma chave PIX ou abrir o aplicativo do banco, a operação financeira ocorre fora do Movimento Profético. A instituição financeira e outros serviços externos aplicam seus próprios termos e políticas.',
    ],
  },
  {
    title: '16. Alterações desta Política',
    paragraphs: [
      'Esta Política poderá ser atualizada para refletir mudanças no aplicativo, em fornecedores, na legislação ou em orientações regulatórias. A versão e a data de atualização serão indicadas no topo da página. Mudanças relevantes poderão ser comunicadas pelo aplicativo ou por outro canal apropriado.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      updated="15/09/2026"
      sections={sections}
    />
  );
}
