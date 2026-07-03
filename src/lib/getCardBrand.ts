export type CardBrand = 'Visa' | 'MasterCard' | 'Diners' | 'AMEX' | 'UnionPay' | 'Local';

export const getCardBrand = (cardNumber: string): CardBrand => {
  const cleanNumber = cardNumber.replace(/\D/g, '');

  if (cleanNumber.startsWith('4')) {
    return 'Visa';
  }

  if (/^5[1-5]/.test(cleanNumber)) {
    return 'MasterCard';
  }

  if (cleanNumber.startsWith('36')) {
    return 'Diners';
  }

  if (/^3[47]/.test(cleanNumber)) {
    return 'AMEX';
  }

  const prefix6 = parseInt(cleanNumber.slice(0, 6), 10);
  if (prefix6 >= 622126 && prefix6 <= 622925) {
    return 'UnionPay';
  }

  const prefix3 = parseInt(cleanNumber.slice(0, 3), 10);
  if (prefix3 >= 624 && prefix3 <= 626) {
    return 'UnionPay';
  }

  const prefix4 = parseInt(cleanNumber.slice(0, 4), 10);
  if (prefix4 >= 6282 && prefix4 <= 6288) {
    return 'UnionPay';
  }

  return 'Local';
};
