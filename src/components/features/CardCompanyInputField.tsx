import CardInputField from '@/components/common/entities/CardInputField.tsx';
import Option from '@/components/common/shared/Option.tsx';
import Select from '@/components/common/shared/Select.tsx';
import { CARD_COMPANIES } from '@/constants/cardCompanies.ts';
import useCardForm from '@/hooks/useCardForm.ts';

interface CardCompanyInputFieldProps {
  onComplete?: () => void;
}

export default function CardCompanyInputField({ onComplete }: CardCompanyInputFieldProps) {
  const { register, refs } = useCardForm();
  const { value, onBlur, ...props } = register('cardCompany', { onSuccess: onComplete });

  const handleBlur = () => {
    onBlur();

    if (!refs.current.expirationMonth) return;
    refs.current.expirationMonth.focus();
  };

  return (
    <CardInputField title="카드사를 선택해 주세요" caption="현재 국내 카드사만 가능합니다.">
      <Select {...props} autoFocus value={value} isEmpty={!value} onBlur={handleBlur}>
        <Option value="" disabled hidden>
          카드사를 선택해주세요
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
