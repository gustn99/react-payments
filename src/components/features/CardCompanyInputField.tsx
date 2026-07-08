import { CARD_COMPANIES } from '../../constants/cardCompanies.ts';
import useCardForm from '../../hooks/useCardForm.ts';
import CardInputField from '../common/entities/CardInputField.tsx';
import Option from '../common/shared/Option.tsx';
import Select from '../common/shared/Select.tsx';

const PLACEHOLDER = '카드사를 선택해주세요';

interface CardCompanyInputFieldProps {
  onComplete?: () => void;
}

export default function CardCompanyInputField({ onComplete }: CardCompanyInputFieldProps) {
  const { register } = useCardForm();
  const props = register('cardCompany', { onSuccess: onComplete });

  return (
    <CardInputField title="카드사를 선택해 주세요" caption="현재 국내 카드사만 가능합니다.">
      <Select {...props} autoFocus value={props.value} isEmpty={!props.value}>
        <Option value="" disabled hidden>
          {PLACEHOLDER}
        </Option>
        {Object.entries(CARD_COMPANIES).map(([key, company]) => (
          <Option key={key} value={key}>
            {company.name}
          </Option>
        ))}
      </Select>
    </CardInputField>
  );
}
