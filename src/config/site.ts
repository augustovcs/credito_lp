/**
 * Fonte única de verdade do site.
 *
 * ATENÇÃO: este é um projeto DEMO. "Bonança" é uma marca fictícia e todos os
 * dados institucionais abaixo são placeholders. Nenhum CNPJ, telefone, taxa ou
 * endereço aqui corresponde a uma empresa real, e nenhum deles foi inventado
 * para parecer real: todos carregam o prefixo [PLACEHOLDER] justamente para
 * impedir que a página vá ao ar com dado falso de instituição financeira.
 *
 * Para publicar de verdade, substitua tudo que está marcado e remova os
 * prefixos. Enquanto houver [PLACEHOLDER] no rodapé, a página não está apta a
 * ir ao ar num produto de crédito regulado.
 */

export const brand = {
  name: 'Bonança',
  legalName: '[PLACEHOLDER: Razão Social Ltda.]',
  tagline: 'Crédito consignado sem letra miúda',
  description:
    'Consignado para aposentados, pensionistas do INSS e trabalhadores CLT, com simulação na hora e contratação digital.',
} as const;

export const contact = {
  /** Só dígitos, formato internacional. O link wa.me é montado a partir daqui. */
  whatsapp: '5500000000000', // [PLACEHOLDER]
  whatsappLabel: '[PLACEHOLDER: (00) 00000-0000]',
  phoneCapitais: '[PLACEHOLDER: 4000 0000]',
  phoneOutras: '[PLACEHOLDER: 0800 000 0000]',
  ouvidoria: '[PLACEHOLDER: 0800 000 0000]',
  email: '[PLACEHOLDER: contato@exemplo.com.br]',
  hours: 'Segunda a sexta, 8h às 20h. Sábado, 8h às 16h.',
} as const;

export const legal = {
  cnpj: '[PLACEHOLDER: 00.000.000/0001-00]',
  address: '[PLACEHOLDER: Rua Exemplo, 000, Bairro, Cidade/UF, CEP 00000-000]',
  /**
   * Correspondente bancário precisa nomear a instituição financeira parceira.
   * Sem isso o material é irregular perante a Resolução CMN 4.935/2021.
   */
  partnerBank: '[PLACEHOLDER: Nome da Instituição Financeira S.A., CNPJ 00.000.000/0001-00]',
} as const;

/**
 * Parâmetros usados pelo simulador.
 *
 * As taxas são ILUSTRATIVAS e existem só para a conta fechar na tela. Toda
 * saída do simulador é rotulada como simulação, nunca como proposta de crédito.
 * Substitua pelos valores contratados com a instituição parceira.
 */
export const rates = {
  inss: {
    label: 'Consignado INSS',
    monthlyRate: 0.0166, // [PLACEHOLDER] 1,66% a.m.
    minMonths: 6,
    maxMonths: 84,
    /** Margem consignável: 35% do benefício, sendo 30% empréstimo e 5% cartão. */
    marginPct: 0.3,
  },
  clt: {
    label: 'Consignado CLT',
    monthlyRate: 0.0179, // [PLACEHOLDER] 1,79% a.m.
    minMonths: 6,
    maxMonths: 60,
    /** Margem do Crédito do Trabalhador: até 35% do salário. */
    marginPct: 0.35,
  },
  fgts: {
    label: 'Antecipação FGTS',
    monthlyRate: 0.0179, // [PLACEHOLDER] 1,79% a.m.
    /** Quantidade de saques-aniversário antecipáveis. */
    maxYears: 5,
  },
} as const;

/**
 * DEPOIMENTOS FICTÍCIOS.
 *
 * Foram escritos para a demo. Não são clientes reais e não podem ir ao ar como
 * se fossem: publicar depoimento inventado como verdadeiro é publicidade
 * enganosa (CDC art. 37) e, em produto financeiro, problema com o regulador.
 * Substitua por depoimentos reais, com autorização de uso de imagem e nome.
 */
export const depoimentos = [
  {
    quote:
      'Simulei às onze da noite e a parcela que apareceu na tela foi a mesma do contrato. Não teve surpresa no meio do caminho.',
    name: 'Marlene Aparecida Ruiz',
    role: 'Aposentada, Sorocaba/SP',
  },
  {
    quote:
      'Eu já tinha consignado em outro banco. Fiz a portabilidade e minha parcela caiu quase cem reais por mês.',
    name: 'Sebastião do Carmo Vieira',
    role: 'Pensionista, Feira de Santana/BA',
  },
  {
    quote:
      'Antecipei três saques do FGTS pra consertar o telhado. O dinheiro entrou no mesmo dia e ninguém me ligou depois oferecendo outra coisa.',
    name: 'Cleide Nogueira Pinto',
    role: 'Auxiliar de produção, Contagem/MG',
  },
] as const;

export const nav = [
  { href: '/consignado-inss', label: 'INSS' },
  { href: '/consignado-clt', label: 'CLT' },
  { href: '/antecipacao-fgts', label: 'FGTS' },
  { href: '/simulador', label: 'Simulador' },
] as const;

/** Monta o link do WhatsApp com a mensagem já preenchida. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
