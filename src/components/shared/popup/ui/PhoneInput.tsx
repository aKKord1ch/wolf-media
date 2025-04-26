import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.ru";
import clsx from "clsx";
import React from "react";
import { InputProps } from "../assets/interface";

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
  errors
}: InputProps) {
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
        onChange={(e) => {
          errorsCB(false, "phone", e);
          userDataCB(e, "phone");
          stepCB();
        }}
        className={clsx(className, { [classDisabled]: step < 2 })}
        disabled={step < 2}
        id={id}
        placeholder=" "
        onBlur={(e) => errorsCB(true, "phone", e)}
      />
      <label htmlFor="phone-input" className={clsx(classLabel)}>
        <span className={clsx(classSpan)}>Ваш телефон</span>
      </label>
      {errors.phone && <span className={classError}>{errors.phone}</span>}
    </>
  );
}
