import type { CardBrand } from '@/lib/getCardBrand.ts';

interface CardRules {
  cardNumbersLength: number;
  cvcLength: number;
  maxLength: number[];
}

export const CARD_RULES: Record<CardBrand, CardRules> = {
  Visa: {
    cardNumbersLength: 16,
    cvcLength: 3,
    maxLength: [4, 4, 4, 4],
  },
  MasterCard: {
    cardNumbersLength: 16,
    cvcLength: 3,
    maxLength: [4, 4, 4, 4],
  },
  Diners: {
    cardNumbersLength: 14,
    cvcLength: 3,
    maxLength: [4, 4, 4, 2],
  },
  Amex: {
    cardNumbersLength: 15,
    cvcLength: 4,
    maxLength: [4, 4, 4, 3],
  },
  UnionPay: {
    cardNumbersLength: 16,
    cvcLength: 3,
    maxLength: [4, 4, 4, 4],
  },
  Local: {
    cardNumbersLength: 16,
    cvcLength: 3,
    maxLength: [4, 4, 4, 4],
  },
} as const;
