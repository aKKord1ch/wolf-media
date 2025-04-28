import clsx from "clsx";
import schema, { FormData } from "../assets/schema";

interface ButtonProps {
   userData: FormData
   classDisabled: string
}

export const ButtonSubmit = ({userData, classDisabled}: ButtonProps) => {
  const validate = schema.safeParse(userData).success

  const isDisabled = Object.values(userData).some((item) => item.trim() === "") || !validate;

  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={clsx({
        [classDisabled]: (isDisabled),
      })}
    >
      <span>Отправить</span>
    </button>
  );
};
