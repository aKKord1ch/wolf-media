import { useState } from "react";
import schema, { FormData } from "../assets/schema";

export const useValidation = (userData?: FormData) => {
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateField = (type: keyof FormData, value: string, isBlur = false) => {
    const result = schema.safeParse({ ...userData, [type]: value });

    if (isBlur && !result.success) {
      const errorMsg = result.error.flatten().fieldErrors?.[type]?.[0] ?? "";
      setErrors((prev) => ({ ...prev, [type]: errorMsg }));
    } else {
      setErrors((prev) => ({ ...prev, [type]: "" }));
    }
  };

  const validateAll = () => {
    const result = schema.safeParse(userData);
    if (!result.success) {
      const flattened = result.error.flatten().fieldErrors;
      setErrors({
        name: flattened.name?.[0] ?? "",
        phone: flattened.phone?.[0] ?? "",
        message: flattened.message?.[0] ?? "",
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
