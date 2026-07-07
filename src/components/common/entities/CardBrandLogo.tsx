import styled from '@emotion/styled';
import type { CardBrand } from '../../../lib/getCardBrand.ts';
import { COLOR_PALETTE } from '../../../styles/colorPalette.ts';
import Flex from '../shared/Flex.tsx';

interface CardBrandLogoProps {
  cardBrand: CardBrand;
}

type CardBrandWithoutLocal = Exclude<CardBrand, 'Local'>;

export default function CardBrandLogo({ cardBrand = 'Local' }: CardBrandLogoProps) {
  if (cardBrand === 'Local') return null;
  return (
    <Wrapper cardBrand={cardBrand} justify="center" align="center">
      <Logo src={`/${cardBrand.toLowerCase()}.svg`} alt={`${cardBrand} logo`} />
    </Wrapper>
  );
}

const paddingMap: Record<CardBrandWithoutLocal, string> = {
  Visa: '6px 3px',
  MasterCard: '4px',
  Amex: '3px',
  Diners: '2px',
  UnionPay: '3px',
};

const Wrapper = styled(Flex)<{ cardBrand: CardBrandWithoutLocal }>`
  width: 36px;
  height: 22px;
  padding: ${({ cardBrand }) => paddingMap[cardBrand]};
  border: 1px solid ${COLOR_PALETTE.gray400};
  border-radius: 4px;
  background-color: ${COLOR_PALETTE.white};
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
