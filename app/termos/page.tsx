import type { Metadata } from 'next';
import { LegalLayout, type LegalSection } from '../../components/LegalLayout';

export const metadata: Metadata = { title: 'Termos de Uso' };

const intro = [
  'Estes Termos de Uso regulam o acesso e a utilização do aplicativo Movimento Profético e de suas funcionalidades. Ao utilizar o aplicativo, o usuário concorda em respeitar estes Termos e a legislação aplicável. Para criação de conta, o aceite deverá ser apresentado de forma clara no fluxo de cadastro.',
];

const sections: LegalSection[] = [
  {
    title: '1. Identificação do serviço',
    paragraphs: [
      'O Movimento Profético é disponibilizado pela IGREJA MOVIMENTO PROFÉTICO, CNPJ 42.464.819/0001-50, com sede na Rua da Agricultura, 2104, Loteamento Industrial, Santa Bárbara d’Oeste/SP, CEP 13.454-005.',
    ],
  },
  {
    title: '2. Finalidade do aplicativo',
    paragraphs: [
      'O aplicativo disponibiliza conteúdo religioso e institucional, incluindo timeline de publicações, áudios pastorais, lives por redirecionamento ao YouTube, calendário de eventos, conteúdos em destaque, informações sobre Consagração dos Meses e Brecha, notificações e pedidos de oração.',
    ],
  },
  {
    title: '3. Cadastro opcional',
    paragraphs: [
      'O usuário pode utilizar o conteúdo principal sem cadastro. A conta é opcional e permite funcionalidades adicionais de personalização e gerenciamento. O login é realizado por e-mail e senha, sem login por Google, Apple, telefone/SMS ou Magic Link, conforme a versão informada.',
    ],
  },
  {
    title: '4. Idade',
    paragraphs: [
      'A criação de conta é destinada a pessoas com 13 anos ou mais. Menores de 13 anos podem consumir conteúdo adequado à idade sob orientação e responsabilidade de pais ou responsáveis, mas não devem criar conta própria nem enviar autonomamente dados pessoais. Para menores de 18 anos, serão observados o melhor interesse, a proteção integral e as regras aplicáveis.',
    ],
  },
  {
    title: '5. Responsabilidade pelas credenciais',
    paragraphs: [
      'O usuário deve manter sua senha confidencial, utilizar credenciais próprias e comunicar suspeitas de uso indevido. A Igreja pode aplicar medidas de segurança, encerrar sessões e restringir acessos quando necessário para proteger usuários, dados ou a integridade do serviço.',
    ],
  },
  {
    title: '6. Uso adequado',
    paragraphs: [
      'É proibido tentar invadir, testar vulnerabilidades sem autorização, automatizar abusivamente requisições, burlar rate limits, interferir na operação, usar o serviço para fraude, praticar ilícitos ou violar direitos de terceiros.',
    ],
  },
  {
    title: '7. Pedidos de oração',
    paragraphs: [
      'O pedido de oração é privado e destinado à leitura por pessoas autorizadas da Igreja. O usuário deve inserir apenas informações necessárias e evitar CPF, endereço, telefone, dados bancários, ou dados de terceiros sem autorização. O pedido pode ser excluído conforme a política de retenção.',
    ],
  },
  {
    title: '8. Conteúdo religioso',
    paragraphs: [
      'Orações, mensagens e conteúdos do aplicativo possuem finalidade religiosa, espiritual e informativa. Eles não substituem atendimento médico, psicológico, jurídico, financeiro ou de emergência quando tais serviços forem necessários.',
    ],
  },
  {
    title: '9. Direitos autorais e propriedade intelectual',
    paragraphs: [
      'Textos, áudios, vídeos, imagens, marcas, layouts e demais conteúdos próprios do Movimento Profético são protegidos pela legislação aplicável. O acesso ao app não transfere propriedade ou licença para exploração comercial do conteúdo, salvo autorização expressa.',
    ],
  },
  {
    title: '10. Conteúdo administrativo e comunicação',
    paragraphs: [
      'As publicações são inseridas por administradores autorizados. O aplicativo não oferece comentários públicos, mensagens diretas entre usuários, perfis públicos ou publicação de conteúdo por usuários.',
    ],
  },
  {
    title: '11. Notificações',
    paragraphs: [
      'As notificações são opcionais. O usuário pode aceitar ou recusar o pedido do sistema operacional e pode desativá-las a qualquer momento nas configurações do dispositivo.',
    ],
  },
  {
    title: '12. Links externos',
    paragraphs: [
      'O app pode abrir YouTube, WhatsApp, sites institucionais, lojas de aplicativos e outros serviços. A Igreja não controla integralmente a disponibilidade, segurança ou tratamento de dados realizado por esses terceiros.',
    ],
  },
  {
    title: '13. Doações e PIX',
    paragraphs: [
      'O aplicativo não processa pagamentos, assinaturas ou compras in-app na versão informada. Eventuais chaves PIX ou valores sugeridos são informações para doação voluntária. A transação ocorre diretamente no banco do usuário, fora do aplicativo.',
    ],
  },
  {
    title: '14. Disponibilidade',
    paragraphs: [
      'A Igreja buscará manter o serviço funcional e seguro, mas poderá realizar manutenção, corrigir falhas, alterar funcionalidades ou suspender temporariamente partes do serviço por motivos técnicos, de segurança, legais ou operacionais.',
    ],
  },
  {
    title: '15. Privacidade',
    paragraphs: [
      'O tratamento de dados pessoais é explicado na Política de Privacidade do Movimento Profético, que integra estes Termos para fins de transparência.',
    ],
  },
  {
    title: '16. Alteração de e-mail e senha',
    paragraphs: [
      'Usuários cadastrados podem solicitar redefinição de senha. A troca de e-mail deverá seguir o mecanismo de confirmação informado pelo aplicativo, incluindo validação nos endereços envolvidos quando aplicável.',
    ],
  },
  {
    title: '17. Exclusão da conta',
    paragraphs: [
      'O usuário pode excluir a conta pela área “Sua Conta” > “Excluir minha conta”, com confirmação de segurança. A exclusão é irreversível e seguirá a Política de Retenção e Exclusão.',
    ],
  },
  {
    title: '18. Alterações destes Termos',
    paragraphs: [
      'Os Termos poderão ser atualizados quando houver mudanças no serviço, na legislação ou nas práticas operacionais. A data da versão vigente será exibida nesta página.',
    ],
  },
  {
    title: '19. Lei aplicável e solução de controvérsias',
    paragraphs: [
      'Aplicam-se as leis brasileiras. Eventuais controvérsias serão tratadas perante o foro competente segundo a legislação aplicável, preservados os direitos de consumidores e titulares de dados.',
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Termos de Uso"
      updated="15/09/2026"
      intro={intro}
      sections={sections}
    />
  );
}
