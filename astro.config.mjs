// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// Saída estática: o Vercel detecta Astro e serve o dist/ direto do CDN.
// Nenhum adapter é necessário — não há rota de servidor neste projeto.
export default defineConfig({
  site: 'https://credito-lp.vercel.app', // [PLACEHOLDER] trocar pelo domínio real
  output: 'static',

  // Fontes self-hosted pela API nativa do Astro: gera @font-face + preload
  // e não faz nenhuma requisição ao Google em produção. Zero dependência.
  fonts: [
    {
      name: 'Sora',
      cssVariable: '--font-sora',
      provider: fontProviders.google(),
      weights: ['600 700'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      display: 'swap',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      name: 'Figtree',
      cssVariable: '--font-figtree',
      provider: fontProviders.google(),
      weights: ['400 600'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      display: 'swap',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  ],

  // Ícones inline em SVG a partir do set Phosphor. Nenhum request extra em runtime
  // e nenhum ícone desenhado à mão.
  integrations: [icon({ include: { ph: ['*'] } })],

  vite: {
    plugins: [tailwindcss()],
  },
});
