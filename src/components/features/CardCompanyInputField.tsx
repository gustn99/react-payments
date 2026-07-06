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
  const options = ['BC카드', '신한카드', '카카오뱅크', '현대카드', '우리카드', '롯데카드', '하나카드', '국민카드'];

  return (
    <CardInputField title="카드사를 선택해 주세요" caption="현재 국내 카드사만 가능합니다.">
      <Select {...props} value={props.value || PLACEHOLDER} isEmpty={props.value === '' || props.value === PLACEHOLDER}>
        <Option disabled hidden>
          {PLACEHOLDER}
        </Option>
        {options.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Select>
    </CardInputField>
  );
}
