import clsx from "clsx";
import schema, { FormData } from "../assets/schema";
import { InputProps } from "../assets/interface";

export default function DefaultInput({
  type,
  id,
  className,
  classSpan,
  classLabel,
  classError,
  classDisabled,
  errors,
  value,
  errorsCB,
  stepCB,
  userDataCB,
  textarea,
  step,
}: InputProps) {
  
  const changeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: keyof FormData
  ) => {
    userDataCB(e, type);
    errorsCB(false, type, e);
    stepCB();
  };

  return (
    <>
      {!textarea && (
        <>
          <input
            value={value.name}
            type={type}
            id={id}
            className={clsx(className)}
            placeholder=" "
            onChange={(e) => {
              changeEventHandler(e, "name");
            }}
            onBlur={(e) => errorsCB(true, "name", e)}
          />
          <label htmlFor="name-input" className={clsx(classLabel)}>
            <span className={clsx(classSpan)}>Ваше имя</span>
          </label>
          {errors.name && <span className={classError}>{errors.name}</span>}
        </>
      )}
      {textarea && (
        <>
          <textarea
            value={value.message}
            id={id}
            className={clsx(className, { [classDisabled]: step < 3 })}
            placeholder=" "
            onChange={(e) => {
              changeEventHandler(e, "message");
            }}
            onBlur={(e) => errorsCB(true, "message", e)}
            disabled={step < 3}
          />
          <label htmlFor="mess-input" className={clsx(classLabel)}>
            <span className={clsx(classSpan)}>Ваше сообщение</span>
          </label>
          {errors.message && (
            <span className={classError}>{errors.message}</span>
          )}
        </>
      )}
    </>
  );
}
