import Flex from '@/components/common/shared/Flex.tsx';
import { BASE_URL } from '@/constants/baseUrl.ts';
import type { CardBrand } from '@/lib/getCardBrand.ts';
import { COLOR_PALETTE } from '@/styles/colorPalette.ts';
import styled from '@emotion/styled';

interface CardBrandLogoProps {
  cardBrand: CardBrand;
}

type CardBrandWithoutLocal = Exclude<CardBrand, 'Local'>;

export default function CardBrandLogo({ cardBrand = 'Local' }: CardBrandLogoProps) {
  if (cardBrand === 'Local') return null;
  return (
    <Wrapper padding={paddingMap[cardBrand]} justify="center" align="center">
      <Logo src={`${BASE_URL}/${cardBrand.toLowerCase()}.svg`} alt={`${cardBrand} 로고`} />
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

const Wrapper = styled(Flex)<{ padding: string }>`
  width: 36px;
  height: 22px;
  padding: ${({ padding }) => padding};
  border: 1px solid ${COLOR_PALETTE.gray400};
  border-radius: 4px;
  background-color: ${COLOR_PALETTE.white};
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
