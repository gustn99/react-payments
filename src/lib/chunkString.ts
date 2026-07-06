export const chunkString = (value: string, size: number) => {
  if (!value || size <= 0) return [];

  const result: string[] = [];

  for (let i = 0; i < value.length; i += size) {
    result.push(value.slice(i, i + size));
  }

  return result;
};
