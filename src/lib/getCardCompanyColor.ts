import { CARD_COMPANIES, type CardCompany } from '@/constants/cardCompanies.ts';
import { COLOR_PALETTE } from '@/styles/colorPalette.ts';

export const getCardCompanyColor = (cardCompany: CardCompany | undefined) =>
  cardCompany ? CARD_COMPANIES[cardCompany].color : COLOR_PALETTE.gray850;
