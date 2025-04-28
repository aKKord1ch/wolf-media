import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "Это поле обязательно" })
    .max(25, { message: "Введенное имя слишком длинное" })
    .regex(/^[a-zA-Zа-яА-ЯёЁ\-]+$/, {
      message: "Имя может содержать только буквы и тире",
    }),
  phone: z
    .string()
    .min(1, { message: "Это поле обязательно" })
    .regex(/^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/, {
      message: "Неверный формат телефона",
    })
    .regex(/^\+7\s(9\d{2}|8\d{2})\s\d{3}\s\d{2}\s\d{2}$/, {
      message: "Некорректный код оператора",
    }),
  message: z.string().min(1, { message: "Это поле обязательно" }),
});

export type FormData = z.infer<typeof schema>;

export default schema;
