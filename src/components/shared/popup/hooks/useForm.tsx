import { useState } from "react";
import { FormData } from "../assets/schema";

export const useForm = () => {
  const [userData, setUserData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });

  const updateField = (
    key: keyof FormData,
    value: string
  ) => {
    setUserData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return {
    userData,
    setUserData,
    updateField,
  };
};
