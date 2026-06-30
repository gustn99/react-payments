export const COLOR_PALETTE = {
  white: '#FFFFFF',
  black: '#000000',

  gray400: '#ACACAC', // border, placeholder
  gray500: '#8B95A1', // caption
  gray850: '#333333', // button, display

  red: '#FF3D3D',
} as const;

export type ColorPalette = keyof typeof COLOR_PALETTE;
