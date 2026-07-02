export const validateExpirationDateMonth = (value: string) => {
  if (Number(value) < 1 || Number(value) > 12) {
    throw new Error('월을 올바르게 입력해 주세요.');
  }
};

export const validateExpirationDateYear = (value: string) => {
  if (Number(value) < 26 || Number(value) > 31) {
    throw new Error('년도를 올바르게 입력해 주세요.');
  }
};
