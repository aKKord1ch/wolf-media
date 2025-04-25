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
    .regex(/^\+7 \d{3} \d{3} \d{2} \d{2}$/, {
      message: "Неверный формат телефона",
    }),
  message: z.string().min(1, { message: "Это поле обязательно" }),
});

export type FormData = z.infer<typeof schema>;

export default schema