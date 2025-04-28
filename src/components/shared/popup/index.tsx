"use client";

import {
  clsx,
  css,
  React,
  useState,
  handleClickOutside,
  schema,
  DefaultInput,
  ButtonSubmit,
  FieldsetWrapper,
  PhoneInput,
  AsideList,
  FormData,
} from "./imports";

import { useValidation } from "./hooks/useValidation";
import { useForm } from "./hooks/useForm";
import sendToTelegrammAPI from "./api/sendToTelegrammAPI";
import { TransactionLoader } from "./ui/thanks-block";

interface PopupInterface {
  isOpen: boolean;
  setOpen: () => void;
}

export default function Popup({ isOpen, setOpen }: PopupInterface) {
  const { errors, validateField, validateAll } = useValidation();

  const { userData, setUserData } = useForm();

  const [step, setStep] = useState(1);

  const [isSended, setIsSended] = useState(false);

  let formData: FormData = {
    name: "",
    message: "",
    phone: "",
  };

  const sendSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUserData((prev) => ({ ...prev, ...formData }));

    if (!validateAll()) return;

    try {
      sendToTelegrammAPI(userData);

      setIsSended(true);

      setTimeout(() => {
        setIsSended(false);
        setOpen();
      }, 2000);
    } catch (error) {
      throw new Error(`${error}`)
    }

    setUserData({
      name: "",
      message: "",
      phone: "",
    });
    setStep(1);
  };

  const userDataCB = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: keyof FormData
  ) => {
    setUserData((prev) => ({
      ...prev,
      [type]: e.target.value,
    }));
    formData= {...userData, [type]: e.target.value}
  };

  const stepCB = () => {
    let resultForm = schema.safeParse(formData);
    if (
      !resultForm.error?.flatten().fieldErrors.name &&
      !resultForm.error?.flatten().fieldErrors.phone
    ) {
      setStep(3);
    } else {
      setStep(2);
    }
    if (!resultForm.error?.flatten().fieldErrors.phone) {
      setStep(3);
    }
  };

  return (
    <div
      className={clsx(css.wrapper, { [css.opened]: isOpen })}
      onClick={(e) => handleClickOutside(setOpen, e)}
    >
      <dialog className={css.dialog} id="popup">
        <div className={css.cross} onClick={() => setOpen()}></div>

        <span className={css.title}>Написать нам</span>

        <AsideList
          classList={css.aside_list}
          classActive={css.active_item}
          classItem={css.aside_item}
          step={step}
        />

        <form className={css.form} onSubmit={sendSubmit}>
          <FieldsetWrapper
            classInputWrapper={css.inputWrapper}
            classContainer={css.input_container}
            classInputType={css.name}
          >
            <DefaultInput
              type={"name"}
              id={"name-input"}
              className={css.name}
              errorsCB={validateField}
              stepCB={stepCB}
              userDataCB={userDataCB}
              textarea={false}
              classDisabled={css.disabled_input}
              step={step}
              value={userData}
              classError={css.error}
              classLabel={css.label}
              classSpan={css.name_span}
              errors={errors}
            />
          </FieldsetWrapper>

          <FieldsetWrapper
            classContainer={css.input_container}
            classInputType={css.tel}
            classInputWrapper={css.inputWrapper}
          >
            <PhoneInput
              id={"phone-input"}
              className={css.tel}
              errorsCB={validateField}
              stepCB={stepCB}
              userDataCB={userDataCB}
              textarea={false}
              classDisabled={css.disabled_input}
              step={step}
              type="phone"
              value={userData}
              classError={css.error}
              classLabel={css.label}
              classSpan={css.tel_span}
              errors={errors}
            />
          </FieldsetWrapper>

          <FieldsetWrapper
            classContainer={css.input_container}
            classInputType={css.mess}
            classInputWrapper={css.inputWrapper}
          >
            <DefaultInput
              id={"mess-input"}
              className={css.mess}
              classDisabled={css.disabled_input}
              userDataCB={userDataCB}
              errorsCB={validateField}
              stepCB={stepCB}
              textarea={true}
              step={step}
              value={userData}
              type="message"
              classError={css.error}
              classLabel={css.label}
              classSpan={css.mess_span}
              errors={errors}
            />
          </FieldsetWrapper>

          <ButtonSubmit userData={userData} classDisabled={css.disabled} />

          <span>
            Нажимая кнопку “Отправить” вы даёте своё согласие на обработку
            персональных данных
          </span>
        </form>

        {isSended ? <TransactionLoader /> : ""}
      </dialog>
    </div>
  );
}
