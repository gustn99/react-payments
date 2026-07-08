import styled from '@emotion/styled';
import { BASE_URL } from '../../../constants/baseUrl.ts';
import { CARD_COMPANIES, type CardCompany } from '../../../constants/cardCompanies.ts';
import { chunkString } from '../../../lib/chunkString.ts';
import { getCardBrand } from '../../../lib/getCardBrand.ts';
import { COLOR_PALETTE } from '../../../styles/colorPalette.ts';
import Flex from '../shared/Flex';
import Spacing from '../shared/Spacing.tsx';
import Text from '../shared/Text.tsx';
import CardBrandLogo from './CardBrandLogo.tsx';

interface CardPreviewProps {
  cardNumbers: string;
  expirationMonth: string;
  expirationYear: string;
  cardCompany: string;
}

export default function CardPreview({
  cardNumbers: cardNumbersString,
  expirationMonth,
  expirationYear,
  cardCompany,
}: CardPreviewProps) {
  const cardNumbers = chunkString(cardNumbersString, 4);
  const cardBrand = getCardBrand(cardNumbersString);

  return (
    <Container direction="column" justify="center" cardCompany={cardCompany}>
      <CardGraphicWrapper justify="space-between">
        <IC />
        <CardBrandLogo cardBrand={cardBrand} />
      </CardGraphicWrapper>

      <CardNumbersWrapper gap={10}>
        <Text typograph="cardPreview" color={COLOR_PALETTE.white}>
          {cardNumbers[0]}
        </Text>
        <Text typograph="cardPreview" color={COLOR_PALETTE.white}>
          {cardNumbers[1]}
        </Text>
        <MaskedCardNumbers length={cardNumbers[2]?.length ?? 0}></MaskedCardNumbers>
        <MaskedCardNumbers length={cardNumbers[3]?.length ?? 0}></MaskedCardNumbers>
      </CardNumbersWrapper>
      <Spacing direction="vertical" size={8} />

      <Text typograph="cardPreview" color={COLOR_PALETTE.white} width={50}>
        {expirationMonth}
        {expirationYear && '/'}
        {expirationYear}
      </Text>
    </Container>
  );
}

const Container = styled(Flex)<{ cardCompany: string }>`
  position: relative;
  width: 212px;
  height: 132px;
  padding: 8px 14px;
  border-radius: 4px;
  background-color: ${({ cardCompany = '' }) => CARD_COMPANIES[cardCompany as CardCompany]?.color || COLOR_PALETTE.gray850};
`;

const CardGraphicWrapper = styled(Flex)`
  position: absolute;
  top: 8px;
  left: 12px;
  right: 12px;
`;

const IC = styled.div`
  width: 36px;
  height: 22px;
  border-radius: 4px;
  background-color: ${COLOR_PALETTE.gold};
`;

const CardNumbersWrapper = styled(Flex)`
  height: 20px;
`;

const MaskedCardNumbers = ({ length }: { length: number }) => {
  return (
    <Flex gap={5}>
      {Array.from({ length: length }).map((_, i) => (
        <Mask key={i} src={`${BASE_URL}/mask.svg`} alt="mask" />
      ))}
    </Flex>
  );
};

const Mask = styled.img`
  width: 4px;
  height: 4px;
  margin: auto;
`;
