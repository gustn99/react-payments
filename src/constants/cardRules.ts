import type { CardBrand } from '../lib/getCardBrand.ts';

interface CardRules {
  cardNumbersLength: number;
  cvcLength: number;
}

export const CARD_RULES: Record<CardBrand, CardRules> = {
  Visa: {
    cardNumbersLength: 16,
    cvcLength: 3,
  },
  MasterCard: {
    cardNumbersLength: 16,
    cvcLength: 3,
  },
  Diners: {
    cardNumbersLength: 14,
    cvcLength: 3,
  },
  AMEX: {
    cardNumbersLength: 15,
    cvcLength: 4,
  },
  UnionPay: {
    cardNumbersLength: 16,
    cvcLength: 3,
  },
  Local: {
    cardNumbersLength: 16,
    cvcLength: 3,
  },
} as const;
