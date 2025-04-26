import { useState } from "react";
import schema from "../assets/schema";
import { FormData } from "../assets/schema";
import { useForm } from "./useForm";

export const useValidation = () => {
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const { userData, updateField } = useForm();

  const validateField = (
   isBlur: boolean,
   type: keyof FormData,
   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateField(type, e.target.value);

    if (isBlur) {
      setErrors((prev) => ({
        ...prev,
        [type]: schema.safeParse(userData).error?.flatten().fieldErrors?.[
          type
        ]?.[0],
      }));
    } else {
      setErrors((prev) => ({ ...prev, [type]: "" }));
    }
  };

  const validateAll = () => {
    const result = schema.safeParse(userData);

    if (!result.success) {
      setErrors({
        name: result.error.flatten().fieldErrors?.name?.[0] ?? "",
        phone: result.error.flatten().fieldErrors?.phone?.[0] ?? "",
        message: result.error.flatten().fieldErrors?.message?.[0] ?? "",
      });

      return false;
    }
    return true;
  };

  return {
    errors,
    validateField,
    validateAll,
  };
};
