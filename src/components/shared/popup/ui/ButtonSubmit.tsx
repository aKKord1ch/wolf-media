import clsx from "clsx";
import { FormData } from "../assets/schema";

interface ButtonProps {
   userData: FormData
   classDisabled: string

}

export const ButtonSubmit = ({userData, classDisabled}: ButtonProps) => {
  return (
    <button
      type="submit"
      disabled={Object.values(userData).some((item) => item.trim() === "")}
      className={clsx({
        [classDisabled]: Object.values(userData).some(
          (item) => item.trim() === ""
        ),
      })}
    >
      <span>Отправить</span>
    </button>
  );
};
