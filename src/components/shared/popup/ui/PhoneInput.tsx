import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.ru";
import clsx from "clsx";
import React from "react";
import { InputProps } from "../assets/interface";
import { FormData } from "../imports";

export default function PhoneInput({
  id,
  className,
  classDisabled,
  classSpan,
  classLabel,
  classError,
  errorsCB,
  stepCB,
  userDataCB,
  value,
  step,
  errors,
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
      <Cleave
        options={{
          phone: true,
          phoneRegionCode: "RU",
          prefix: "+7",
          noImmediatePrefix: true,
          numericOnly: true,
        }}
        onChange={(e) => changeEventHandler(e, "phone")}
        className={clsx(className, { [classDisabled]: step < 2 })}
        disabled={step < 2}
        id={id}
        placeholder=" "
        onBlur={(e) => errorsCB(true, "phone", e)}
        value={value.phone}
      />
      <label htmlFor="phone-input" className={clsx(classLabel)}>
        <span className={clsx(classSpan)}>Ваш телефон</span>
      </label>
      {errors.phone && <span className={classError}>{errors.phone}</span>}
    </>
  );
}
