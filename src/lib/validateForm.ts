import { CARD_RULES } from '../constants/cardRules.ts';
import { getCardBrand } from './getCardBrand.ts';

export const validateCardNumbers = (value: string) => {
  const cardBrand = getCardBrand(value);
  const length = CARD_RULES[cardBrand].cardNumbersLength;

  if (!validateLength(value, length)) {
    throw new Error(`카드 번호는 ${length}자리 숫자입니다.`);
  }
};

export const validateExpirationDateMonth = (value: string) => {
  if (!validateRange(Number(value), 1, 12) || !validateLength(value, 2)) {
    throw new Error('월을 올바르게 입력해 주세요.');
  }
};

export const validateExpirationDateYear = (value: string) => {
  const currentYear = new Date().getFullYear() % 100;

  if (!validateRange(Number(value), currentYear, currentYear + 5)) {
    throw new Error('년도를 올바르게 입력해 주세요.');
  }
};

export const validateCvc = (value: string, cardNumbers: string) => {
  const cardBrand = getCardBrand(cardNumbers);
  const length = CARD_RULES[cardBrand].cvcLength;

  if (!validateLength(value, length)) {
    throw new Error(`CVC 번호는 ${length}자리 숫자입니다.`);
  }
};

export const validatePassword = (value: string) => {
  if (!validateLength(value, 2)) {
    throw new Error('비밀번호 앞 2자리를 입력해 주세요.');
  }
};

const validateRange = (value: number, min: number, max: number) => value >= min && value <= max;

const validateLength = (value: string, length: number) => value.length === length;
