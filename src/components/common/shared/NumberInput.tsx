import Input from './Input.tsx';

export default function NumberInput(props: React.ComponentProps<'input'>) {
  const sanitizeValue = (value: string) => {
    return value.replace(/\D/g, '');
  };

  // TODO: 이 방식이 최선인가? 검토 필요
  // -> useForm 내부로 정규화 로직을 집어넣는다거나...
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = sanitizeValue(e.target.value);
    props.onChange?.(e);
  };

  return <Input {...props} inputMode="numeric" onChange={handleChange} />;
}
