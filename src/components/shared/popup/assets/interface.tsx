import { FormData } from "./schema";

export interface InputProps {
  type: string;
  id: string;
  className: string;
  classDisabled: string;
  value: FormData;
  errorsCB: (
    isBlur: boolean,
    type: keyof FormData,
    a: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  stepCB: () => void;
  userDataCB: (
    a: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: keyof FormData
  ) => void;
  textarea: boolean;
  step: number;
  errors: any,
  classError: string,
  classLabel: string,
  classSpan: string
}
