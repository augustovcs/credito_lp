# Bonança — landing page de crédito consignado

Landing page estática de uma empresa de crédito consignado, com simulador que roda
inteiramente no navegador. Astro + Tailwind v4, saída estática, pronta para o Vercel.

> **Esta é uma demo.** "Bonança" é uma marca fictícia e todos os dados institucionais
> são placeholders. Leia [Antes de publicar](#antes-de-publicar).

## Rodar


```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o dist/
```

## Deploy no Vercel

Importe o repositório. O Vercel detecta Astro sozinho e usa `npm run build` com saída em
`dist/`. Não há adapter nem função de servidor: tudo é HTML, CSS e imagem estáticos servidos
pelo CDN. Antes de publicar, troque `site` no `astro.config.mjs` pelo domínio real, senão as
URLs canônicas e as tags Open Graph apontam para o lugar errado.

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Home: hero, bento de produtos, simulador, diferenciais, depoimentos, blocos FGTS e INSS, FAQ |
| `/consignado-inss` | Consignado para aposentados e pensionistas |
| `/consignado-clt` | Crédito do Trabalhador, com desconto em folha |
| `/antecipacao-fgts` | Antecipação do saque-aniversário, com a tabela legal |
| `/simulador` | Página dedicada ao cálculo |

## Decisões técnicas

**Zero JavaScript de framework.** Astro não envia runtime por padrão e não há nenhuma ilha
hidratada. O JS da página é só o do simulador e o da validação do formulário, ambos escritos à
mão. Nas peças que costumam virar dependência, o recurso nativo resolveu:

| O que | Como | Em vez de |
|---|---|---|
| Abas CLT/INSS/FGTS | `radio` + seletor `:checked +` em CSS | biblioteca de tabs |
| Acordeão do FAQ | `<details>` / `<summary>` | biblioteca de accordion |
| Menu mobile | `<details>` | JS de toggle |
| Moeda em BRL | `Intl.NumberFormat('pt-BR')` | dinero.js, currency.js |
| Validação de formulário | Constraint Validation API + `:user-invalid` | zod, formik |
| Revelar ao rolar | `animation-timeline: view()` em CSS | GSAP, Motion |
| Imagens responsivas | `astro:assets` (WebP, dimensões, lazy) | sharp na mão |
| Fontes self-hosted | API de fontes nativa do Astro | `@fontsource`, `<link>` pro Google |

Dependências totais: `astro`, `astro-icon`, `tailwindcss`, `@tailwindcss/vite`, `@iconify-json/ph`.

**Onde ficam as coisas.** `src/config/site.ts` concentra marca, contatos, dados legais, taxas e
depoimentos. Editar ali muda o site inteiro.

## Acessibilidade

O público principal é 60+, então isso não é enfeite:

- Corpo base em 18px, contraste conferido par a par
- Alvos de toque com no mínimo 44px (os botões têm 52px)
- `prefers-reduced-motion` desliga toda animação
- Foco sempre visível, skip link, navegação completa por teclado
- Sem overflow horizontal em 375px

**Cuidado com o laranja.** Ele é traiçoeiro como fundo de texto. Medições reais:

| Par | Contraste | AA (4,5:1) |
|---|---|---|
| `#c2410c` + branco | 5,18:1 | passa |
| `#ea580c` + branco | 3,56:1 | **reprova** |
| branco 90% sobre `#c2410c` | 4,48:1 | **reprova** |
| branco 80% sobre `#c2410c` | 3,85:1 | **reprova** |
| branco 70% sobre `#1c1917` | 9,02:1 | passa |

Daí as duas regras do projeto: botão primário e texto de ação usam `brand-600`, nunca
`brand-500`; e sobre fundo laranja o texto é branco puro, sem opacidade. O `brand-500` fica
para ícone, número grande e bloco decorativo.

## Antes de publicar

1. **Trocar todo `[PLACEHOLDER: ...]`** em `src/config/site.ts`. Enquanto houver algum, o rodapé
   mostra o texto cru na tela. Isso é intencional: num produto de crédito regulado, um CNPJ ou
   uma taxa inventada que pareça real é documento falso, não placeholder.
2. **Nomear a instituição financeira parceira.** Correspondente bancário é obrigado a
   identificar quem concede o crédito (Res. CMN 4.935/2021).
3. **Substituir os depoimentos.** Os de `src/config/site.ts` são fictícios. Publicar depoimento
   inventado como se fosse real é publicidade enganosa (CDC art. 37).
4. **Revisar as taxas do simulador.** As de hoje são ilustrativas e existem só para a conta
   fechar na tela.
5. **Ligar o envio do formulário.** Hoje ele valida e mostra sucesso local, sem enviar nada
   (verificado: zero requisições de rede no submit). O CTA do WhatsApp aponta para um número
   placeholder.
6. **Definir `site`** no `astro.config.mjs`.

## Imagens

Todas do Unsplash, sob a Unsplash License (uso comercial livre, sem atribuição obrigatória).
Só foram aceitos arquivos de `images.unsplash.com`; o acervo `plus.unsplash.com` é o Unsplash+
pago e foi descartado. Os IDs estão em `src/assets/CREDITS.md`.
