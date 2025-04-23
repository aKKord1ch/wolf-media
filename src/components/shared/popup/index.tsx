"use client";

import clsx from "clsx";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import css from "./index.module.css";
import { useState } from "react";

interface PopupInterface {
  isOpen: boolean;
  setOpen: () => void;
}

const schema = z.object({
  name: z.string().min(1, { message: "Это поле обязательно" }),
  phone: z
    .string()
    .min(1, { message: "Это поле обязательно" })
    .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, {
      message: "Неверный формат телефона",
    }),
  message: z.string().min(1, { message: "Это поле обязательно" }),
});

type FormData = z.infer<typeof schema>;

export default function Popup({ isOpen, setOpen }: PopupInterface) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [phone, setPhone] = useState("");

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    const dialog = document.getElementById("popup");
    if (dialog && !dialog.contains(event.target as Node)) {
      setOpen();
    }
  };

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");

    if (!digits) return "";

    const normalized =
      digits.startsWith("7") || digits.startsWith("8")
        ? digits.slice(1)
        : digits;

    let formatted = "+7";

    if (normalized.length > 0) formatted += ` (${normalized.slice(0, 3)}`;
    if (normalized.length >= 4) formatted += `) ${normalized.slice(3, 6)}`;
    if (normalized.length >= 7) formatted += `-${normalized.slice(6, 8)}`;
    if (normalized.length >= 9) formatted += `-${normalized.slice(8, 10)}`;

    return formatted;
  };

  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(event.target.value);
    setPhone(formattedPhone);
    setValue("phone", formattedPhone);
  };

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setOpen();
  };

  return (
    <div
      className={clsx(css.wrapper, { [css.opened]: isOpen })}
      onClick={(e) => handleClickOutside(e)}
    >
      <dialog className={css.dialog} id="popup">
        <div className={css.cross} onClick={() => setOpen()}></div>

        <span className={css.title}>Написать нам</span>

        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <fieldset className={css.input_container}>
            <div className={clsx(css.inputWrapper, css.name)}>
              <input
                type="text"
                id="name-input"
                className={clsx(css.name, { [css.error_input]: errors.name })}
                placeholder=" "
                minLength={2}
                maxLength={40}
                {...register("name")}
              />
              <label htmlFor="name-input" className={clsx(css.label)}>
                <span className={clsx(css.name_span)}>Ваше имя</span>
              </label>
              {errors.name && (
                <span className={css.error}>{errors.name.message}</span>
              )}
            </div>
          </fieldset>

          <fieldset className={css.input_container}>
            <div className={clsx(css.inputWrapper, css.tel)}>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    type="tel"
                    id="phone-input"
                    className={clsx(css.tel, {
                      [css.error_input]: errors.phone,
                    })}
                    placeholder=" "
                    value={phone}
                    onChange={(e) => {
                      const formatted = formatPhoneNumber(e.target.value);
                      setPhone(formatted);
                      field.onChange(formatted);
                    }}
                  />
                )}
              />

              <label htmlFor="phone-input" className={clsx(css.label)}>
                <span className={clsx(css.tel_span)}>Ваш телефон</span>
              </label>
              {errors.phone && (
                <span className={css.error}>Это поле обязательно</span>
              )}
            </div>
          </fieldset>

          <fieldset className={css.input_container}>
            <div className={clsx(css.inputWrapper, css.mess)}>
              <input
                type="text"
                id="mess-input"
                className={clsx(css.mess, css.tel, {
                  [css.error_input]: errors.message,
                })}
                placeholder=" "
                {...register("message")}
              />
              <label htmlFor="mess-input" className={clsx(css.label)}>
                <span className={clsx(css.mess_span)}>Ваше сообщение</span>
              </label>
              {errors.message && (
                <span className={css.error}>{errors.message.message}</span>
              )}
            </div>
          </fieldset>

          <button type="submit">
            <span>Отправить</span>
          </button>

          <span>
            Нажимая кнопку “Отправить” вы даёте своё согласие на обработку
            персональных данных
          </span>
        </form>
      </dialog>
    </div>
  );
}
