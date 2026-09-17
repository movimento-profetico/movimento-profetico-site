/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site 100% estático (páginas prerenderizadas) → export para HTML puro,
  // sem funções serverless. Necessário porque o deploy com runtime Next.js
  // fica preso na finalização neste plano/conta.
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
