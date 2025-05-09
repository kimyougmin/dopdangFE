import InputLabel, { InputLabelProps } from '@/components/atoms/texts/inputLabel/InputLabel';
import StandardButton, {
  StandardButtonProps,
} from '@/components/atoms/buttons/standardButton/StandardButton';
import TextInput, { TextInputProps } from '@/components/atoms/inputs/textInput/TextInput';

type InputButtonGroupProps = {
  inputProps: TextInputProps;
  buttonProps: StandardButtonProps;
  labelProps: InputLabelProps;
};
export default function InputButtonGroup({
  inputProps,
  buttonProps,
  labelProps,
}: InputButtonGroupProps) {
  return (
    <div className="w-full">
      <div className="mb-8">
        <InputLabel {...labelProps} />
      </div>
      <div className="flex gap-12">
        <TextInput {...inputProps} />
        <StandardButton {...buttonProps} />
      </div>
    </div>
  );
}
