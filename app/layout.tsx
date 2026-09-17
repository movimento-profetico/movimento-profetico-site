import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import './reset.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Movimento Profético',
    template: '%s | Movimento Profético',
  },
  description:
    'Baixe o aplicativo Movimento Profético e receba mensagens, orações e conteúdos do ministério todos os dias.',
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
